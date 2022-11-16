import { EntityRepository } from 'typeorm'

import { GpsEntity } from '../entity/gps.entity';
import { RepositoryCore } from '@core//';

@EntityRepository(GpsEntity)
export class UserRepository extends RepositoryCore<GpsEntity>{}
