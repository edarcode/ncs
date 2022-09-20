import { model, Schema } from "mongoose";

const UserSchema = new Schema({
	active: { type: Boolean, default: true },
	virify: { type: Boolean, default: true },
	role: { type: String, default: "client" },
	username: String,
	email: String,
	password: String,
	img: String
});

UserSchema.set("toJSON", {
	transform: (_, data) => {
		data.id = data._id;
		delete data._id;
		delete data.__v;
	}
});

export const User = model("User", UserSchema);
