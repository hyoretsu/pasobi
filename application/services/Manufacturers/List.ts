import type { ManufacturersRepository } from "@pasobi/domain";
import type { Manufacturer } from "@pasobi/infra";

export class ListManufacturers {
	constructor(private readonly manufacturersRepository: ManufacturersRepository) {}

	public async execute(): Promise<Manufacturer[]> {
		const manufacturers = await this.manufacturersRepository.findAll();

		return manufacturers;
	}
}
