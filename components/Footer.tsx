import React from "react";
import Container from "./container";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-white ">
      <Container>
        <div className="w-full  bg-blue-700/30 grid grid-cols-2 md:grid-cols-4 px-4 md:px-12 py-8">
          <div className="flex flex-col items-start justify-start gap-3">
            <h2 className="text-3xl font-semibold">Menu</h2>
            <p className="text-black text-sm">Home</p>
            <p className="text-black text-sm">Why Choose</p>
            <p className="text-black text-sm">Vapes</p>
            <p className="text-black text-sm">Blog</p>
            <p className="text-black text-sm">Influencer Program</p>
          </div>

          <div className="flex flex-col items-start justify-start gap-3">
            <h2 className="text-3xl font-semibold">Help</h2>
            <p className="text-black text-sm">Privacy</p>
            <p className="text-black text-sm">Terms & Condition</p>
            <p className="text-black text-sm">Policy</p>
          </div>

          <div className="flex flex-col items-start justify-start gap-3">
            <h2 className="text-3xl font-semibold">Contact</h2>
            <p className="text-black text-sm">(+27) 64 358 9082</p>
            <p className="text-black text-sm">info@blueworld.com</p>
            <p className="text-black text-sm">
              243 Sandton Dr, Sandton
              <span className="block">Johannesburg, GP</span>
            </p>
          </div>

          <div className="flex flex-col items-start justify-start gap-3">
            <h2 className="text-3xl font-semibold">Subscribe Our Newsletter</h2>
            <div className="w-full rounded-md border-2 border-blue-500 flex items-center justify-center">
              <input
                type="text"
                placeholder="Enter your Email"
                className="h-full bg-transparent pl-4 text-sm text-white w-full outline-none border-none"
              />
              <Button className="bg-blue-500 rounded-tr-none rounded-br-none hover:bg-blue-600">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="mx-auto py-8 ">
          <p className="text-center text-xs text-black">
            &copy; 2024 Blue World, Inc. All rights reserved
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
