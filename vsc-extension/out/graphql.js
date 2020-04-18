"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/semi */
const axios_1 = require("axios");
exports.graphqlSignUp = (userEmail, password, onSuccess) => {
    let signUp = `mutation {
    signUp(email:"${userEmail}", password:"${password}") {
      token
    }
  }`;
    callAPI(signUp, onSuccess);
};
const callAPI = (query, onSuccess, onError = undefined) => {
    axios_1.default.post('http://localhost:4400', { query: query })
        .then((res) => {
        console.log(res.data.data.signUp);
        onSuccess(res.data.data);
    })
        .catch((error) => {
        console.error(error);
        onError && onError(error);
    });
};
//# sourceMappingURL=graphql.js.map