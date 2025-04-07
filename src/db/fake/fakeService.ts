import { house } from "../../types/db/house";

const FAKE_HOUSES = [
    {
        id: 1,
        price: 100,
        name: "Casa con 3 pisos",
        description: "descripcion",
        terrainArea: 100,
        constructionArea: 150,
        type: "SELL"
    },
    {
        id: 2,
        price: 100,
        name: "Casa con 3 pisos",
        description: "descripcion",
        terrainArea: 100,
        constructionArea: 150,
        type: "SELL"
    },
    {
        id: 3,
        price: 100,
        name: "Casa con 1 piso",
        description: "descripcion",
        terrainArea: 100,
        constructionArea: 150,
        type: "SELL"
    },
]
export class FakeService{
    
    async getHouses(type: string, minprice: number, maxprice: number): Promise<house[]>{
        return FAKE_HOUSES;
    }

    async getHouseById(id: number): Promise<house>{
        return FAKE_HOUSES[id];
    }
}