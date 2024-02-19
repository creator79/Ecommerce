// import React from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";

// import heroImg from "../assets/hero_img.png";
// import { Typography, Button } from ".";

// const Hero = () => {
//   return (
//     <Wrapper>
//       <div className='hero'>
//         <Typography.H1 className='hero__title'>
//           <span>Everything</span> <br /> you need to be good looking
//         </Typography.H1>
//         <Button variant='primary' className='header__link'>
//           <Link to='/products'>Shop Now</Link>
//         </Button>
//         <div className='hero__img'>
//           <img src={heroImg} alt='hero - img' />
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   overflow: hidden;

//   .hero {
//     padding: 0 1rem 0 2rem;
//     display: flex;
//     justify-content: space-between;
//     flex-direction: column;
//     gap: 1rem;
//   }

//   .hero__title {
//     align-self: flex-start;
//     margin-top: 10vh;
//     position: relative;
//     z-index: 1;
//     span {
//       color: var(--green-color-1);
//     }

//     &::before {
//       content: "";
//       position: absolute;
//       top: -1rem;
//       left: -5rem;
//       width: 12rem;
//       height: 12rem;
//       border-radius: 50%;
//       background: var(--yellow-color-1);
//       z-index: -1;
//     }
//   }

//   .header__link {
//     width: max-content;
//     z-index: 1;
//   }

//   .hero__img {
//     width: min(90%, 480px);
//     align-self: flex-end;
//   }
// `;

// export default Hero;

import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax";

export default function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://images.pexels.com/photos/7206287/pexels-photo-7206287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://images.unsplash.com/photo-1627577279497-4b24bf1021b6?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?q=80&w=1919&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://images.unsplash.com/photo-1574868843985-6caab2f9e64c?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://images.unsplash.com/photo-1520591799316-6b30425429aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://images.unsplash.com/photo-1589363463135-e811e08d8ace?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://images.unsplash.com/photo-1627292441194-0280c19e74e4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://images.unsplash.com/photo-1611042553484-d61f84d22784?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1688497831197-9c792767fb8c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://swifterm.com/wp-content/uploads/2021/08/what-is-an-online-ecommerce-business-plan-1536x864-1-1280x720-1.webp",
  },
];
