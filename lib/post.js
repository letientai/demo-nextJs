import axios from "axios";

export const getProductIds = async () => {
    const res = await axios.get("https://lap-center.herokuapp.com/api/product?");
    const posts = await res.data.products;
    return posts.map((post) => ({
      params: {
        id: `${post._id}`,
      },
    }));
  };



  export const getPost = async () => {
    const res = await axios.get("https://lap-center.herokuapp.com/api/product?");

    return  res.data.products
  };

