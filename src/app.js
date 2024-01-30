import { errorHandler } from "./middlewares/errorHandler";
import { app } from "./server";

app.use('api/users')
app.use('api/foodItems')
app.use('api/bills')


app.use(errorHandler)

