import { Service } from 'typedi'
import { InjectRepository } from 'typeorm-typedi-extensions'

import { FullShop, Shop, ShopsListing } from '../shop.types'
import { FilterShop, UpdateShop } from '../shop.types'
import { ShopRepository } from '../repository/shop.repository'
import { NotFoundError } from '@exceptions//'

@Service()
export class ShopService{
    constructor(
        @InjectRepository()
        private readonly shopRepository: ShopRepository
    ){}

    async createShop(data: Shop) {
        const shop = await this.shopRepository.createEntity(data)
        return shop
    }

    async getShop(data: Partial<FullShop>){
        const shop = await this.findOneOrFail(data)
        return shop
    }
    
    async listShops() {
        const shops = await this.shopRepository.find({select: ['id', 'name']});
        return shops
    }

    async findOneOrFail(query: FilterShop){
        try{ return await this.shopRepository.findOneOrFail({ where: query });}
        catch(err){ throw new NotFoundError("shop not found") }
    }

    async findOne(query: FilterShop){
        return await this.shopRepository.findOne({ where: query});
    }

    async update(query: FilterShop, body: UpdateShop){
        const shop = await this.shopRepository.updateEntity(query, body);
        return shop
    }
}