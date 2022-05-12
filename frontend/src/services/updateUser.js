import axios from "axios";

const fetchUpdateUser = async (id, saldo) => {
  try {
    const response = await axios.put("http://localhost:3001/user", {
      id,
      saldo, 
    });
    return response.data;
  } catch (error) {
    const err = error.response.data;
    return err;
  }
};

export default fetchUpdateUser;