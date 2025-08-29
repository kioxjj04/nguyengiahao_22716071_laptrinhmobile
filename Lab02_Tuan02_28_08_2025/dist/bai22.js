"use strict";
//22. Call the API multiple times and log the results.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let fetchDatas = (ids) => __awaiter(void 0, void 0, void 0, function* () {
    let todos = yield Promise.all(ids.map((id) => __awaiter(void 0, void 0, void 0, function* () {
        let response = yield fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        return response.json();
    })));
    return todos;
});
fetchDatas([4, 5, 6]).then(todos => console.log(todos)).catch(error => console.error(error));
