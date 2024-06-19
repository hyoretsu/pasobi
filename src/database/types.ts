import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type Manufacturer = {
    id: Generated<string>;
    name: string;
    fullName: string | null;
    createdAt: Generated<Timestamp>;
    updatedAt: Generated<Timestamp>;
};
export type Memory = {
    id: Generated<string>;
    capacity: number;
    generation: string;
    type: string;
    manufacturerId: string;
    createdAt: Generated<Timestamp>;
    updatedAt: Generated<Timestamp>;
};
export type MemoryInfo = {
    id: Generated<string>;
    type: string;
    clock: number;
    tcl: number | null;
    trcd: number | null;
    trp: number | null;
    tras: number | null;
    voltage: number | null;
    memoryId: string;
    createdAt: Generated<Timestamp>;
    updatedAt: Generated<Timestamp>;
};
export type Mouse = {
    id: Generated<string>;
    model: string;
    sensor: string | null;
    maxDpi: number;
    dpiSteps: number[];
    variableDpi: Generated<boolean>;
    ips: number | null;
    buttons: number | null;
    weight: number | null;
    programmable: Generated<boolean>;
    acceleration: number | null;
    wireless: Generated<boolean>;
    wirelessType: string | null;
    polling: Generated<number[]>;
    switch: string | null;
    batteryCapacity: number | null;
    batteryLife: number[];
    chargingTime: number | null;
    chargingPort: string | null;
    wirelessCharging: string | null;
    dimensions: number[];
    manufacturerId: string;
    createdAt: Generated<Timestamp>;
    updatedAt: Generated<Timestamp>;
};
export type Processor = {
    id: Generated<string>;
    model: string;
    codename: string | null;
    architecture: string | null;
    brand: string;
    socketId: string;
    l1Cache: number | null;
    l2Cache: number | null;
    l3Cache: number;
    litography: string;
    maxMemory: number | null;
    memoryChannels: Generated<number>;
    memorySpeed: number[];
    pcieVersion: Generated<string>;
    pcieLanes: number[];
    tdp: number;
    releaseDate: Timestamp | null;
    msrp: number | null;
    manufacturerId: string;
    createdAt: Generated<Timestamp>;
    updatedAt: Generated<Timestamp>;
};
export type ProcessorCoreInfo = {
    id: Generated<string>;
    type: string | null;
    coreCount: number;
    threadCount: number;
    baseClock: number;
    boostClock: number;
    processorId: string;
    createdAt: Generated<Timestamp>;
    updatedAt: Generated<Timestamp>;
};
export type ProcessorUsbInfo = {
    id: Generated<string>;
    type: string;
    amount: number;
    processorId: string;
    createdAt: Generated<Timestamp>;
    updatedAt: Generated<Timestamp>;
};
export type Socket = {
    id: Generated<string>;
    name: string;
    alternateName: string | null;
    launchDate: Timestamp | null;
    companyId: string;
    createdAt: Generated<Timestamp>;
    updatedAt: Generated<Timestamp>;
};
export type DB = {
    Manufacturer: Manufacturer;
    Memory: Memory;
    MemoryInfo: MemoryInfo;
    Mouse: Mouse;
    Processor: Processor;
    ProcessorCoreInfo: ProcessorCoreInfo;
    ProcessorUsbInfo: ProcessorUsbInfo;
    Socket: Socket;
};
