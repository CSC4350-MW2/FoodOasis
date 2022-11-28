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
    
    async listShops(query?: FilterShop) {
        const shops = await this.shopRepository.find({select: ['id', 'name'], where: query});
        return shops
    }

    async findOneOrFail(query: FilterShop){
        try{ 
            return await this.shopRepository.findOneOrFail({
                select: ['id', 'name'],
                where: query, 
                relations: ['contact', 'gps'] 
            });
        }
        catch(err){ throw new NotFoundError("shop not found") }
    }

    async findOne(query: FilterShop){
        return await this.shopRepository.findOne({ where: query});
    }

    async update(query: FilterShop, body: UpdateShop){
        const shop = await this.shopRepository.updateEntity(query, body);
        return shop
    }

    async arrangedShops(shops: FullShop[], gps: {lat: number, long: number}){
        shops.map(shop => {
            shop.gps?.latitude
        })
    }

    haversineDistance(dist1: {lat: number, long: number}, dist2: {lat: number, long: number}): number{
        var lat1 = this.degrees_to_radians(dist1.lat)
        var long1 = this.degrees_to_radians(dist1.long)
        var lat2 = this.degrees_to_radians(dist2.lat)
        var long2 = this.degrees_to_radians(dist2.long)

        var dlon = long2 - long1
        var dlat = lat2 - lat1
        var a = Math.sin(dlat/2)**2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dlon/2)**2
        var c = 2 * Math.asin(Math.sqrt(a));

        // Radius of the earth in kilometers is 6371
        var km = 6371 * c
        return km;
    }

    degrees_to_radians(degrees: number){
        var pi = Math.PI;
        return degrees * (pi/180);
    }
}