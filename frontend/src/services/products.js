import axios from "axios";

const getAllProducts = async () => {
  const userInfo = JSON.parse(localStorage.getItem("user"));
  console.log(userInfo.token);
  try {
    const response = await axios.get("http://localhost:3001/products", {
      headers: {
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