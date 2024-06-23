import type VideoCardsRepository from "@domain/repositories/VideoCard.repository";
import type { Kysely } from "kysely";
import type { VideoCard, VideoCardModel } from "../entities";
import type { DB } from "../types";

export default class KyselyVideoCardsRepository implements VideoCardsRepository {
	constructor(private readonly db: Kysely<DB>) {}

	public async findAll(): Promise<VideoCard[]> {
		const models = await this.db.selectFrom("VideoCard").selectAll().execute();

		return models;
	}

	public async findAllModels(): Promise<VideoCardModel[]> {
		const models = await this.db.selectFrom("VideoCardModel").selectAll().execute();

		return models;
	}
}
