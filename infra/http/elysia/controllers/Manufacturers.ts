import { CreateManufacturer, ListManufacturers } from "@pasobi/application";
import Elysia, { t } from "elysia";
import { database } from "~/sql/kysely/database";
import KyselyManufacturersRepository from "~/sql/kysely/repositories/Manufacturer.repository";

const CreateManufacturerDTO = t.Object({
	name: t.String(),
	fullName: t.Optional(t.String()),
});

export const ManufacturersController = new Elysia()
	.decorate({
		ManufacturersRepository: new KyselyManufacturersRepository(database),
	})
	.group("/manufacturers", app => {
		const { ManufacturersRepository } = app.decorator;

		return app
			.decorate({
				CreateManufacturer: new CreateManufacturer(ManufacturersRepository),
				ListManufacturers: new ListManufacturers(ManufacturersRepository),
			})
			.get("/", ({ ListManufacturers }) => ListManufacturers.execute())
			.post("/", ({ body, CreateManufacturer }) => CreateManufacturer.execute(body), {
				body: t.Union([CreateManufacturerDTO, t.Array(CreateManufacturerDTO)]),
			});
	});
