import { Service } from 'typedi'
import { ResponseSchema } from 'routing-controllers-openapi';
import { Controller, Body, Post, Get, CurrentUser } from 'routing-controllers';

import { SuccessResponse } from '@responses//';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dto/user.dto';
import { UserData, UserResponse } from '../dto/response/user.response';

@Service()
@Controller('/api/v1/users')
export class UserController {
    constructor(
        private readonly userService: UserService
    ){}

    @Post()
    @ResponseSchema(UserResponse)
    async createUser(@Body() body: CreateUserDto ): Promise<UserResponse> {
        const user = await this.userService.createUser({ ...body })
        return new SuccessResponse<UserData>('User Created', { user })
    }
}