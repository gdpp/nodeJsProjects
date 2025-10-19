import { Router } from "express";
import { AuthController } from "./contrroller";

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new AuthController();

    router.post("/login", controller.loginUser);
    router.post("/register", controller.registerUser);
    router.get("/validate-email/:token", controller.validateEmail);

    return router;
  }
}
