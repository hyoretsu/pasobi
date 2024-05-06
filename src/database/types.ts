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
export type Mouse = {
    id: Generated<string>;
    model: string;
    sensor: string | null;
    maxDpi: number;
    dpiSteps: number[];
    variableDpi: Generated<boolean>;
    ips: number | null;
    buttons: number | null;
    programmable: Generated<boolean>;
    acceleration: number | null;
    wireless: Generated<boolean>;
    wirelessType: string | null;
    polling: Generated<number[]>;
    switch: string | null;
    batteryCapacity: number | null;
    batteryLife: number | null;
    chargingTime: number | null;
    chargingPort: string | null;
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
    maxMemory: number;
    memoryChannels: number;
    memorySpeed: number[];
    pcieVersion: Generated<string>;
    pcieLanes: number[];
    tdp: number;
    releaseDate: Timestamp;
    msrp: number;
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
    launchDate: Timestamp;
    companyId: string;
    createdAt: Generated<Timestamp>;
    updatedAt: Generated<Timestamp>;
};
export type DB = {
    Manufacturer: Manufacturer;
    Mouse: Mouse;
    Processor: Processor;
    ProcessorCoreInfo: ProcessorCoreInfo;
    ProcessorUsbInfo: ProcessorUsbInfo;
    Socket: Socket;
};
