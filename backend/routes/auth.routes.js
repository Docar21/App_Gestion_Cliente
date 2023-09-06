import {Router} from 'express'
import {login, register,getCustomer} from '../controllers/auth.controllers.js'
const router = Router()

router.post('/register',register);
router.post('/login',login);
router.get('/customer',getCustomer);

export default router;