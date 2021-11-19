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

export const getPost = async (params, activePage) => {
  try {
    const res = await axios.get(
     `https://lap-center.herokuapp.com/api/product?productName=${params}&pageNumber=${activePage}`
    );
    return res.data.products;
  } catch (error) {
    console.log(error);
  }
};
