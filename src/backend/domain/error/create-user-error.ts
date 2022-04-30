export class CreateUserError extends Error {
  constructor () {
    super('Unable to create a new user')
    this.name = 'CreateUserError'
  }
}
