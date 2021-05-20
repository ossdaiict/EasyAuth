import { API_URL } from "../Constants";
import Axios from "axios";

const GetUserData = async function (id_token, eventId) {
  const headerAuth = {
    "Content-Type": "application/json",
    Authorization: `JWT ${id_token}`,
  };

  console.log(eventId);

  return Axios.get(`${API_URL}/api/event-creator/getUserDataAsCSV/${eventId}`, {
    headers: headerAuth,
  })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      return err;
    });
};

const GetUserDataInTable = async function (event_id, page, count) {

  let id_token = localStorage.getItem("auth_token");

  const headerAuth = {
    "Content-Type": "application/json",
    Authorization: `JWT ${id_token}`,
  };

  return Axios.post(`${API_URL}/api/event-creator/getUserDataAsJSON?page=${page}&count=${count}`,{event_id},{
    headers: headerAuth,
  });
};

export { GetUserData, GetUserDataInTable };
