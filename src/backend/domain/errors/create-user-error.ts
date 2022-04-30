export class CreateUserError extends Error {
  constructor () {
    super('Create user failed')
    this.name = 'CreateUserError'
  }
}
