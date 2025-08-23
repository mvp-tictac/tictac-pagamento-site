import { Link, usePathname } from "@/infrastructure/i18n/navigation";
import { useTranslations } from "next-intl";
import React, { ForwardRefExoticComponent, RefAttributes } from "react";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { LucideProps } from "lucide-react";
import { SubMenu } from "./SubMenus";

type MenuItemWithSubmenuProps = {
  title: string;
  url: string;
  submenu?: {
    submenuKey: string;
    href: string;
    icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
  }[];
};

function NavigatonMenus({ title, submenu, url }: MenuItemWithSubmenuProps) {
  const t = useTranslations("components.navMenu.menu");
  const pathname = usePathname();

  if (!submenu) {
    return (
      <NavigationMenuItem>
        <NavigationMenuLink
          className={`${navigationMenuTriggerStyle()} ${
            pathname.startsWith(url) ? "text-primary" : ""
          }`}
          asChild
        >
          <Link href={url}>{title}</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className={`cursor-pointer ${
          pathname.startsWith(url) ? "text-primary" : ""
        }`}
      >
        {t(title)}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
          {submenu.map((submenu, index) => (
            <SubMenu key={index} {...submenu} Icon={submenu.icon} />
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

export default NavigatonMenus;
