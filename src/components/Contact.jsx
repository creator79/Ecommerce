// import React from "react";
// import styled from "styled-components";

// import { Typography } from ".";

// const Contact = () => {
//   return (
//     <Wrapper>
//       <div className='contact__text'>
//         <Typography.H2>Join our newsletter and get 20% off</Typography.H2>
//         <Typography.P>
//           Shop now, pay later. You'll only pay for the items you keep. Your
//           payment will automatically be deducted from your card after 30 days,
//           no additional charge
//         </Typography.P>
//       </div>
//       <form className='contact__form' onSubmit={(e) => e.preventDefault()}>
//         <input type='text' placeholder='Enter Email' />
//         <button type='submit'>Subscribe</button>
//       </form>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap: 2rem;
//   padding: 4rem 1rem;
//   max-width: 750px;

//   .contact__text {
//     h2 {
//       margin-bottom: 2rem;
//     }
//   }

//   .contact__form {
//     border-radius: var(--radius);
//     border: 0.3rem solid var(--green-color-1);
//     padding: 0.5rem;
//     width: min(100%, 400px);
//     display: flex;
//     gap: 1rem;
//     justify-content: space-between;

//     input,
//     button {
//       font-size: var(--fs-400);
//     }

//     button {
//       background: var(--green-color-1);
//       border-radius: var(--radius);
//       padding: 0.5rem 1rem;
//       transition: var(--transition);
//       color: var(--blue-color-3);
//       &:hover {
//         color: var(--white-color);
//       }
//     }
//   }
// `;

// export default Contact;

import React from "react";
import "../index.css";
import { BackgroundBeams } from "../components/ui/background-beams";

export default function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10 ">
          Shop now, pay later. You'll only pay for the items you keep. Your
          payment will automatically be deducted from your card after 30 days,
          no additional charge
        </p>
        <input
          type="text"
          placeholder="Enter your email address"
          className="rounded-lg border px-10 h-20 border-neutral-800 focus:ring-2 text-white  focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-400"
          onChange={(e) => {
            e.target.value;
          }}
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}
