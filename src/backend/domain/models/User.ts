export type User = {
  fullname: string
  email: string
  password: string
  type: string
  userProfile: Customer | Medic
}

export type Customer = {
  address?: Address
  age: string
  cpf?: string
}

export type Medic = {
  clinicAddress: ClinicAddress
  crm: number
  cpf: string
  cnpj?: string
  speciality: Speciality
}

type Speciality = {
  name: string
  code?: string
}

type Address = {
  street: string
  complement: string
  number: string
  zipCode?: string
  phone?: string
}

type ClinicAddress = {
  street: string
  complement: string
  number: string
  zipCode: string
  phone?: string
  businessPhone: string
}
