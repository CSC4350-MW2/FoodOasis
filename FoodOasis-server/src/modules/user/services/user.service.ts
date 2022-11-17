import { Service } from 'typedi'
import { InjectRepository } from 'typeorm-typedi-extensions'

import { FullUser, User } from '../user.types'
import { FilterUser, UpdateUser } from '../user.types'
import { UserRepository } from '../repository/user.repository'
import { NotFoundError } from '@exceptions//'

@Service()
export class UserService{
    constructor(
        @InjectRepository()
        private readonly userRepository: UserRepository
    ){}

    async createUser(data: User) {
        const user = await this.userRepository.createEntity(data)

        return user
    }

    async getUser(data: Partial<FullUser>){
        const user = await this.findOneOrFail(data)
        return user
    }
    
    async findOneOrFail(query: FilterUser){
        try{ return await this.userRepository.findOneOrFail({ where: query });}
        catch(err){ throw new NotFoundError("user not found") }
    }

    async findOne(query: FilterUser){
        return await this.userRepository.findOne({ where: query});
    }

    async update(query: FilterUser, body: UpdateUser){
        const user = await this.userRepository.updateEntity(query, body)
        return user
    }
}