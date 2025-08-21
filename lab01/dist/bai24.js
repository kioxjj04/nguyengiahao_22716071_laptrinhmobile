"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirConditioner = exports.Fan = void 0;
//24. Create an abstract class Appliance with method turnOn(). Implement Fan and AirConditioner.
class Appliance {
}
class Fan extends Appliance {
    turnOn() {
        console.log("Fan is now ON.");
    }
}
exports.Fan = Fan;
class AirConditioner extends Appliance {
    turnOn() {
        console.log("Air Conditioner is now ON.");
    }
}
exports.AirConditioner = AirConditioner;
