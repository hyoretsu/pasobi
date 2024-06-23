import { CreateManufacturers, ListManufacturers } from "@pasobi/application";
import Elysia, { t } from "elysia";
import { database } from "~/sql/kysely/database";
import KyselyManufacturersRepository from "~/sql/kysely/repositories/Manufacturer.repository";

export const ManufacturersController = new Elysia()
	.decorate({
		ManufacturersRepository: new KyselyManufacturersRepository(database),
	})
	.group("/manufacturers", app => {
		const { ManufacturersRepository } = app.decorator;

		return app
			.decorate({
				CreateManufacturers: new CreateManufacturers(ManufacturersRepository),
				ListManufacturers: new ListManufacturers(ManufacturersRepository),
			})
			.get("/", ({ ListManufacturers }) => ListManufacturers.execute())
			.post("/", ({ body, CreateManufacturers }) => CreateManufacturers.execute(body), {
				body: t.Object({
					name: t.String(),
					fullName: t.Optional(t.String()),
				}),
			});
	});
