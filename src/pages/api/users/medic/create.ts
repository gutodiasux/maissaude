import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'
import { CreateUserService } from '../../../../backend/data/services/CreateUserService'

const createMedic = new CreateUserService()

const handler = nextConnect<NextApiRequest, NextApiResponse>({
  attachParams: true,
  onNoMatch: (req, res) => {
    res.status(404).json({ message: 'Resource not found!' })
  },
  onError: (err, req, res, next) => {
    console.log(err.stack)
    res.status(500).json({ message: 'Something went wrong!' })
  }
})
  .post(async (req, res) => {
    const {
      fullname,
      email,
      password,
      type,
      userProfile: {
        clinicAddress: {
          street,
          complement,
          number,
          zipCode,
          phone,
          businessPhone
        },
        crm,
        cpf,
        cnpj,
        speciality: {
          name,
          code
        }
      }
    } = req.body
    await createMedic.perform({
      fullname,
      email,
      password,
      type,
      userProfile: {
        clinicAddress:
        {
          street,
          complement,
          number,
          zipCode,
          phone,
          businessPhone
        },
        crm,
        cpf,
        cnpj,
        speciality: {
          name,
          code
        }
      },
    })
    return res.status(200).json({ message: 'Create medic route works!' })
  })

export default handler
