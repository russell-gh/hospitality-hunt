import axios from "axios";

async function api(type, payload) {
  switch (type) {
    case "SIGNUP":
      const { data } = await axios.post(
        "http://localhost:6001/signup",
        payload
      );
      return data;

    default:
      break;
  }

  switch (type) {
    case "LOGOUT":
      const { data } = await axios.delete("http://localhost:6001/logout", {
        headers: {
          token:
            "1681313397261vvImytsMGTdO058p4ZzdfLyBGX2OyktVuy2um47k28HBrjdTv6o4JXqkjk2s8m2gPb0FyLZE0yDwencLZjWG2oJkBjNuCODVMWEsWqwoFYaDgJbgIk8ARwgh1RoeEopZ",
        },
      });
      return data;

    default:
      break;
  }
}

export default api;
