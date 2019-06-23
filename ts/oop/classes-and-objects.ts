import { GpsListener } from './interfaces';
export let obj = {
    nm: 10
}

export function hi() {
    
}

export class Car  {
    private _fuel: number // state
    private lights: number
    private color: string

    get fuel() {
        return this._fuel
    }

    set fuel(fuel: number) {
        this._fuel = fuel
    }

    fuelLevel() { // behaviour
        return this.fuel
    }

    refillFuel(level: number) {
        this.fuel = level
    }
}

export let cr: Car = new Car()
cr.fuelLevel()
cr.fuel = 10

export let nm = 20

console.log(`Fuel Level in liters is ${cr.fuel} `)
