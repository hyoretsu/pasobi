import { Elysia } from "elysia";
import { ManufacturersController, VideoCardsController } from "./controllers";

const app = new Elysia()
	.use(ManufacturersController)
	.use(VideoCardsController)
	.listen(process.env.PORT || 3333);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
