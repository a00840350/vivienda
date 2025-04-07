import { HouseController } from "../controller/houseController";
import { FakeService } from "../db/fake/fakeService";

export class HouseHandler{
    getHouses(){
        const ctrl = new HouseController(new FakeService())
    }
}