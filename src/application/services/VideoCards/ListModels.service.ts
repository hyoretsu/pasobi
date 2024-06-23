import type { VideoCardModel } from "@infra/sql/kysely/entities";
import type VideoCardsRepository from "@domain/repositories/VideoCard.repository";

export class ListVideoCardModels {
	constructor(private readonly videoCardsRepository: VideoCardsRepository) {}

	public async execute(): Promise<VideoCardModel[]> {
		const videoCardModels = await this.videoCardsRepository.findAllModels();

		return videoCardModels;
	}
}
