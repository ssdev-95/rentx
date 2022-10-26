import { Request, Response, NextFunction } from 'express'
import * as jwt from 'jsonwebtoken'

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers.authorization.replace(
		'Bearer ',
		''
	)

  if (!token) {
    return res.status(401).json({
      error: 'Unauthorized',
    })
  }

	const decoded:any = jwt.decode(token)

	req.body.customerId = decoded.id

  return next()
}
