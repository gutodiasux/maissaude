import { Customer } from '.'
import { Medic } from './Medic'

export type User = {
  fullname: string
  email: string
  password: string
  type: string
  userProfile: Customer | Medic
}
