import express, {Request, Response} from "express";
import deviceRoutes from "./routes/deviceRoutes";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";

const app = express()
app.use(express.json())

app.use('/api/devices', deviceRoutes)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use((req:Request, res: Response ): void => {
     res.status(404).json({
        message: "Not found"
    })
})
export default app