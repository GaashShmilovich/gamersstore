import React from "react";
import { AppHeader } from "../cmps/Homepage/AppHeader";
import { WhatsNewSlider } from "../cmps/Homepage/WhatsNewSlider";

export function HomePage() {
  return (
    <div>
      <AppHeader />
      <WhatsNewSlider />
    </div>
  );
}
