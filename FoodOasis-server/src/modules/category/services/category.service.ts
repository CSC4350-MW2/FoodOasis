import { Service } from 'typedi'
import { InjectRepository } from 'typeorm-typedi-extensions'

import { FullCategory, Category } from '../category.types'
import { FilterCategory, UpdateCategory } from '../category.types'
import { CategoryRepository } from '../repository/category.repository'
import { NotFoundError } from '@exceptions//'

@Service()
export class CategoryService{
    constructor(
        @InjectRepository()
        private readonly categoryRepository: CategoryRepository
    ){}

    async createCategory(data: Category) {
        const category = await this.categoryRepository.createEntity(data)
        return category
    }

    async getCategory(data: Partial<FullCategory>){
        const category = await this.findOneOrFail(data)
        return category
    }
    
    async findOneOrFail(query: FilterCategory){
        try{ return await this.categoryRepository.findOneOrFail({ where: query });}
        catch(err){ throw new NotFoundError("category not found") }
    }

    async findOne(query: FilterCategory){
        return await this.categoryRepository.findOne({ where: query});
    }

    async update(query: FilterCategory, body: UpdateCategory){
        const category = await this.categoryRepository.updateEntity(query, body);
        return category
    }
}