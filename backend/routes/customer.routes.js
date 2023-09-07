import {Router} from 'express'
import {getCustomer} from '../controllers/customer.controllers.js'
import { authRequired } from '../middleware/validateToken.js';

const router = Router()
router.get('/customer',authRequired, getCustomer);

export default router;