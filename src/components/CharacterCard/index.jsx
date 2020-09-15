import React from "react";
//Core Imports
import { Col } from "react-bootstrap";

/**
 * Character Card
 * @description show de photo and name of character
 * @param {string} name
 * @param {string} Image
 */
const CharacterCard = ({ name, image }) => {
  return (
    <Col xs={12} lg={4}>
      <div
        className="CharacterCard"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="CharacterCard__name-container text-truncate">
          {name}
        </div>
      </div>
    </Col>
  );
};

export default CharacterCard;
