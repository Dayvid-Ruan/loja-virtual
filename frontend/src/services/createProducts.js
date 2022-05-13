import axios from "axios";

const fetchProducteCreate = async (name, price) => {
  const userInfo = JSON.parse(localStorage.getItem("admin"));
  try {
    const response = await axios.post("http://localhost:3001/product/create", {
      name,
      price,
    },
    {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: userInfo.token,
      },
    });
    return response.data;
  } catch (error) {
    const err = error.response.data;
    return err;
  }
};

export default fetchProducteCreate;