"use strict";
//28. Write an async function batchProcess() that processes 5 async tasks at once (use Promise.all).
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let batchProcess = () => __awaiter(void 0, void 0, void 0, function* () {
    let tasks = Array.from({ length: 5 }, (_, i) => () => __awaiter(void 0, void 0, void 0, function* () {
        yield new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Task ${i + 1} completed`);
    }));
    for (let i = 0; i < tasks.length; i += 5) {
        yield Promise.all(tasks.slice(i, i + 5).map(task => task()));
    }
});
batchProcess();
