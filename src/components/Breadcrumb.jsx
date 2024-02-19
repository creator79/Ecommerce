import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { truncate } from "../utils/helpers";

const Breadcrumb = ({ title, products }) => {
  return (
    <Wrapper>
      <Link to="/home">Home /</Link>
      {products && <Link to="/products"> prodcuts / </Link>}
      <span> {truncate(title, 20)}</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: var(--breadcrumb-height);
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 1.3rem 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    font-size: var(--fs-400);
    color: var(--white-color);
    transition: var(--transition);
    &:hover {
      color: var(--white-color);
    }
  }

  span {
    font-size: var(--fs-400);
    color: var(--white-color);
  }
`;

export default Breadcrumb;
