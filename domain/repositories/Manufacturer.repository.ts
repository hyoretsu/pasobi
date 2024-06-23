import type { Manufacturer } from "@pasobi/infra";
import type { CreateManufacturerDTO } from "~/dtos/Manufacturer";

export interface ManufacturersRepository {
	create(data: CreateManufacturerDTO): Promise<Manufacturer>;
	findAll(): Promise<Manufacturer[]>;
}
