import axios from "axios";

const fetchLogin = async (email, password) => {
  try {
    const response = await axios.post("http://localhost:3001/login", {
      email, password });
    return response.data;
  } catch (error) {
    const err = error.response.data;
    return err;
  }
};

export default fetchLogin;