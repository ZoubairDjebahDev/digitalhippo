"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Category = (typeof PRODUCT_CATEGORIES)[number];

interface NavItemProps {
  category: Category;
  handleOpen: () => void;
  isOpem: boolean;
  isAnyOpen: boolean;
}

const NavItem = ({ category, handleOpen, isOpem, isAnyOpen }: NavItemProps) => {
  return (
    <>
      <div className="flex">
        <div className="relative flex items-center">
          <Button
            className="gap-1.5"
            onClick={handleOpen}
            variant={isOpem ? "secondary" : "ghost"}
          >
            {category.label}
            <ChevronDown
              className={cn("h-4 w-4 transition-all text-muted-foreground", {
                "-rotate-180": isOpem,
              })}
            />
          </Button>
        </div>
      </div>
    </>
  );
};

export default NavItem;
