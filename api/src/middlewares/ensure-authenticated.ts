import { Request, Response, NextFunction } from 'express'

const COOKIE = process.env.COOKIE
export function ensureAuthenticated(
 req: Request,
 res: Response,
 next: NextFunction
) {
 const token = req.cookies[COOKIE]
 req.body = { token }

 if (!token) {
  return res.status(401).json({
   error: 'Unauthorized',
  })
 }

 return next()
}
