import {DeviceState, DeviceParams, Device, DeviceLog, UpdateColorBody, UpdateModeBody, UpdateBrightnessBody} from "../types/device";
import {Request, Response} from "express";
import {devices, deviceStates, deviceLogs} from "../data/devices";

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
    if(brightness < 0 || brightness > 100){
        return res.status(400).json({ message: 'Яркость должна быть в диапазоне 0-100'})
    }

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
    const log: DeviceLog = {
        id: deviceLogs.length + 1,
        deviceId: id,
        command: 'update_brightness',
        payload: String(brightness),
        status: "success",
        createdAt: new Date()
    }
    deviceLogs.push(log)

    return res.json({
        message: "Brightness updated",
        id,
        brightness: deviceState.brightness
    })
}

 export const updateMode = (req: Request<DeviceParams, {}, UpdateModeBody>, res: Response) => {
     const id = Number(req.params.id)
     const mode = req.body.mode
     if(mode !== 'normal' && mode !== 'music'){
         return res.status(400).json({ message: 'режим может быть normal или music'})
     }

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

     const log: DeviceLog = {
         id: deviceLogs.length + 1,
         deviceId: id,
         command: 'update_mode',
         payload: mode,
         status: "success",
         createdAt: new Date()
     }
     deviceLogs.push(log)

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
     // if( !== 'normal' &&  !== 'music'){
     //     return res.status(400).json({ message: 'режим может быть normal или mode'})
     // }

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

     const log: DeviceLog = {
         id: deviceLogs.length + 1,
         deviceId: id,
         command: 'update_color',
         payload: color,
         status: "success",
         createdAt: new Date()
     }
     deviceLogs.push(log)

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
     const log: DeviceLog = {
         id: deviceLogs.length + 1,
         deviceId: id,
         command: 'turn_on',
         status: "success",
         createdAt: new Date()
     }
     deviceLogs.push(log)
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
    const log: DeviceLog = {
        id: deviceLogs.length + 1,
        deviceId: id,
        command: 'turn_off',
        status: "success",
        createdAt: new Date()
    }
    deviceLogs.push(log)
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

export const getDeviceLogs = (
    req: Request<DeviceParams>,
    res: Response) => {
    const id = Number(req.params.id)
    const device = devices.find((device) => device.id === id)

    if(!device){
        return res.status(404).json({
            message: "Устройство не найдено"
        })
    }
    const logs = deviceLogs.filter((log) => log.deviceId === device.id)

    return res.status(200).json({
        message: "Device logs retrieved successfully",
        logs
    })
}