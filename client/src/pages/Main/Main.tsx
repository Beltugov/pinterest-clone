import React from "react";

import "./Main.scss";
import Masonry from "react-masonry-css";

import Card from "../../components/Card/Card";
import { pinsDB } from "../../db/db";
import { useTypeSelector } from "../../hooks/useTypeSelector";

const Main = () => {
  const { nickname, avatar } = useTypeSelector(
    ({ userReducer }) => userReducer
  );
  return (
    <div className="main">
      <Masonry
        breakpointCols={{ default: 6 }}
        className="masonry"
        columnClassName="masonry__column"
      >
        {pinsDB.map((item, index) => (
          <Card key={index} img={item.pin} title={item.title} />
        ))}
      </Masonry>
    </div>
  );
};

export default Main;
