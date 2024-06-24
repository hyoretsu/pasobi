import type { ManufacturerProducts, ManufacturersRepository } from "@pasobi/domain";
import type { Kysely } from "kysely";
import { jsonArrayFrom } from "kysely/helpers/postgres";
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

	public async findAllProducts(id: string): Promise<ManufacturerProducts> {
		const manufacturer = await this.db
			.selectFrom("Manufacturer as manu")
			.where("manu.id", "=", id)
			.select(({ selectFrom }) => [
				jsonArrayFrom(
					selectFrom("Memory as mem").selectAll().whereRef("mem.manufacturerId", "=", "manu.id"),
				).as("memories"),
			])
			.select(({ selectFrom }) => [
				jsonArrayFrom(selectFrom("Mouse").selectAll().whereRef("Mouse.manufacturerId", "=", "manu.id")).as(
					"mouses",
				),
			])
			.select(({ selectFrom }) => [
				jsonArrayFrom(
					selectFrom("Processor as p").selectAll().whereRef("p.manufacturerId", "=", "manu.id"),
				).as("processors"),
			])
			.select(({ selectFrom }) => [
				jsonArrayFrom(
					selectFrom("VideoCard as vc").selectAll().whereRef("vc.manufacturerId", "=", "manu.id"),
				).as("videoCards"),
			])
			.executeTakeFirst();

		return manufacturer;
	}
}
