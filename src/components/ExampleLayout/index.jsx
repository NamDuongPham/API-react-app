import React from "react";
import ServicesList from "./ServicesList";
import TheBanner from "./TheBanner";
import TheFooter from "./TheFooter";
import TheHeader from "./TheHeader";

function ExampleLayout() {
  return (
    <div>
      <TheHeader></TheHeader>
      <TheBanner></TheBanner>
      <ServicesList></ServicesList>
      <TheFooter></TheFooter>
    </div>
  );
}

export default ExampleLayout;
