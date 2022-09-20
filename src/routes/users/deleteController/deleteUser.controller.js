import { User } from "../../../models/User.js";

export const deleteUserController = async (req, res, next) => {
	try {
		const { username } = req.query;
		const resDeleteUser = await User.deleteOne({ username });
		res.status(200).json(resDeleteUser);
	} catch (error) {
		next(error);
	}
};
