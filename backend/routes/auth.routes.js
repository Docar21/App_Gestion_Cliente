import {Router} from 'express'
import {login, register,logout} from '../controllers/auth.controllers.js'
import {getCustomer} from '../controllers/customer.controllers.js'
const router = Router()

router.post('/register',register);
router.post('/login',login);
router.post('/logout',logout);
router.get('/customer',getCustomer);



export default router;