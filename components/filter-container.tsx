"use client";

import { cn } from "@/lib/utils";
import Box from "./Box";

interface filterProps {
  children: React.ReactNode;
  className?: string;
}

const FilterContainer = ({ children, className }: filterProps) => {
  return <Box className={cn("flex-col gap-4", className)}>{children}</Box>;
};

export default FilterContainer;
