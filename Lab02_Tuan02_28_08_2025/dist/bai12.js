"use strict";
// 12. Write an async function that calls simulateTask(2000) and logs the result. (bai5)
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
const bai5_1 = require("./bai5");
let bai5Async = () => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield (0, bai5_1.simulateTask)(2000);
    console.log(result);
});
bai5Async();
