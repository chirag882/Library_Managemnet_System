import React, { useEffect, useState } from "react";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import BookCard from "../../components/bookCard/BookCard";
import axios from "axios";
import Spinner from "../../components/spinner/Spinner"

const Explore = ({type}) => {

  const [data, setData] = useState([]);

  const getCardData = async () => {
    axios
      .get(`http://localhost:5000/books/expore?genre=${type}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    getCardData();
  },[])

  return (
    <div className="maincontent">
      {data?.map((item, index) => {
        return (
          <>
            <BookCard key={index} data={item} />
          </>
        );
      })}
    </div>
  );
};

export default Explore;
