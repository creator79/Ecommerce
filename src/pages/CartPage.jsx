import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Screen from "../styles/Screen";

import {
  Breadcrumb,
  CartItem,
  CartTotals,
  EmptyCart,
  Button,
} from "../components";

import { useCartContext } from "../contexts/cart_context";

import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";

export default function CartPage() {
  const { cart, clearCart } = useCartContext();

  if (cart.length < 1) {
    return <EmptyCart />;
  }
  return (
    <div className="w-screen h-full overflow-hidden mt-[-4rem] mb-10">
      <Breadcrumb title="Cart" />
      <LampContainer className="mt-5">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-20 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Shop Now <br /> the right way
          <Wrapper>
            <div className="cart-content">
              <div className="cart__items">
                {cart.map((item) => (
                  <CartItem key={item.id} {...item} />
                ))}
              </div>
              <div className="cart__links">
                <Button variant="primary">
                  <Link to="/products">Buy more</Link>
                </Button>
                <Button
                  variant="secondary"
                  className="clear-btn"
                  onClick={clearCart}
                >
                  Clear cart
                </Button>
              </div>
            </div>
            <span className=" ml-20 mt-[5rem]">
              <CartTotals />
            </span>
          </Wrapper>
        </motion.h1>
      </LampContainer>
    </div>
  );
}

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  ${Screen.lg`
    grid-template-columns: 1fr 1fr 1fr;
    `}

  .cart-content {
    display: grid;
    gap: 1rem;
    margin-top: 11rem;
    ${Screen.lg`
    grid-column: 1/3;
    `}
  }

  .cart__items {
    padding: 1rem;
  }

  .cart__links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
  }

  .clear-btn {
    padding: 0.75rem 1.5rem;
  }
`;
