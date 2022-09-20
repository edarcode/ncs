import { User } from "../../../models/User.js";

export const updateUserController = async (req, res, next) => {
	try {
		const { id } = req.params;
		const resUpdateUser = await User.updateOne({ _id: id }, req.body);
		res.status(200).json(resUpdateUser);
	} catch (error) {
		next(error);
	}
};
