import { Router } from "express";
const router = Router()

import * as ctrl from './controller'

router.get('/', ctrl.get)
router.post('/', ctrl.post)
router.get('/:id', ctrl.getById)
router.put('/:id', ctrl.updateById)
router.delete('/:id', ctrl.deleteById)


export default router