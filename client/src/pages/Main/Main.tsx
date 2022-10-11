import React from "react";

import "./Main.scss";
import Masonry from "react-masonry-css";

import { useTypeSelector } from "../../hooks/useTypeSelector";

const Main = () => {
  const { user } = useTypeSelector(({ userReducer }) => userReducer);

  return (
    <div className="main">
      Main
      <Masonry
        breakpointCols={{ default: 6 }}
        className="masonry"
        columnClassName="masonry__column"
      >
        {/*{.map((item, index) => (*/}
        {/*  <Card key={index} img={item.pin} title={item.title} />*/}
        {/*))}*/}
      </Masonry>
    </div>
  );
};

export default Main;
