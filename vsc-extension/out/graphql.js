"use strict";
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
const axios_1 = require("axios");
exports.me = (token) => {
    let query = `query {
    me {email}
  }`;
    let headers = {
        'token': token
    };
    return callAPI(query, headers);
};
exports.graphqlSignIn = (userEmail, password) => {
    let query = `query {
    signIn(email:"${userEmail}", password:"${password}") {
      token
    }
  }`;
    return callAPI(query);
};
exports.graphqlSignUp = (userEmail, password) => {
    let mutation = `mutation {
    signUp(email:"${userEmail}", password:"${password}") {
      token
    }
  }`;
    return callAPI(mutation);
};
const callAPI = (query, headers = undefined) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield axios_1.default.post('http://localhost:4400', { query: query }, { headers: headers });
        console.log(res);
        if (!res.data.data) {
            return Promise.reject(res);
        }
        return res.data.data;
    }
    catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
});
//# sourceMappingURL=graphql.js.map