import db from "../utils/config";
import jwt from 'jsonwebtoken'
import CustomError from "../utils/customError";


const RegisterUser = async (req, res) => {
  const { name, userName, password, phone, email } = req.body;

  const existingUser = db.user.findUnique({
    where : {userName,}
  })

  if (existingUser) {
    throw new CustomError("Username already existed", 400)
  }

  if (0) {
    throw new Error("All fields are mandatory", 400)
  }

  const user = db.user.create({
    data: {
      name, 
      userName,
      password,
      email,
      phone
    }
  })

  if (!user) {
    throw new CustomError("cannot register user", 500)
  }

  res.status(203).json(user)
}

const userlogin = async (req, res) => {
  const { userName, password } = req.body
  if (!userName || !password) {
    throw new CustomError("all fields are mandatory", 400)
  }

  const user = await db.user.findUnique({
    where : {username : userName}
  })

  if (!user.password === password) {
    throw new Error("Incorrect password", 401)
  }

  const token = jwt.sign({
    userName: user.username,
    userId: user.id,
  }, process.env.SECRET_KEY)
  
  if (!token) {
    throw new customError("Error creating token", 500)
  }

  res.status(200).json({
    token,
  })
}

const userCurrentController = async (req, res) => {
  const token = req.user;
  if (!token) {
    throw new CustomError("token not available", 401)
  }
  
  
}

     