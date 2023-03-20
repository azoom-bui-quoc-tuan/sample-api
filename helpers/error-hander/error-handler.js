import { ErrorException } from './error-exception'
import ErrorCode from './error-code'

export const errorHandler = (err, req, res, next) => {
  if (err instanceof ErrorException) {
    res.status(err.status).send(err)
  } else {
    res.status(500).json({ code: ErrorCode.SERVER_ERROR, status: 500 })
  }
}
