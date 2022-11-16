import { EntityRepository } from 'typeorm'

import { ShopEntity } from '../entity/shop.entity';
import { RepositoryCore } from '@core//';

@EntityRepository(ShopEntity)
export class ShopRepository extends RepositoryCore<ShopEntity>{}
