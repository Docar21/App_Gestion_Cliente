import {Router} from 'express'
import {getCustomer} from '../controllers/customer.controllers.js'
import { authRequired } from '../middleware/validateToken.js';
import {clienteSchema } from '../schemas/auth.schema.js'
import {validateSchema} from '../middleware/validator.middleware.js'

const router = Router()
router.get('/customer',authRequired, validateSchema(clienteSchema), getCustomer);

export default router;