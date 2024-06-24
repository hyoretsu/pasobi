import type { Insertable, Selectable } from "kysely";
import type { DB } from "../types";

export type Manufacturer = Selectable<DB["Manufacturer"]>;
export type ManufacturerCreation = Insertable<DB["Manufacturer"]>;
export type Memory = Selectable<DB["Memory"]>;
export type Mouse = Selectable<DB["Mouse"]>;
export type Processor = Selectable<DB["Processor"]>;
export type VideoCard = Selectable<DB["VideoCard"]>;
export type VideoCardModel = Selectable<DB["VideoCardModel"]>;
