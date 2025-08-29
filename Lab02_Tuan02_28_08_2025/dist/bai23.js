"use strict";
//23. Write an async function that fetches a list of todos and filters out those that are not completed. (dont use old function)
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let fetchAndFilterTodos = function () {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch('https://jsonplaceholder.typicode.com/todos');
        let data = yield response.json();
        return data.filter(todo => todo.completed);
    });
};
fetchAndFilterTodos().then(todos => console.log(todos)).catch(error => console.error(error));
