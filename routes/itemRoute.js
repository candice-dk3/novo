import express from 'express'
import { getProds, getProd, addProd, deleteProd, updateProd } from '../controller/itemController.js'

const itemRouter = express.Router()

itemRouter.get('/' , getProds)

itemRouter.get('/:id', getProd)

itemRouter.post('/add', addProd)

itemRouter.patch('/update/:id', updateProd)

itemRouter.delete('/delete/:id', deleteProd)

export {itemRouter} 