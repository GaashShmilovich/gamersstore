import React from "react";
import { AppHeader } from "../cmps/Homepage/AppHeader";
import { WhatsNewSlider } from "../cmps/Homepage/WhatsNewSlider";
import { FeaturedGame } from "../cmps/Homepage/FeaturedGame";
import { PopSlider } from "../cmps/Homepage/SmallSliders/PopSlider";
import { RecSlider } from "../cmps/Homepage/SmallSliders/RecSlider";
import { ComingSlider } from "../cmps/Homepage/SmallSliders/ComingSlider";
import { Discounted } from "../cmps/Homepage/Discounted";
import { AppFooter } from "../cmps/Homepage/AppFooter";
import imageCompression from "browser-image-compression";

export function HomePage() {
  async function handleImageUpload(event) {
    const imageFile = event.target.files[0];

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
    };
    try {
      const compressedFile = await imageCompression(imageFile, options);
      console.log(compressedFile.size / 1024 / 1024);
    } catch (error) {
      console.log(error);
    }
  }
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
