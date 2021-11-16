// import Layout from "../components/layout";
import React, { useState } from "react";
import axios from "axios";
import Card from "../components/card";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

export default function Home({ posts }) {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const onSearch = async () => {
    const res = await axios.get(
      `https://lap-center.herokuapp.com/api/product?productName=${search}`
    );
    await setData(res.data.products);
    setSearch("")
  };
  return (
    <div className="home-container">
      <div className="search">
        <InputGroup className="mb-3">
          <FormControl
            aria-label="Text input with dropdown button"
            value={search}
            onChange={onChangeSearch}
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={onSearch}
          >
            Search
          </Button>
        </InputGroup>
      </div>
      <div className="products">
        {data.length > 0
          ? data?.map((post) => <Card product={post} key={post._id} />)
          : posts?.map((post) => <Card product={post} key={post._id} />)}
        {/* {posts?.map((post) => (
          <Card product={post} key={post._id} />
        ))} */}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await axios.get("https://lap-center.herokuapp.com/api/product?");
  const posts = await res.data.products;
  return {
    props: {
      posts,
    },
  };
};
export const getProductIds = async () => {
  const res = await axios.get("https://lap-center.herokuapp.com/api/product?");
  const posts = await res.data.products;
  return posts.map((post) => ({
    params: {
      id: `${post._id}`,
    },
  }));
};

export const getProductById = async (id) => {
  const res = await axios.get(
    `https://lap-center.herokuapp.com/api/product/getProductById/${id}`
  );
  const posts = await res.data.response;
  return posts;
};
