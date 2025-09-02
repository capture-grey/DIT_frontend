import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import NavItem from "./NavItem";
function NavMenu() {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavItem />
          <NavItem />
          <NavItem />
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default NavMenu;
