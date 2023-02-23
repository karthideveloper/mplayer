import axios, { AxiosError } from "axios";

class AxiosClass {
  header = {};
  setHeader(header) {
    this.header = header;
    return this;
  }
  async callApi(method, url, param) {
    try {
      const response = axios({
        method,
        url: `${url}${param}`,
        headers: this.header,
      });
      console.log("response", response);
      return response;
    } catch (e) {
      throw new AxiosError(e.massage, e);
    }
  }
}

export const Axios = new AxiosClass();
