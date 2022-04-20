import { Customer, Medic } from '.'

export type User = {
  fullname: string
  email: string
  password: string
  type: string
  userProfile: Customer | Medic
}
