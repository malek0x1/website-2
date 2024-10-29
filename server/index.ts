import express from "express";
import next from "next";
import path from "path";
import { Request, Response, NextFunction } from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {
  const server = express();
  server.use("/starlake", (req: Request, res: Response, next: NextFunction) => {
    express.static(path.join(__dirname, "../public", "starlake"))(
      req,
      res,
      next
    );
  });

  server.all("*", (req: Request, res: Response) => handle(req, res));

  server.listen(port, () => {
    console.log(`>  a Server ready on http://localhost:${port}`);
  });
});
