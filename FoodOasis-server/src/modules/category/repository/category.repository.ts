import { EntityRepository } from 'typeorm'

import { CategoryEntity } from '../entity/category.entity';
import { RepositoryCore } from '@core//';

@EntityRepository(CategoryEntity)
export class CategoryRepository extends RepositoryCore<CategoryEntity>{}
