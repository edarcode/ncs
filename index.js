import "dotenv/config";
import { connDb } from "./src/connDb.js";
import { PORT } from "./src/env/server.js";
import { server } from "./src/server.js";

const start = async () => {
	try {
		await connDb;
		server.listen(PORT, () =>
			console.log(`Server running on port: ${PORT} 😎`)
		);
	} catch (error) {
		console.log(error);
	}
};

start();
