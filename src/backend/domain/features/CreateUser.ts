import { CreateUserError } from '../error'

export interface CreateUser {
  perform: () => Promise<void>
}

export namespace CreateUser {
  export type Params = {
    fullname: string
    email: string
    password: string
  }

  export type Result = void | CreateUserError
}
