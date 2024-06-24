import type { CreateManufacturerDTO, ManufacturersRepository } from "@pasobi/domain";
import type { Manufacturer } from "@pasobi/infra";

export class CreateManufacturer {
	constructor(private readonly manufacturersRepository: ManufacturersRepository) {}

	public async execute(data: CreateManufacturerDTO): Promise<Manufacturer | Manufacturer[]> {
		const manufacturer = await this.manufacturersRepository.create(data);

		return Array.isArray(data) ? manufacturer : manufacturer[0];
	}
}
