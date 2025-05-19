import express from "express";
import dotenv from "dotenv";
import nfRoutes from "./modules/nf/nf.routes";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/nf", nfRoutes);

async function start() {
  try {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`API rodando na porta ${port}`);
    });
  } catch (error) {
    console.error("Erro ao iniciar a aplicação", error);
    process.exit(1);
  }
}
start();

export default app;
