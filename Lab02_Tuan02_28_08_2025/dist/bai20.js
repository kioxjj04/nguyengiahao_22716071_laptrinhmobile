"use strict";
//20. Add a timeout: if the API call takes more than 2 seconds, throw an error.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let fetchUsersTimeout = (ids) => __awaiter(void 0, void 0, void 0, function* () {
    let users = yield Promise.all(ids.map(id => {
        return Promise.race([
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(response => response.json()),
            new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 2000))
        ]);
    }));
    return users;
});
fetchUsersTimeout([1, 2, 3]).then(users => console.log(users)).catch(error => console.error(error));
