import React from "react";
import { ParallaxScrollSecond } from "../components/ui/parallax-scroll-2";
import { Link } from "react-router-dom";

export default function ParallaxScrollSecondDemo({ products }) {
  const imageLinks = products.map(product => ({
    image: product.image,
    id: product.id
  }));

  return (
    <ParallaxScrollSecond images={imageLinks.map(link => link.image)}>
      {imageLinks.map(link => (
        <Link key={link.id} to={`/products/${link.id}`}>
          <img src={link.image} alt={`Product ${link.id}`} />
        </Link>
      ))}
    </ParallaxScrollSecond>
  );
}
