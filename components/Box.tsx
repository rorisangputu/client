import { cn } from "@/lib/utils";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box = ({ children, className }: BoxProps) => {
  return (
    <div
      className={cn(
        "mx-auto w-full flex items-center justify-center",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Box;
