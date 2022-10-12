import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'

import { router } from './router.js'
// modelo mais moderno de importar com js

export const app = new Koa() // classe retornando um objeto(app)

app.use(cors())
app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

