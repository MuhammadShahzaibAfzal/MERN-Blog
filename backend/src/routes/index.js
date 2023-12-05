import { Router } from "express";
import authController from "../controllers/authController.js";

const mainRouter = Router();

mainRouter.post("/login", authController.login);
mainRouter.get("/logout", authController.logout);
mainRouter.post("/change-password", authController.changePassword);
mainRouter.post("/forget-password", authController.forgetPassword);
mainRouter.post("/edit-profile", authController.editProfile);

export default mainRouter;
