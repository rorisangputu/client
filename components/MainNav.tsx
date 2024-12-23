/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

interface MainNavProps extends React.HTMLAttributes<HTMLElement> {
  scrolled: boolean;
}
const MainNav = ({ className, scrolled, ...props }: MainNavProps) => {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/menu",
      label: "Store",
      active: pathname === "/menu",
    },
    // {
    //   href: "/orders",
    //   label: "Orders",
    //   active: pathname === "/orders",
    // },
    {
      href: "/about",
      label: "About",
      active: pathname === "/about",
    },
  ];

  return (
    <div className="ml-auto">
      <nav
        className={cn(
          "flex items-center space-x-4 lg:space-x-12 pl-6",
          className
        )}
      >
        {routes.map((route, i) => (
          <Link
            href={route.href}
            key={i}
            className={cn(
              "text-base text-black font-medium transition-colors hover:text-primary",
              route.active
                ? `${
                    scrolled
                      ? "text-black font-bold"
                      : "text-black dark:text-white"
                  } `
                : `${scrolled ? "text-black" : "text-black"}`
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MainNav;
