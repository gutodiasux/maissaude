import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../backend/infra/database'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, cpf, age } = req.body

    await prisma.patient.create({
      data: {
        name: name,
        cpf: cpf,
        age: age
      }
    })

    return res.status(201).end()
  }

  if (req.method === 'GET') {
    const patients = await prisma.patient.findMany({
      orderBy: {
        created_at: 'desc'
      }
    })

    return res.status(200).json(patients)
  }
}
