export interface CreateUser {
  perform: (params: CreateUser.Params) => Promise<CreateUser.Result>
}

export namespace CreateUser {
  export type Params = {
    name: string
    email: string
    password: string
    phone: string
  }

  export type Result = void | Error
}
