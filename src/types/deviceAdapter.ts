
export interface DeviceAdapter {
    getDevices(): Device[]
    getDeviceById(id: number): Device | undefined
    getDeviceState(id: number): DeviceState | undefined
    turnOn(id: number): DeviceState | undefined
    turnOff(id: number): DeviceState | undefined
    setBrightness(id: number, brightness: number): DeviceState | undefined
    setColor(id: number, color: string): DeviceState | undefined
    setMode(id: number, mode: "normal" | "music"): DeviceState | undefined
}