import mongoose from "mongoose"
import itemModel from '../../Database/Models/items.model.js'

const sendItems = async (req, res) => {
    const {restorentname} = req.params
    const data = await itemModel.find({restorentname:restorentname});
    console.log("Found data     ",data)
    res.json(data)
}



export {sendItems}