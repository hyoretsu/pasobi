import type { Manufacturer, Memory, Mouse, Processor, VideoCard } from "@pasobi/infra";
import type { CreateManufacturerDTO } from "~/dtos/Manufacturer";

export interface ManufacturerProducts {
	memories: Memory[];
	mouses: Mouse[];
	processors: Processor[];
	videoCards: VideoCard[];
}

export interface ManufacturersRepository {
	create(data: CreateManufacturerDTO): Promise<Manufacturer[]>;
	findAll(): Promise<Manufacturer[]>;
	findAllProducts(id: string): Promise<ManufacturerProducts>;
}
