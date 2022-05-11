import axios from "axios";

const fetchProducteCreate = async (name, price) => {
  try {
    // const userInfo = localStorage.getItem("admin");
    const response = await axios.post("http://localhost:3001/product/create", {
      name, price });
    return response.data;
  } catch (error) {
    const err = error.response.data;
    return err;
  }
};

export default fetchProducteCreate;