import { app } from "./app";
import { config } from "dotenv";

const PORT = process.env.PORT || 3333 
app.listen(PORT, ()=> {
  console.log(`SERVE ONLINE NA PATH http://localhost:${PORT}`);
});
