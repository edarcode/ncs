import { User } from "../../../models/User.js";

export const getAllUsersController = async (_, res, next) => {
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (error) {
		next(error);
	}
};
