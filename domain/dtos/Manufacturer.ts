import type { ManufacturerCreation } from "@pasobi/infra";

type NameFullName = Pick<ManufacturerCreation, "name" | "fullName">;
export type CreateManufacturerDTO = NameFullName | NameFullName[];
