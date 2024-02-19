import React from "react";

import { PopularProducts, Services, Hero, Contact } from "../components";
import MacList from "../components/MacList";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <MacList />
      <Services />
      <PopularProducts />
      <Contact />
    </main>
  );
};

export default HomePage;
