import {Router} from "express";
import {getDevices, getDeviceById, updateBrightness, updateColor, updateMode} from "../controllers/deviceControllers";
const router = Router()

// router.get("/", getDevices)
router.get('/:id', getDeviceById)
router.patch("/:id/brightness", updateBrightness)
router.patch('/:id/color', updateColor)
router.patch('/:id/mode', updateMode)
export default router