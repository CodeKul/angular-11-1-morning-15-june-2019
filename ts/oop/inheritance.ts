import { GpsListener } from './interfaces';
import { Car, cr, nm, hi } from './classes-and-objects'

class Bmw extends Car implements GpsListener {
    oil: number = 2
    fuelLevel() {
        super.fuelLevel()
        return this.oil + super.fuel
    }

    locate(lat: number, lng: number) {
        //map
        hi()
    }
}

export let obj = {
    nm: 10
}

let bmw = new Bmw()
bmw.fuelLevel()

let gps: GpsListener = new Bmw()
gps.locate(87, 4)

