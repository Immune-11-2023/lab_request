import axios from "axios";


class ReqresService {
  constructor() {
    this.axios = axios.create({
      baseURL: 'https://reqres.in/api',
    });
  }

  async getUsers() {
    const users = await this.axios.get('/users');
    return users.data;
  }

  async getUser() {
    const response = await this.axios.get(`/users/2`);
    return response.data;
  }

  async getUserByID(id) {
    const response = await this.axios.get(`/users/${id}`);
    return response.data;
  }

  async createUser(data) {
    return this.axios.post('/users', data);
  }
}

export default new ReqresService();
