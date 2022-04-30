import { CreateUserError } from '../error'
import { Customer, Medic } from '../models'

export interface CreateUser {
  perform: (params: CreateUser.Params) => Promise<CreateUser.Result>
}

export namespace CreateUser {
  export type Params = {
    fullname: string
    email: string
    password: string
    type: string
    userProfile: Customer | Medic
  }

  export type Result = void | CreateUserError
}
