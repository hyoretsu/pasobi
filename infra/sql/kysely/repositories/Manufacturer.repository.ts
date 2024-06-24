import type { ManufacturersRepository } from "@pasobi/domain";
import type { Kysely } from "kysely";
import type { Manufacturer, ManufacturerCreation } from "../entities";
import type { DB } from "../types";

export default class KyselyManufacturersRepository implements ManufacturersRepository {
	constructor(private readonly db: Kysely<DB>) {}

	public async create(data: ManufacturerCreation): Promise<Manufacturer[]> {
		const manufacturer = await this.db.insertInto("Manufacturer").values(data).returningAll().execute();

		return manufacturer;
	}

	public async findAll(): Promise<Manufacturer[]> {
		const manufacturers = await this.db.selectFrom("Manufacturer").selectAll().execute();

		return manufacturers;
	}
}
