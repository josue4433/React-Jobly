import axios from 'axios';

class JoblyApi {
  static token = null;

  static async updateUser(username, userData) {
    const res = await axios.patch('/users/${username}' , userData);
    return res.data.user;
  }
  static async request(endpoint, paramsOrData = {}, verb = 'get') {
    paramsOrData._token = this.token;

    try {
      return (await axios({
        method: verb,
        url: `${BASE_URL}/${endpoint}`,
        [verb === 'get' ? 'params' : 'data']: paramsOrData,
      })).data;
    } catch (err) {
      console.error('API Error:', err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Add other API methods
}

export default JoblyApi;
