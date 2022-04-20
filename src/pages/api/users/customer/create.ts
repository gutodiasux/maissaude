import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'

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
  .post((req, res) => {
    return res.status(200).json({ message: 'Create customer route works!' })
  })

export default handler
