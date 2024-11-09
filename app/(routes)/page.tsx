import getProducts from "@/actions/get-products";
import Container from "@/components/container";
import PopularContent from "@/components/popularContent";

import Image from "next/image";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Cigarette, ShieldCheck, Truck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const revalidate = 0;

const HomePage = async () => {
  const product = await getProducts({ isFeatured: true });

  return (
    <>
      <Container className="px-4 md:px-12">
        <section className="grid grid-cols-1 md:grid-cols-2 py-12 pt-16">
          <div className="flex flex-col items-start justify-start gap-4">
            <p className="px-6 py-1 rounded-full text-neutral-500 border border-gray-300">
              Need to blow smoke?
            </p>
            <h2 className="text-5xl font-bold tracking-wider uppercase text-neutral-700 my-2">
              Blue World <span className="block py-4">vapes</span>
            </h2>
            <p className="text-base text-center md:text-left text-neutral-500 my-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates voluptatum error magni nesciunt accusantium quia
              sapiente
            </p>
            <div className="my-4 flex text-center justify-center md:justify-start gap-6 w-full md:w-auto">
              <Link href={"/menu"}>
                <Button className="px-8 md:px-16 py-4 md:py-6 rounded-full bg-blue-500">
                  Order Now
                </Button>
              </Link>
              <Link href={"/"}>
                <Button
                  className="px-8 md:px-16 py-4 md:py-6 rounded-full"
                  variant={"outline"}
                >
                  Explore
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <div className="w-full relative h-[500px] flex items-center justify-start">
              <Image
                src="/img/Geek-Bar-Pulse.png"
                alt="Hero"
                className="object-contain w-full h-full absolute"
                fill
              />
            </div>
          </div>
        </section>

        {/* Popular sections */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 gap-y-20 md:gap-12 my-4 py12">
          {product?.slice(0.4).map((item, i) => (
            <PopularContent key={i} data={item} />
          ))}
        </section>
        {/* why choose us */}
        <section className=" my-4 py-12 flex flex-col items-center justify-center">
          <h2 className="text-5xl md:text-5xl font-bold tracking-wider uppercase text-neutral-700 my-4">
            Why choose us ?
          </h2>
          <p className="w-full text-center md:w-[560px] text-base text-neutral-500 my-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic,
            commodi repellendus quod tempore reiciendis mollitia perferendis{" "}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full my-6 mt-20">
            <Card className="shadow-lg rounded-md border-none p-4 py-12 flex flex-col items-center justify-center gap-4">
              <Cigarette className="w-8 h-8 text-blue-600" />
              <CardTitle className="text-neutral-600">
                Premium Vape Flavors
              </CardTitle>
              <CardDescription className="text-center">
                Explore a wide variety of premium vape flavors designed to suit
                every taste preference.
              </CardDescription>
            </Card>

            <Card className="shadow-lg rounded-md border-none p-4 py-12 flex flex-col items-center justify-center gap-4">
              <ShieldCheck className="w-8 h-8 text-blue-600" />
              <CardTitle className="text-neutral-600">
                Top-Quality Products
              </CardTitle>
              <CardDescription className="text-center">
                We offer only the best, highest-quality vape products sourced
                from trusted brands.
              </CardDescription>
            </Card>

            <Card className="shadow-lg rounded-md border-none p-4 py-12 flex flex-col items-center justify-center gap-4">
              <Truck className="w-8 h-8 text-blue-600" />
              <CardTitle className="text-neutral-600">
                Reliable & Fast Delivery
              </CardTitle>
              <CardDescription className="text-center">
                Enjoy fast and reliable delivery right to your door, ensuring
                you never run out.
              </CardDescription>
            </Card>
          </div>
        </section>

        {/* our chef sections */}
        {/* <section className=" my-4 py-12 flex flex-col items-center justify-center">
          <h2 className="text-5xl md:text-5xl font-bold tracking-wider uppercase text-neutral-700 my-4">
            Our Special Chefs
          </h2>
          <p className="w-full text-center md:w-[560px] text-base text-neutral-500 my-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic,
            commodi repellendus quod tempore reiciendis mollitia perferendis{" "}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full my-6 mt-20">
            <Card className="shadow-lg relative rounded-md border-none  flex flex-col items-center justify-end h-96 md:h-[520px] bg-hero/30">
              <Image
                src="/img/chef1.png"
                alt="Chef One"
                className="w-full h-full object-contain"
                fill
              />
            </Card>

            <Card className="shadow-lg relative rounded-md border-none  flex flex-col items-center justify-end h-96 md:h-[520px] mt-20 bg-hero/30">
              <Image
                src="/img/chef3.png"
                alt="Chef One"
                className="w-full h-full object-contain"
                fill
              />
            </Card>

            <Card className="shadow-lg relative rounded-md border-none  flex flex-col items-center justify-end h-96 md:h-[520px] bg-hero/30">
              <Image
                src="/img/chef2.png"
                alt="Chef One"
                className="w-full h-full object-contain"
                fill
              />
            </Card>
          </div>
        </section> */}
      </Container>
    </>
  );
};

export default HomePage;
