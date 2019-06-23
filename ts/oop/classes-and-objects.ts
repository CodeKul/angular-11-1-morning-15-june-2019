export class Car {
    private fuel: number // state
    private lights: number
    private color: string

    fuelLevel() { // behaviour
        return this.fuel
    }

    refillFuel(level: number) {
        this.fuel = level
    }
}

let cr: Car = new Car()
cr.fuelLevel()