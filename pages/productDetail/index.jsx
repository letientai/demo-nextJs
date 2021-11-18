import React from 'react'

import axios from "axios";
const ProductDetail = ({posts}) => {
    return (
        <h1>ProductDetail</h1>
      );
}

// export const getProductIds = async () => {
//     const res = await axios.get("https://lap-center.herokuapp.com/api/product?");
//     const posts = await res.data.products;
//     return posts.map((post) => ({
//       params: {
//         id: `${post._id}`
//       }
//     }))
//   }
  
//   export const getProductById = async (id) => {
//     const res = await axios.get(`https://lap-center.herokuapp.com/api/product/getProductById/${id}`);
//     const posts = await res.data.response;
//     return posts
//   }

export default ProductDetail
