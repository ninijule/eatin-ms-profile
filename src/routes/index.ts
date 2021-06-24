import RouterConfig from "../types/utils/routerConfig";
import applicationRouter from "./application";

const application: RouterConfig = {
  router: applicationRouter,
  path: "/application",
};


export default [application];
