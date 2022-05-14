import axios from "axios";

const fetchRegisterUSer = async (name, email, password) => {
  try {
    const response = await axios.post("http://localhost:3001/registerUser", {
      name, email, password });
    return response.data;
  } catch (error) {
    const err = error.response.data;
    return err;
  }
};

export default fetchRegisterUSer;