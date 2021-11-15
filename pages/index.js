// import Layout from "../components/layout";
import React, {useState} from "react";
import axios from "axios";
import Card from "../components/card/card";
import style from "../styles/Home.module.css";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

export default function Home({ posts }) {
  const [search, setSearch] = useState("")
  const onChangeSearch = (e) =>{
    setSearch(e.target.value)
  }
  const onSearch = () =>{
    getStaticProps(url)
  }
  return (
    <div>
      {/* <Layout> */}
      <div className={style.search}>
        <InputGroup className="mb-3">
          <FormControl aria-label="Text input with dropdown button" value={search} onChange={onChangeSearch}/>
          <Button variant="outline-secondary" id="button-addon2">
            Search
          </Button>
        </InputGroup>
      </div>
      <div className={style.products}>
        {posts.map((post) => (
          <Card product={post} />
        ))}
      </div>
      {/* </Layout> */}
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
