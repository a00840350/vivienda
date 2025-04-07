import { FakeService } from "../db/fake/fakeService";
import { IDBService } from "../db/types/dbService";

export class HouseController{

    dbService: IDBService

    constructor(dbService: IDBService){
        this.dbService = new FakeService();
    }

    async getHousesByType(type: string, minPrice: number, maxPrice: number){
        const dbService = new FakeService();
        const houses = dbService.getHouses(type, minPrice, maxPrice)
        return houses
    }
}