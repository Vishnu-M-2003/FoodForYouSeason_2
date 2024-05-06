import mongoose from "mongoose"
import itemModel from '../../Database/Models/items.model.js'

const editItem = async (req, res) => {
    let {id} = req.params
    let {dishName, amount, quantity, category} = req.body
    const data = await itemModel.findByIdAndUpdate(id, {
        dishName: dishName,
        amount: amount,
        quantity: quantity,
        category: category
    }, {new: true})
    .then((res) => console.log(res))
    .catch((err) => console.log(err))

}



export {editItem}