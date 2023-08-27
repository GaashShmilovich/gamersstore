import React from "react";
import { AppHeader } from "../cmps/Homepage/AppHeader";
import { WhatsNewSlider } from "../cmps/Homepage/WhatsNewSlider";
import { FeaturedGame } from "../cmps/Homepage/FeaturedGame";
import { PopSlider } from "../cmps/Homepage/SmallSliders/PopSlider";
import { RecSlider } from "../cmps/Homepage/SmallSliders/RecSlider";
import { ComingSlider } from "../cmps/Homepage/SmallSliders/ComingSlider";
import { Discounted } from "../cmps/Homepage/Discounted";
import { AppFooter } from "../cmps/Homepage/AppFooter";

export function HomePage() {
  return (
    <div className="homepage-container main-layout">
      <AppHeader />
      <WhatsNewSlider />
      <FeaturedGame />
      <PopSlider />
      <RecSlider />
      <ComingSlider />
      <Discounted />
      <AppFooter />
    </div>
  );
}
