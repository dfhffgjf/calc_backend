import routes from "@routes/index";

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json())

app.use('/api', routes)

export const start = () => {
    app.listen(3241, (err: ErrorEvent) => {
        if(err) {
            console.error(err);
            process.exit(1);
        }

        console.log('[EXPRESS] App started on 3241 port')
    })
}

export default app;