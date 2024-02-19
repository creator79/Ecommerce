import React from "react";
import { Link } from "react-router-dom";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Stars from "./Stars";

export default function ThreeDCardDemo({ products }) {
  return (
    <div className="flex flex-wrap gap-2 ml-20">
      {products.map(({ title, id, image, price, rating }) => (
        <CardContainer key={id} className="inter-var flex">
          {" "}
          {/* Add flex class here */}
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Link to={`/products/${id}`} key={id}>
                <img
                  src={image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </Link>
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-xl font-normal dark:text-white"
              >
                ${price}
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-black dark:text-black text-white text-xs font-bold flex-1 flex-row"
              >
                {rating && <Stars stars={rating} />}
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}
