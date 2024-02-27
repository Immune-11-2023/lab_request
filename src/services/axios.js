import axios from 'axios';

class AxiosService {
  constructor(url) {
    this.axios = axios.create({
      baseURL: url,
    });
  }
}


export default AxiosService;