import { CreateUser } from '../../../../../backend/domain/features'

class CreateUserService {
  constructor (private readonly createUserRepo: CreateUserRepository) { }

  async perform(params: CreateUser.Params): Promise<void> {
    await this.createUserRepo.create(params)
  }
}

export interface CreateUserRepository {
  create: (params: CreateUserRepository.Params) => Promise<void>
}

export namespace CreateUserRepository {
  export type Params = {
    name: string
    email: string
    phone: string
    password: string
  }
}

class CreateUserRepositorySpy implements CreateUserRepository {
  name?: string
  email?: string
  phone?: string
  password?: string

  async create(params: CreateUser.Params): Promise<void> {
    this.name = params.name
    this.email = params.email
    this.phone = params.phone
    this.password = params.password
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
})

export { }
