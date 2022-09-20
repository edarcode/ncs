import { Router } from "express";
import { deleteUserController } from "./deleteController/deleteUser.controller.js";
import { getAllUsersController } from "./getController/getAllUsers.controller.js";
import { createUserController } from "./postController/createUser.controller.js";
import { updateUserController } from "./putController/updateUser.controller.js";

export const users = Router();

users.route("/:id").put(updateUserController);
users.route("/").post(createUserController);
users.route("/").get(getAllUsersController);
users.route("/").delete(deleteUserController);
