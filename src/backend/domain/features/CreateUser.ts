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

export class CreateUserError extends Error {
  constructor () {
    super('Unable to create a new user')
    this.name = 'CreateUserError'
  }
}