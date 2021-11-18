import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/card";
import { Icon, Input, Pagination } from "semantic-ui-react";
import Container from "react-bootstrap/Container";
import { getPost } from "../lib/post";
export default function Home({ posts }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setData(posts);
  }, []);

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const onSearch = async () => {
    const res = await axios.get(
      `https://lap-center.herokuapp.com/api/product?productName=${search}`
    );
    await console.log("ahihi", res.data.products);
    await setData(res.data.products);
  };

  const handlePaginationChange = async (e, { activePage }) => {
    await setPageNumber(activePage);
    const res = await axios.get(
      `https://lap-center.herokuapp.com/api/product?productName=${search}&pageNumber=${activePage}`
    );
    await setData(res.data.products);
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="home-top">
        <div className="search">
          <Input
            className="input-search"
            icon={
              <Icon name="search" inverted circular link onClick={onSearch} />
            }
            placeholder="Search..."
            value={search}
            onChange={onChangeSearch}
          />
        </div>
      </div>
      <Container className="home-container">
        <h2>LAPCENTER</h2>
        <hr />
        <div className="products">
          {data.length === 0 && <h1>Không tìm thấy sản phẩm nào!!</h1>}
          {data.map((post) => (
            <Card product={post} key={post._id} />
          ))}
        </div>
        <Pagination
          boundaryRange={0}
          activePage={pageNumber}
          ellipsisItem={null}
          firstItem={null}
          lastItem={null}
          siblingRange={1}
          totalPages={3}
          onPageChange={handlePaginationChange}
        />
      </Container>
    </div>
  );
}

export const getStaticProps = async () => {
  const posts = await getPost();
  return {
    props: {
      posts,
    },
  };
};


