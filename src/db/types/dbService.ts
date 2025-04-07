import { house } from "../../types/db/house"

export interface IDBService{
    getHouses(type: string, minprice: number, maxprice: number): Promise<house[]>
    getHouseById(id: number): Promise<house>
}