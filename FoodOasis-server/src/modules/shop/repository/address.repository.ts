import { EntityRepository } from 'typeorm'

import { AddressEntity } from '../entity/address.entity';
import { RepositoryCore } from '@core//';

@EntityRepository(AddressEntity)
export class UserRepository extends RepositoryCore<AddressEntity>{}
