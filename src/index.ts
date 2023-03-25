import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import { config as dotenv } from "dotenv";
import Square from "./controllers/Triangle-l";

// Routers

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.plugins();
    this.routes();
    dotenv();
  }

  protected plugins(): void {
    this.app.use(bodyParser.json());
    this.app.use(morgan("dev"));
    this.app.use(compression());
    this.app.use(helmet());
    this.app.use(cors());
  }

  protected routes(): void {
    this.app.route("/").get((req: Request, res: Response) => {
      let square = new Square(0, 0);
      square.setWidth(100);
      let getAreaWidth = square.getArea();
      square.setHeight(50);
      let getAreaHeight = square.getArea();

      return res.send({
        message: "hasil dari width",
        result: {
          width: getAreaWidth,
          height: getAreaHeight,
        },
      });
    });
  }
}

const port: number = 8000;
const app = new App().app;
app.listen(port, () => {
  console.log("Aplikasi ini berjalan di port " + port);
});
