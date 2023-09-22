import React from "react";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import BookCard from "../../components/bookCard/BookCard";
import "./style.scss";
const Home = () => {
  return (
    <div className="coverContent">
      <div className="cover-img">
        <div className="opacity-layer"></div>
        <ContentWrapper>
          <div className="titleContent">
            <span className="title">Welcome.</span>
            <span className="subTitle">
              Thousands of fictions, adventures, comics to discover. Explore
              now.
            </span>
            <div className="searchInput">
              <input type="text" placeholder="Search for a book...." />
              <button>Search</button>
            </div>
          </div>
        </ContentWrapper>
      </div>
      <div className="maincontent">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </div>
  );
};

export default Home;
