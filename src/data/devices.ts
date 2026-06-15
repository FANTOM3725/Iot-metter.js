import {Device, DeviceState} from "../types/device";

export const devices: Device[] = [
    {
        id: 1,
        name: "Living Room Lamp",
        type: "lamp",
        isConnected: true,
        createdAt: new Date(),
        updatedAt: new Date()
    }
];

export const deviceStates: DeviceState[] = [
    {
        id: 1,
        deviceId: 1,
        isOn: true,
        mode: "normal",
        brightness: 70,
        color: "#ffffff",
        updatedAt: new Date()
    }
];