"use strict";
//21. Use fetch to get data from a public API (e.g.,https://jsonplaceholder.typicode.com/todos/1).
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let fetchData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let response = yield fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return response.json();
});
fetchData(1).then(todo => console.log(todo)).catch(error => console.error(error));
