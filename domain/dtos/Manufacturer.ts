import type { ManufacturerCreation } from "@pasobi/infra";

export type CreateManufacturerDTO = Pick<ManufacturerCreation, "name" | "fullName">;
