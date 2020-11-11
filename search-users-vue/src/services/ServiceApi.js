import axios from "axios";

const apiUsers = axios.create({
  baseURL: "https://randomuser.me/api",
});

export default {
  async getUsers() {
    try {
      const res = await apiUsers.get(
        "/?seed=javascript&results=100&nat=BR&noinfo"
      );
      console.log(res.data);
      return res.data;
    } catch (res_1) {
      return console.log({ error: res_1 });
    }
  },
};
