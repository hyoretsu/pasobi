import { ListVideoCardModels, ListVideoCards } from "@pasobi/application";
import Elysia from "elysia";
import { database } from "~/sql/kysely/database";
import KyselyVideoCardsRepository from "~/sql/kysely/repositories/VideoCard.repository";

export const VideoCardsController = new Elysia()
	.decorate({
		VideoCardsRepository: new KyselyVideoCardsRepository(database),
	})
	.group("/video-cards", app => {
		const { VideoCardsRepository } = app.decorator;

		return app
			.decorate({
				ListVideoCards: new ListVideoCards(VideoCardsRepository),
			})
			.get("/", ({ ListVideoCards }) => ListVideoCards.execute())
			.group("/models", app =>
				app
					.decorate({
						ListVideoCardModels: new ListVideoCardModels(VideoCardsRepository),
					})
					.get("/", ({ ListVideoCardModels }) => ListVideoCardModels.execute()),
			);
	});
