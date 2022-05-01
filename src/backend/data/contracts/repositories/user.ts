
export interface CreateUserRepository {
  create: (params: CreateUserRepository.Params) => Promise<CreateUserRepository.Result>
}

export namespace CreateUserRepository {
  export type Params = {
    name: string
    email: string
    phone: string
    password: string
  }

  export type Result = undefined
}
