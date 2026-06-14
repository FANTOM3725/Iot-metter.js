import app from "./app";
import {PORT} from "./config/env";

app.listen(PORT, ():void => {
    console.log(`Server started on PORT:${PORT}`)
})