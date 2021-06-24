import express from "express";
import cookieParser from "cookie-parser";
import RouterConfig from "./types/utils/routerConfig";
import routers from "./routes";

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3001, () => {
  console.log("The application is listening on port 3001!");
});

routers.forEach((router: RouterConfig) => {
  app.use(router.path, router.router);
});
