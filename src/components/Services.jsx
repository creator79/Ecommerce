// import React from "react";
// import styled from "styled-components";

// import { services } from "../utils/constants";

// import Screen from "../styles/Screen";

// import { Typography } from ".";

// const Services = () => {
//   return (
//     <Wrapper>
//       {services.map(({ id, name, icon, text }) => (
//         <article key={id} className='service'>
//           <div className='service__header'>
//             {icon}
//             <Typography.H3>{name}</Typography.H3>
//           </div>
//           <Typography.P>{text}</Typography.P>
//         </article>
//       ))}
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   padding: 2rem 1.5rem;
//   display: grid;
//   justify-items: center;
//   gap: 1.5rem;
//   ${Screen.md`
//   grid-template-columns: 1fr 1fr 1fr;
//   `}

//   .service {
//     padding: 1rem 1.5rem;
//     border: 0.2rem solid var(--green-color-1);
//     border-radius: var(--radius);
//     transition: var(--transition);
//     &:hover {
//       box-shadow: 0 0 1rem 1rem var(--bg-color);
//     }
//   }

//   .service__header {
//     display: flex;
//     align-items: center;
//     margin-bottom: 1rem;

//     svg {
//       color: var(--green-color-1);
//       font-size: 3rem;
//       margin-right: 2rem;
//     }
//   }

//   p {
//     text-align: justify;
//   }
// `;

// export default Services;

import { HoverEffect } from "../components/ui/card-hover-effect";

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-full mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Delivery",
    description:
      "Your order will be delivered within 7-12 business days following the order confirmation. Additional business days may be required for delivery during",
    link: "",
  },
  {
    title: "Payments",
    description:
      "Shop now, pay later. You'll only pay for the items you keep. Your payment will automatically be deducted from your card after 30 days, no additional charge",
    link: "",
  },
  {
    title: "Returns",
    description:
      "You are always welcome to return or exchange for free in any H&M store in the US, excluding Puerto Rico. You have 30 days to decide if an item is right for you",
    link: "",
  },
];
