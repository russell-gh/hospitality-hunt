import axios from "axios";
import { getData } from "../storage";
import { apiURL } from "../config";

async function api(type, payload) {
  switch (type) {
    case "SIGNUP":
      const { data } = await axios.post(
        `${apiURL}/signup`,
        payload
      );
      return data;

    default:
      break;
  }

  switch (type) {
    case "LOGOUT":

      const { token } = getData("token");


      const { data } = await axios.delete(`${apiURL}/logout`, {
        headers: {
          token
        },
      });
      return data;

    default:
      break;
  }
}

export default api;
