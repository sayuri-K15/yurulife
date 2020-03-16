import React, { Component } from "react";
import {Pagination} from "react-bootstrap";
import "./pagination.scss"

const PaginationBtn = () => {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return(
  <div className="pagination-container">
    <Pagination size="lg" className="pagination-btn ">{items}</Pagination>
  </div>
  )
};

export default PaginationBtn;

