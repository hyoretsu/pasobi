import type { VideoCard, VideoCardModel } from "../../infra/sql/kysely/entities";

export default interface VideoCardsRepository {
	findAll(): Promise<VideoCard[]>;
	findAllModels(): Promise<VideoCardModel[]>;
}
