import type { VideoCard } from "@infra/sql/kysely/entities";
import type VideoCardsRepository from "@domain/repositories/VideoCard.repository";

export class ListVideoCards {
	constructor(private readonly videoCardsRepository: VideoCardsRepository) {}

	public async execute(): Promise<VideoCard[]> {
		const videoCards = await this.videoCardsRepository.findAll();

		return videoCards;
	}
}
