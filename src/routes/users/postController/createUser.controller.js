import { UNAVAILABLE_USER } from "../../../constants/msgs.js";
import { User } from "../../../models/User.js";

export const createUserController = async (req, res, next) => {
	try {
		const { username } = req.body;
		const user = await User.findOne({ username });
		if (user) return res.status(400).json({ msg: UNAVAILABLE_USER });
		const newUser = new User(req.body);
		await newUser.save();
		res.status(200).json(newUser);
	} catch (error) {
		next(error);
	}
};
