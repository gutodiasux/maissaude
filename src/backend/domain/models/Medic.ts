import { ClinicAddress } from '.'

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
