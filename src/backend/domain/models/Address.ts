export type Address = {
  street: string
  complement: string
  number: string
  zipCode?: string
  phone?: string
}

export type ClinicAddress = {
  street: string
  complement: string
  number: string
  zipCode: string
  phone?: string
  businessPhone: string
}
