'use client'
import React from 'react';
import Natural from "@/components/home/Natural";
import Offer from "@/components/home/Offer";
import AboutUs from "@/components/home/AboutUs";
import Products from "@/components/home/Products";
import Testimonial from "@/components/home/Testimonial";
import ForYou from "@/components/home/ForYou";
import Econis from "@/components/home/Econis";
import Organic from "@/components/home/Organic";
import Discover from "@/components/home/Discover";

const MainSection = () => {
    return (
        <>
      <Natural/>
           <Offer/>
            <AboutUs/>
            <Products/>
            <Testimonial/>
            <ForYou/>
            <Econis/>
            <Organic/>
            <Discover/>
        </>
    );
};

export default MainSection;

