import { ListVideoCards } from "@application/services/VideoCards/List.service";
import { ListVideoCardModels } from "@application/services/VideoCards/ListModels.service";
import { database } from "@infra/sql/kysely/database";
import KyselyVideoCardsRepository from "@infra/sql/kysely/repositories/VideoCard.repository";
import Elysia from "elysia";

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
