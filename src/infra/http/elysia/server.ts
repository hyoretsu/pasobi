import { Elysia } from "elysia";
import { VideoCardsController } from "./controllers/VideoCards.controller";

const app = new Elysia().use(VideoCardsController).listen(process.env.PORT || 3333);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
