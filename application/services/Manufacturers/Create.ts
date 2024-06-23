import type { CreateManufacturerDTO, ManufacturersRepository } from "@pasobi/domain";
import type { Manufacturer } from "@pasobi/infra";

export class CreateManufacturers {
	constructor(private readonly manufacturersRepository: ManufacturersRepository) {}

	public async execute(data: CreateManufacturerDTO): Promise<Manufacturer> {
		const manufacturer = await this.manufacturersRepository.create(data);

		return manufacturer;
	}
}
