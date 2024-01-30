import jwt from 'jsonwebtoken'

//verfying a token
const verifyToken = (token) => jwt.verify(token, process.env.SECRET_KEY)


// sigining a token
const createToken = (payload) => jwt.sign(payload, process.env.SECRET_KEY)

 