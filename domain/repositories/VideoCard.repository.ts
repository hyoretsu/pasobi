import type { VideoCard, VideoCardModel } from "@pasobi/infra";

export interface VideoCardsRepository {
	findAll(): Promise<VideoCard[]>;
	findAllModels(): Promise<VideoCardModel[]>;
}
