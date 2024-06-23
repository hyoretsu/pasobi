import type { Selectable } from "kysely";
import type { DB } from "../types";

export type VideoCard = Selectable<DB["VideoCard"]>;
export type VideoCardModel = Selectable<DB["VideoCardModel"]>;
