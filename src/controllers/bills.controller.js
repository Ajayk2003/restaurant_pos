import db from "../utils/config"

const getBillsController = async (req, res, next) => {
  const bills = db.bill.findMany()
  if (!bills) {
    throw new customError("Error Getting bills", 500)
  }

  res.status(200).json({bills})
}


const createBillController = async (req, res) => {
  const { } = req.body;
  if (0) {
    throw new Error("All fields are mandatory", 400)
  }
  const data = req.body;

  const bill = db.bill.create({
    data : data
  })

  if (!bill) {
    throw new customError("cannot create bill", 500)
  }

  res.status(203).json(bill)
}


const updateBillController = async (req, res) => {
  const data = req.body
  if (0) {
    throw new Error("All fields are mandatory", 400)
  }

  const updatedBill = db.bill.update({
    where: { id: data.id },
    data : data
  })

  if(updatedBill) {
    throw new customError("Cannot update bill", 500)
  }

  res.status(203).json(updatedBill)

}

const deleteBillController = async (req, res) => {
  const id = req.params.id

  const bill = db.bill.delete({
    where : {id : id}
  })

  if (!bill) {
    throw new customError("cannot delete bill", 500)    
  }
}

const getbillByid = async (req, res) => {
  const id = req.params.id

  const bill = db.bill.findUnique({
    where : {id : id}
  })

  if (!bill) {
    throw new customError("cannot find bill", 500)
  }
  
  res.status(200).json(bill)
}