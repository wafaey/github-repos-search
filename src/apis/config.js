import axios from "axios";

const Config = {
  get: (subUrl, parameters) => {
    let method = "GET";
    return RequestHandler.handelRequest(subUrl, parameters, method);
  },
};
const ABSOLUTE_URL = /^https?:\/\/(\w+(:\d{4})?)\/?/;
const RequestHandler = {
  handelRequest: (subUrl, data, method, config) => {
    let isAbsoluteUrl = ABSOLUTE_URL.test(subUrl);
    let url = "";

    if (isAbsoluteUrl) url = subUrl;

    return new Promise((resolve, reject) => {
      axios({
        method,
        url,
        data,
        headers: {},
      })
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  },
  handleResponse: (response) => {
    return response;
  },
};

export default Config;
