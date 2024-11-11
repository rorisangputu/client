"use client";
import React, { useEffect } from "react";

type Props = {};

const page = (props: Props) => {
  useEffect(() => {
    // Load Facebook SDK script
    const script = document.createElement("script");
    script.src =
      "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v15.0";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-neutral-700 mb-4">
          About Blue World Vapes
        </h1>
        <p className="text-xl text-neutral-600">
          Your trusted destination for premium vapes in Johannesburg, South
          Africa.
        </p>
      </section>

      {/* About Blue World Vapes with alternating text and images */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-neutral-700 mb-6">
          Who We Are
        </h2>

        {/* First section - Text Left, Image Right */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
          <div className="lg:w-1/2 text-neutral-600 text-lg mb-6 lg:mb-0">
            <p>
              At Blue World Vapes, we offer the finest selection of vapes and
              vaping accessories. Based in Johannesburg, South Africa, we aim to
              provide an exceptional vaping experience to all our customers.
              Whether you’re a seasoned vaper or just getting started, we have
              the perfect products for you. Our collection includes top-quality
              vape pens, e-liquids, accessories, and much more.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://plus.unsplash.com/premium_photo-1720012345679-d14595598b3a?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Vape Products"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Second section - Image Left, Text Right */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-8 gap-6">
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1579165466991-467135ad3110?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Vape Shop"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 text-neutral-600 text-lg mb-6 lg:mb-0">
            <p>
              We are passionate about promoting a healthier alternative to
              smoking while offering a variety of flavors and products. Our team
              is dedicated to providing the highest level of customer service
              and ensuring that you have a seamless and enjoyable experience
              when shopping with us.
            </p>
          </div>
        </div>

        {/* Third section - Text Left, Image Right */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
          <div className="lg:w-1/2 text-neutral-600 text-lg mb-6 lg:mb-0">
            <p>
              Located in the heart of Johannesburg, we have quickly become the
              go-to destination for vapers. We pride ourselves on delivering
              products that meet the highest standards of quality and safety.
              We’re more than just a vape shop; we’re a community of like-minded
              individuals who are passionate about vaping.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Vape Store"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="mb-12 flex justify-center">
        <h2 className="text-3xl font-semibold text-neutral-700 mb-6">
          Follow Us on Facebook
        </h2>
        <div
          className="fb-page w-[90%]"
          data-href="https://www.facebook.com/p/Blue-Worlds-Pty-Ltd-100087500094205/" // Replace with your Facebook page URL
          data-tabs="timeline"
          data-width="4080"
          data-height="500"
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        ></div>
      </section>
    </div>
  );
};

export default page;
