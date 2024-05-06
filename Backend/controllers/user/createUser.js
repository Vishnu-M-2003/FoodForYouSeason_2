import mongoose from "mongoose"
import sellerModel from "../../Database/Models/sellerModel.js"
import customerModel from "../../Database/Models/customerModel.js"

const createUser = async (req, res) => {

  let { userName, restaurantName, place, email, password, aadhaar, contactNumber } = req.body

  let data

  if (aadhaar) {
    data = new sellerModel({
      userName: userName,
      restaurantName: restaurantName,
      place: place,
      email: email,
      password: password,
      aadhaar: aadhaar,
      contactNumber: contactNumber
    })
  }
  if (!aadhaar) {
    data = new customerModel({
      userName: userName,
      email: email,
      password: password,
    })

  }
  const savedData = await data.save()
    .then((res) => console.log(res))
    .catch((err) => console.log(err))

  res.send("ok")

}

export default createUser