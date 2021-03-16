import React from "react";
import Search from "../../Components/Search";
import { StyledHome, StyledSearchHome } from "./Home.styles";

const Home = () => {
  return (
    <>
      <StyledSearchHome>
        <div className="container">
          <Search />
        </div>
      </StyledSearchHome>
      <StyledHome>
        <div className="container">
          <h1>Home</h1>
        </div>
      </StyledHome>
    </>
  );
};

export default Home;
