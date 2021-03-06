import { CreateUserRepository } from '../../../../../backend/data/contracts/repositories'
import { CreateUserService } from '../../../../../backend/data/services'
import { CreateUserError } from '../../../../../backend/domain/errors'
import { CreateUser } from '../../../../../backend/domain/features'

class FindUserError extends Error {
  constructor () {
    super('Failed to find the user')
    this.name = 'FindUserError'
  }
}

class CreateUserRepositorySpy implements CreateUserRepository {
  name?: string
  email?: string
  phone?: string
  password?: string
  result = undefined

  async create(params: CreateUser.Params): Promise<CreateUserRepository.Result> {
    this.name = params.name
    this.email = params.email
    this.phone = params.phone
    this.password = params.password

    return this.result
  }
}

describe('CreateUserService', () => {
  it('should call CreateUserRepository with correct params', async () => {
    const createUserRepo = new CreateUserRepositorySpy()
    const sut = new CreateUserService(createUserRepo)

    const data = {
      name: 'any_name',
      email: 'any_email',
      phone: 'any_phone',
      password: 'any_password'
    }

    await sut.perform(data)

    expect(createUserRepo.name).toBe('any_name')
    expect(createUserRepo.email).toBe('any_email')
    expect(createUserRepo.phone).toBe('any_phone')
    expect(createUserRepo.password).toBe('any_password')
  })

  it('should return CreateUserError when CreateUserService fails', async () => {
    const createUserRepo = new CreateUserRepositorySpy()
    const sut = new CreateUserService(createUserRepo)

    createUserRepo.result = undefined

    const data = {
      name: 'any_name',
      email: 'any_email',
      phone: 'any_phone',
      password: 'any_password'
    }

    const createUserResult = await sut.perform(data)

    expect(createUserResult).toEqual(new CreateUserError())
  })
})

export { }

