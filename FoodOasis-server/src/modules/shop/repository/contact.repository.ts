import { EntityRepository } from 'typeorm'

import { ContactEntity } from '../entity/contact.entity';
import { RepositoryCore } from '@core//';

@EntityRepository(ContactEntity)
export class ContactRepository extends RepositoryCore<ContactEntity>{}
