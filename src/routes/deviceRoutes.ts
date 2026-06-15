import {Router} from "express";
import {
    getDevices,
    getDeviceById,
    updateBrightness,
    updateColor,
    updateMode,
    turnOnDevice,
    turnOffDevice,
    getDeviceState
} from "../controllers/deviceControllers";
const router = Router()

router.get("/", getDevices)
router.get('/:id', getDeviceById)
router.get('/:id/state', getDeviceState)
router.patch("/:id/brightness", updateBrightness)
router.patch('/:id/color', updateColor)
router.patch('/:id/mode', updateMode)
router.post('/:id/on', turnOnDevice)
router.post('/:id/off', turnOffDevice)
export default router