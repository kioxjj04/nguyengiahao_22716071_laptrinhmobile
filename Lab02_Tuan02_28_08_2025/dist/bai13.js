"use strict";
//13. Handle errors using try/catch with async/await.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bai1_1 = require("./bai1");
let bai13 = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let result = yield bai1_1.promise;
        console.log(result);
    }
    catch (error) {
        console.error(error);
    }
});
bai13();
