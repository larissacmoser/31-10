import { Text } from "./Text";
import React from "react";
import "./Block.css";

interface BlockProps {
  img: string;
  invert?: boolean;
}
const Block: React.FC<BlockProps> = ({ img, invert }) => {
  if (invert) {
    return (
      <div id="container">
        <img id="img-tag" src={img}></img>
        <Text />
      </div>
    );
  } else {
    return (
      <div id="container">
        <Text />
        <img id="img-tag" src={img}></img>
      </div>
    );
  }
};

export { Block };
