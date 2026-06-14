import {DeviceState, DeviceParams, Device, DeviceLogs, UpdateColorBody, UpdateModeBody, UpdateBrightnessBody} from "../types/device";
import {Request, Response} from "express";

export const getDevices = (req: Request, res: Response)=> {
    return res.json({
        message: "Устройства успешно получены",
        devices: []
    })
}

 export const getDeviceById = (req: Request<DeviceParams>, res:Response) => {
return res.status(200).json({
    message: "Устройство успешно найдено",
    device: {
        id: req.params.id

    }
})
 }

 export const updateBrightness = (req: Request<DeviceParams, {}, UpdateBrightnessBody>, res: Response) => {
return res.json({
    message: "Brightness updated",
    id: req.params.id,
    brightness: req.body.brightness
})
 }

 export const updateMode = (req: Request<DeviceParams, {}, UpdateModeBody>, res: Response) => {
     return res.json({
         message: "Mode updated",
         id: req.params.id,
         mode: req.body.mode
     })
 }

 export const updateColor = (req: Request<DeviceParams,{}, UpdateColorBody>, res: Response)=> {
     return res.json({
         message: "Color updated",
         id: req.params.id,
         color: req.body.color
     })
 }