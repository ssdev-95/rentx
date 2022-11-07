import { Request, Response, NextFunction } from 'express'
import * as jwt from 'jsonwebtoken'

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers.authorization.replace('Bearer ', '')

  if (!token) {
    return res.status(401).json({
      error: 'Unauthorized',
    })
  }

  const secret = process.env.JWT_SECRET
  const isValidToken = jwt.verify(token, secret) as jwt.JwtPayload

  req.body.customerId = isValidToken.id

  return next()
}
