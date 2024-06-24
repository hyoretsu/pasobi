import type { ManufacturerProducts, ManufacturersRepository } from "@pasobi/domain";

export class ListManufacturerProducts {
	constructor(private readonly manufacturersRepository: ManufacturersRepository) {}

	public async execute(id: string): Promise<ManufacturerProducts> {
		const products = await this.manufacturersRepository.findAllProducts(id);

		return products;
	}
}
