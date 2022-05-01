import { CreateUserError } from '../../domain/errors'
import { CreateUser } from '../../domain/features'
import { CreateUserRepository } from '../contracts/repositories'

export class CreateUserService {
  constructor (private readonly createUserRepo: CreateUserRepository) { }

  async perform(params: CreateUser.Params): Promise<CreateUserError> {
    await this.createUserRepo.create(params)

    return new CreateUserError()
  }
}
