import express from "express";
import { body } from "express-validator";
import profileController from "../controller/profileController";

const router = express.Router();

router.post(
  "/",

  body("firstName").escape().isLength({ min: 1, max: 50 }),

  body("lastName").escape().isLength({ min: 1, max: 50 }),

  body("phoneNumber").escape().isNumeric().isMobilePhone("fr-FR"),

  body("street").escape().isLength({ min: 1, max: 50 }),

  body("city").escape().isLength({ min: 1, max: 50 }),

  body("state").escape().isLength({ min: 1, max: 50 }),

  body("zip").escape().isNumeric(),

  body("sponsor").escape().isLength({ min: 0, max: 50 }),

  body("userId").escape().isNumeric(),

  profileController.createProfile
);

router.delete(
  "/",

  profileController.deleteProfile
);

router.get(
  "/",

  profileController.getSelfProfileOrSearch
);

router.get(
  "/:id",

  profileController.getProfile
);

router.put(
  "/",

  body("firstName").escape().isLength({ min: 1, max: 50 }),

  body("lastName").escape().isLength({ min: 1, max: 50 }),

  body("phoneNumber").escape().isNumeric().isMobilePhone("fr-FR"),

  body("street").escape().isLength({ min: 1, max: 50 }),

  body("city").escape().isLength({ min: 1, max: 50 }),

  body("state").escape().isLength({ min: 1, max: 50 }),

  body("zip").escape().isNumeric(),

  profileController.updateProfile
);

export default router;
