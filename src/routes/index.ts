import RouterConfig from "../types/utils/routerConfig";
import profileRouter from "./profile";

const profile: RouterConfig = {
  router: profileRouter,
  path: "/profile",
};


export default [profile];
