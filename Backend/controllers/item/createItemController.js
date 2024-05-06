import mongoose from "mongoose"
import itemModel from '../../Database/Models/items.model.js'

const createItem = async (req, res) => {

  let {dishName,amount,quantity,category, restorentname} = req.body

  const data = new itemModel({ dishName: dishName,
                    amount: amount,
                    quantity: quantity,
                    category: category,
                    restorentname: restorentname})

  const savedData = await data.save()
  .then((res) => console.log(res))
  .catch((err) => console.log(err))

  res.send("ok")
}



export {createItem}