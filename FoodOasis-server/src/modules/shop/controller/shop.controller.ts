import { Service } from 'typedi'
import { ResponseSchema } from 'routing-controllers-openapi';
import { Controller, Body, Post, Get, CurrentUser, Authorized } from 'routing-controllers';

import { SuccessResponse } from '@responses//';
import { ShopService } from '../services/shop.service';
import { CreateShopDto } from '../dto/shop.dto';
import { ShopData, ShopResponse } from '../dto/responses/shop.response';

@Service()
@Controller('/api/v1/shops')
export class UserController {
    constructor(
        private readonly shopService: ShopService
    ){}

    @Post()
    @Authorized()
    @ResponseSchema(ShopResponse)
    async createShop(@Body() body: CreateShopDto, @CurrentUser() {userId}: CurrentUser): Promise<ShopResponse> {
        const shop = await this.shopService.createShop({ userId, ...body })
        return new SuccessResponse<ShopData>('Shop Created', { shop })
    }

    @Get('/:id')
    @Authorized()
    @ResponseSchema(ShopResponse)
    async getProfile(@CurrentUser() {userId}: CurrentUser ): Promise<ShopResponse> {
        const shop = await this.shopService.getShop({ userId })
        return new SuccessResponse<ShopData>('Shop Found', { shop })
    }
}