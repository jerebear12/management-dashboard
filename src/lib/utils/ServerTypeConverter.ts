import { ServerTypeEnum } from "$lib/types/ServerTypeEnum";

/**
 * Converts a server type number to its corresponding string representation.
 *
 * @param {number} serverType - The server type number to be converted.
 * @return {string} The string representation of the server type.
 * @throws {Error} If the server type is invalid.
 */
export function ServerTypeConverterNum(serverType: number): string {
    switch (serverType) {
        case 0:
            return ServerTypeEnum.Data;
        case 1:
            return ServerTypeEnum.User;
        case 2:
            return ServerTypeEnum.Community;
        default:
            throw new Error("Invalid server type");
    }
}

export function ServerTypeConverterStr(serverType: string): number {
    switch (serverType) {
        case ServerTypeEnum.Data:
            return 0;
        case ServerTypeEnum.User:
            return 1;
        case ServerTypeEnum.Community:
            return 2;
        default:
            throw new Error("Invalid server type");
    }
}