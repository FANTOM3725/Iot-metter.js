import {DeviceAdapter} from "../types/deviceAdapter";
import { Device, DeviceState } from "../types/device";
import { devices, deviceStates } from "../data/devices";

export class MockDeviceAdapter implements DeviceAdapter {
    getDevices(): Device[] {
        return devices;
    }

    getDeviceById(id: number): Device | undefined {
        return devices.find((device) => device.id === id);
    }

    getDeviceState(id: number): DeviceState | undefined {
        return deviceStates.find((state) => state.deviceId === id);
    }

    turnOn(id: number): DeviceState | undefined {
        const deviceState = deviceStates.find((state) => state.deviceId === id)

        if (!deviceState) {
            return undefined
        }

        deviceState.isOn = true
        deviceState.updatedAt = new Date()

        return deviceState
    }

    turnOff(id: number): DeviceState | undefined {
        const deviceState = deviceStates.find((state) => state.deviceId === id)

        if (!deviceState) {
            return undefined
        }

        deviceState.isOn = false
        deviceState.updatedAt = new Date()

        return deviceState
    }

    setBrightness(id: number, brightness: number): DeviceState | undefined {
        const deviceState = deviceStates.find((state) => state.deviceId === id)
        if(!deviceState){
            return undefined
        }
        deviceState.brightness = brightness
        deviceState.updatedAt = new Date()

        return deviceState
    }

    setColor(id: number, color: string): DeviceState | undefined {
        const deviceState = deviceStates.find((state) => state.deviceId === id)
        if(!deviceState){
            return undefined
        }
        deviceState.color = color
        deviceState.updatedAt = new Date()

        return deviceState
    }

    setMode(id: number, mode: "normal" | "music"): DeviceState | undefined {
        const deviceState = deviceStates.find((state) => state.deviceId === id)
        if(!deviceState){
            return undefined
        }
        deviceState.mode = mode
        deviceState.updatedAt = new Date()

        return deviceState
    }
}