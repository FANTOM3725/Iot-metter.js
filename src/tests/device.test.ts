import {describe, it, expect} from "vitest";
import request from 'supertest'
import app from "../app";

describe('Device tests', () => {
    it("should return all devices", async () => {
        const response = await request(app)
            .get("/api/devices")

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty("devices")
        expect(Array.isArray(response.body.devices)).toBe(true)
        expect(response.body.devices.length).toBeGreaterThan(0)
    })
    it('should return device by id', async () => {
        const response = await request(app)
            .get('/api/devices/1')

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('device')
        expect(response.body.device.id).toBe(1)
    })

    it('should return 404 for missing device', async () => {
        const response = await request(app)
            .get('/api/devices/999')

        expect(response.status).toBe(404)
        expect(response.body.message).toBe('Устройство не найдено')
    })

    it('should return device state by id', async () => {
        const response = await request(app)
            .get('/api/devices/1/state')

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('deviceState')
        expect(response.body.deviceState.deviceId).toBe(1)
    })

    it('should turn on lamp', async () => {
        const response = await request(app)
            .post('/api/devices/1/on')

        expect(response.status).toBe(200)
        expect(response.body.isOn).toBe(true)
    })

    it('should turn off lamp', async () => {
        const response = await request(app)
            .post('/api/devices/1/off')

        expect(response.status).toBe(200)
        expect(response.body.isOn).toBe(false)
    })

    it('should update brightness', async () => {
        const response = await request(app)
            .patch('/api/devices/1/brightness')
            .send({
                brightness: 50
            })

        expect(response.status).toBe(200)
        expect(response.body.brightness).toBe(50)
    })

    it('should update color', async () => {
        const response = await request(app)
            .patch('/api/devices/1/color')
            .send({
                color: 'yellow'
            })

        expect(response.status).toBe(200)
        expect(response.body.color).toBe('yellow')
    })

    it('should update mode', async () => {
        const response = await request(app)
            .patch('/api/devices/1/mode')
            .send({
                mode: 'music'
            })

        expect(response.status).toBe(200)
        expect(response.body.mode).toBe('music')
    })
})