"use strict";
// 19. Create an async function fetchUsers(ids: number[]) that calls fetchUser for each ID.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let fetchUsers = (ids) => __awaiter(void 0, void 0, void 0, function* () {
    let users = yield Promise.all(ids.map(id => {
        return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(response => response.json());
    }));
    return users;
});
fetchUsers([1, 2, 3]).then(users => console.log(users));
