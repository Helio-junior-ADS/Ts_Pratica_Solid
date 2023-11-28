import { app } from "./app";

const PORT = 3333

app.listen(PORT, ()=>{
  console.log(`Serve ONLINE na PORTA http://localhost:${PORT}`);
});