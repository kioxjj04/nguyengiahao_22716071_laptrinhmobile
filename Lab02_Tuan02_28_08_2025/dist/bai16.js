"use strict";
//16. Call multiple async functions in parallel using Promise.all().
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bai14_1 = __importDefault(require("./bai14"));
let bai16 = () => __awaiter(void 0, void 0, void 0, function* () {
    let results = yield Promise.all([(0, bai14_1.default)(5), (0, bai14_1.default)(10), (0, bai14_1.default)(15)]);
    console.log(results);
});
bai16();
