import {Router} from "express";
import {
    getDevices,
    getDeviceById,
    updateBrightness,
    updateColor,
    updateMode,
    turnOnDevice,
    turnOffDevice,
    getDeviceState, getDeviceLogs
} from "../controllers/deviceControllers";
const router = Router()

/**
 * @swagger
 * /api/devices:
 *   get:
 *     summary: Получить список устройств
 *     tags: [Devices]
 *     responses:
 *       200:
 *         description: Список устройств успешно получен
 */
router.get("/", getDevices)

/**
 * @swagger
 * /api/devices/{id}:
 *   get:
 *     summary: Получить устройство по id
 *     tags: [Devices]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID устройства
 *     responses:
 *       200:
 *         description: Устройство успешно получено
 *       404:
 *         description: Устройство не найдено
 */
router.get('/:id', getDeviceById)

/**
 * @swagger
 * /api/devices/{id}/logs:
 *   get:
 *     summary: Получить логи устройства
 *     tags: [Devices]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID устройства
 *     responses:
 *       200:
 *         description: Логи устройства успешно получены
 *       404:
 *         description: Устройство не найдено
 */
router.get("/:id/logs", getDeviceLogs)

/**
 * @swagger
 * /api/devices/{id}/state:
 *   get:
 *     summary: Получить состояние устройства
 *     tags: [Devices]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID устройства
 *     responses:
 *       200:
 *         description: Состояние устройства успешно получено
 *       404:
 *         description: Устройство или его состояние не найдено
 */
router.get('/:id/state', getDeviceState)

/**
 * @swagger
 * /api/devices/{id}/brightness:
 *   patch:
 *     summary: Изменить яркость устройства
 *     tags: [Devices]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID устройства
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - brightness
 *             properties:
 *               brightness:
 *                 type: number
 *                 example: 70
 *     responses:
 *       200:
 *         description: Яркость успешно изменена
 *       400:
 *         description: Некорректное значение яркости
 *       404:
 *         description: Устройство не найдено
 */
router.patch("/:id/brightness", updateBrightness)

/**
 * @swagger
 * /api/devices/{id}/color:
 *   patch:
 *     summary: Изменить цвет устройства
 *     tags: [Devices]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID устройства
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - color
 *             properties:
 *               color:
 *                 type: string
 *                 example: "#ff0000"
 *     responses:
 *       200:
 *         description: Цвет успешно изменён
 *       404:
 *         description: Устройство или его состояние не найдено
 */
router.patch('/:id/color', updateColor)

/**
 * @swagger
 * /api/devices/{id}/mode:
 *   patch:
 *     summary: Изменить режим устройства
 *     tags: [Devices]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID устройства
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - mode
 *             properties:
 *               mode:
 *                 type: string
 *                 enum: [normal, music]
 *                 example: music
 *     responses:
 *       200:
 *         description: Режим успешно изменён
 *       400:
 *         description: Некорректный режим
 *       404:
 *         description: Устройство не найдено
 */
router.patch('/:id/mode', updateMode)

/**
 * @swagger
 * /api/devices/{id}/on:
 *   post:
 *     summary: Включить устройство
 *     tags: [Devices]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID устройства
 *     responses:
 *       200:
 *         description: Устройство успешно включено
 *       404:
 *         description: Устройство не найдено
 */
router.post('/:id/on', turnOnDevice)

/**
 * @swagger
 * /api/devices/{id}/off:
 *   post:
 *     summary: Выключить устройство
 *     tags: [Devices]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID устройства
 *     responses:
 *       200:
 *         description: Устройство успешно включено
 *       404:
 *         description: Устройство не найдено
 */
router.post('/:id/off', turnOffDevice)

export default router