"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/semi */
const axios_1 = require("axios");
exports.signUp = (userEmail, password, cb) => {
    let signUp = `mutation {
    signUp(email:"${userEmail}", password:"${password}") {
      token
    }
  }`;
    axios_1.default.post('http://localhost:4400', { query: signUp })
        .then((res) => {
        cb(res.data.data);
    })
        .catch((error) => {
        console.error(error);
    });
};
//# sourceMappingURL=graphql.js.map