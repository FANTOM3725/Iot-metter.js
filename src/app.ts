import express, {Request, Response} from "express";
import deviceRoutes from "./routes/deviceRoutes";

const app = express()
app.use(express.json())

app.use('/api/devices', deviceRoutes)

app.use((req:Request, res: Response ): void => {
     res.status(404).json({
        message: "Not found"
    })
})
export default app