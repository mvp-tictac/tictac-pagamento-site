"use client";
import React from "react";
import {
  NavigationMenu as NavManu,
  NavigationMenuList,
} from "@/presentation/components/ui/navigation-menu";
import { menu } from "@/core/data/constants";
import NavigatonMenus from "./NavigatonMenus";

function Navigatior() {
  return (
    <NavManu>
      <NavigationMenuList className="gap-x-4">
        {menu.map((item, index) => (
          <NavigatonMenus key={index} {...item} />
        ))}
      </NavigationMenuList>
    </NavManu>
  );
}

export default Navigatior;
