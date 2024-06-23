import type { VideoCardsRepository } from "@pasobi/domain";
import type { VideoCard } from "@pasobi/infra";

export class ListVideoCards {
	constructor(private readonly videoCardsRepository: VideoCardsRepository) {}

	public async execute(): Promise<VideoCard[]> {
		const videoCards = await this.videoCardsRepository.findAll();

		return videoCards;
	}
}
