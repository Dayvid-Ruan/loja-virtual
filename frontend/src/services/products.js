import axios from "axios";

const getAllProducts = async () => {
  const userInfo = localStorage.getItem("user");
  try {
    const response = await axios.get("http://localhost:3001/products", {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: userInfo.token,
      }
    });
    return response.data;
  } catch (error) {
    const err = error.response.data;
    return err;
  }
};

export default getAllProducts;