import axios from "axios";

export const getUsers = async () => {
  try {
    let url = "http://localhost:4000/users";
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const postNewUser = async (userOb) => {
  try {
    let url = "http://localhost:4000/users";
    const response = await axios.post(url, userOb);
  } catch (error) {
    console.log(error);
  }
};
