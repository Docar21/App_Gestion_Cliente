import {Router} from 'express'
import {login, register,logout} from '../controllers/auth.controllers.js'
import {validateSchema} from '../middleware/validator.middleware.js'
import {registerSchema, loginSchema } from '../schemas/auth.schema.js'

const router = Router()

router.post('/register',validateSchema(registerSchema),register);
router.post('/login',validateSchema(loginSchema),login);
router.post('/logout',logout);


export default router;