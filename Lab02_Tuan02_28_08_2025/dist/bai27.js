"use strict";
//27. Write a function fetchWithRetry(url, retries) that retries up to retries times if the API call fails.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let fetchWithRetry = (url, retries) => __awaiter(void 0, void 0, void 0, function* () {
    for (let i = 0; i < retries; i++) {
        try {
            let response = yield fetch(url);
            if (!response.ok)
                throw new Error("Network response was not ok");
            return yield response.json();
        }
        catch (error) {
            if (error instanceof Error) {
                console.error(`Attempt ${i + 1} failed: ${error.message}`);
            }
            else {
                console.error(`Attempt ${i + 1} failed: Unknown error`);
            }
        }
    }
    throw new Error(`Failed to fetch ${url} after ${retries} attempts`);
});
fetchWithRetry('https://jsonplaceholder.typicode.com/todos/1', 3)
    .then(data => console.log(data))
    .catch(error => console.error(error));
