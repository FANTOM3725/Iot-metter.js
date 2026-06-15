import {DeviceState, DeviceParams, Device, DeviceLogs, UpdateColorBody, UpdateModeBody, UpdateBrightnessBody} from "../types/device";
import {Request, Response} from "express";
import {devices, deviceStates} from "../data/devices";

export const getDevices = (req: Request, res: Response)=> {
    return res.status(200).json({
        message: "Devices retrieved successfully",
        devices: devices
    })
}

export const getDeviceById = (req: Request<DeviceParams>, res: Response) => {
    const id = Number(req.params.id)
    const device = devices.find((device) => device.id === id)

    if (!device) {
        return res.status(404).json({
            message: "Устройство не найдено"
        })
    }

    return res.status(200).json({
        message: "Устройство успешно найдено",
        device
    })
}

export const updateBrightness = (
    req: Request<DeviceParams, {}, UpdateBrightnessBody>,
    res: Response
) => {
    const id = Number(req.params.id)
    const brightness = req.body.brightness

    const device = devices.find((device) => device.id === id)

    if (!device) {
        return res.status(404).json({
            message: "Устройство не найдено"
        })
    }

    const deviceState = deviceStates.find((state) => state.deviceId === device.id)

    if (!deviceState) {
        return res.status(404).json({
            message: "Состояние устройства не найдено"
        })
    }

    deviceState.brightness = brightness
    deviceState.updatedAt = new Date()

    return res.json({
        message: "Brightness updated",
        id,
        brightness: deviceState.brightness
    })
}

 export const updateMode = (req: Request<DeviceParams, {}, UpdateModeBody>, res: Response) => {
     const id = Number(req.params.id)
     const mode = req.body.mode

     const device = devices.find((device) => device.id === id)

     if (!device) {
         return res.status(404).json({
             message: "Устройство не найдено"
         })
     }

     const deviceState = deviceStates.find((state) => state.deviceId === device.id)

     if (!deviceState) {
         return res.status(404).json({
             message: "Состояние устройства не найдено"
         })
     }

     deviceState.mode = mode
     deviceState.updatedAt = new Date()

     return res.json({
         message: "mode updated",
         id,
         mode: deviceState.mode
     })
 }

 export const updateColor = (
     req: Request<DeviceParams,{}, UpdateColorBody>,
     res: Response)=> {
     const id = Number(req.params.id)
     const color = req.body.color

     const device = devices.find((device) => device.id === id)

     if (!device) {
         return res.status(404).json({
             message: "Устройство не найдено"
         })
     }

     const deviceState = deviceStates.find((state) => state.deviceId === device.id)

     if (!deviceState) {
         return res.status(404).json({
             message: "Состояние устройства не найдено"
         })
     }

     deviceState.color = color
     deviceState.updatedAt = new Date()

     return res.json({
         message: "Color updated",
         id,
         color: deviceState.color
     })
 }
 export const turnOnDevice = (
     req: Request<DeviceParams>,
     res: Response)=> {
     const id = Number(req.params.id)

     const device = devices.find((device) => device.id === id)

     if (!device) {
         return res.status(404).json({
             message: "Устройство не найдено"
         })
     }

     const deviceState = deviceStates.find((state) => state.deviceId === device.id)

     if (!deviceState) {
         return res.status(404).json({
             message: "Состояние устройства не найдено"
         })
     }
     deviceState.isOn = true
     deviceState.updatedAt = new Date()
     return res.status(200).json({
         message: "Device turned on",
         id,
         isOn: deviceState.isOn
     })
 }
export const turnOffDevice = (
    req: Request<DeviceParams>,
    res: Response)=> {
    const id = Number(req.params.id)

    const device = devices.find((device) => device.id === id)

    if (!device) {
        return res.status(404).json({
            message: "Устройство не найдено"
        })
    }

    const deviceState = deviceStates.find((state) => state.deviceId === device.id)

    if (!deviceState) {
        return res.status(404).json({
            message: "Состояние устройства не найдено"
        })
    }
    deviceState.isOn = false
    deviceState.updatedAt = new Date()
    return res.status(200).json({
        message: "Device turned off",
        id,
        isOn: deviceState.isOn
    })
}

export const getDeviceState = (
    req: Request<DeviceParams>,
    res: Response) => {
    const id = Number(req.params.id)

    const device = devices.find((device) => device.id === id)

    if (!device) {
        return res.status(404).json({
            message: "Устройство не найдено"
        })
    }

    const deviceState = deviceStates.find((state) => state.deviceId === device.id)

    if (!deviceState) {
        return res.status(404).json({
            message: "Состояние устройства не найдено"
        })
    }
    return res.status(200).json({
        message: "Device state retrieved successfully",
        deviceState
    })
}