export interface Device {
    id: number;
    name: string;
    type: "lamp";
    isConnected: boolean;
    createdAt: Date;
    updatedAt: Date
}
export interface DeviceState {
    id: number;
    deviceId: number;
    isOn: boolean;
    mode: "normal" | "music";
    brightness: number;
    color: string;
    updatedAt: Date
}

export interface DeviceLog {
    id: number;
    deviceId: number;
    command: string;
    payload?: string;
    status: "success" | "error";
    createdAt: Date
}

export interface DeviceParams {
    id: string
}

export type UpdateBrightnessBody = Pick<DeviceState, "brightness">
export type UpdateColorBody = Pick<DeviceState, "color">
export type UpdateModeBody = Pick<DeviceState, "mode">