import express from "express";
import { body } from "express-validator";
import applicationController from "../controller/profileController";

const router = express.Router();

router.post(
  "/",

  body("name").escape().isLength({ min: 1, max: 50 }),

  body("description").escape().isLength({ min: 0, max: 255 }),

  applicationController.createApplication
);


router.delete(
  "/:id",

  applicationController.deleteApplication
);

router.get(
  "/",

  applicationController.getAllApplication
);


router.put(
  "/:id", 

  body("name").escape().isLength({ min: 1, max: 50 }),

  body("description").escape().isLength({ min: 0, max: 255 }),

  applicationController.updateApplication
);

export default router;
