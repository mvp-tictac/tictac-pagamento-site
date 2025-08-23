import React, { ForwardRefExoticComponent, RefAttributes } from "react";
import { useTranslations } from "next-intl";
import { LucideProps } from "lucide-react";
import { NavigationMenuLink } from "../ui/navigation-menu";
import { Link } from "@/infrastructure/i18n/navigation";
import { cn } from "@/presentation/lib/utils";

interface SubmenuItemProps extends React.ComponentPropsWithoutRef<"a"> {
  submenuKey: string;
  href: string;
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

export const SubMenu = React.forwardRef<HTMLAnchorElement, SubmenuItemProps>(
  ({ className, submenuKey, href, Icon, ...props }, ref) => {
    const t = useTranslations(`components.navMenu.subMenu.${submenuKey}`);

    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            className={cn(
              "group hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none",
              className
            )}
            href={href}
            {...props}
          >
            <div className="flex items-center gap-2">
              <div className="group-hover:bg-background bg-accent flex h-12 w-12 items-center justify-center rounded-[4px] group-hover:shadow-sm">
                <Icon className="group-hover:text-primary text-[32px]" />
              </div>
              <div className="flex-1">
                <p className="text-sm leading-none font-medium">{t("title")}</p>
                <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                  {t("description")}
                </p>
              </div>
            </div>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
SubMenu.displayName = "SubMenu";
