import { CreateUser } from '../../domain/features'

export class CreateUserService implements CreateUser {
  async perform(params: CreateUser.Params): Promise<CreateUser.Result> {
    console.log(params)
  }
}
