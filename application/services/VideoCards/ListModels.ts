import type { VideoCardsRepository } from "@pasobi/domain";
import type { VideoCardModel } from "@pasobi/infra";

export class ListVideoCardModels {
	constructor(private readonly videoCardsRepository: VideoCardsRepository) {}

	public async execute(): Promise<VideoCardModel[]> {
		const videoCardModels = await this.videoCardsRepository.findAllModels();

		return videoCardModels;
	}
}
