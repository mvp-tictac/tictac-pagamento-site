import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Text } from "@/presentation/layouts/Typography/page";
import { useLocale } from "next-intl";
import locales from "../../../core/data/locales.json";
import { Link, usePathname } from "@/infrastructure/i18n/navigation";
function LocaleChange() {
  const currentLocale = useLocale();
  const pathname = usePathname();

  return (
    <Popover>
      <PopoverTrigger className="cursor-pointer">
        <div className="bg-primary-light border-primary text-primary hover:bg-primary hover:text-primary-foreground flex h-8 w-8 items-center justify-center rounded-full border-2">
          <Text
            size={"bodySmall"}
            weight={"bold"}
            className={"hover:text-white"}
          >
            {currentLocale.toUpperCase()}
          </Text>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto pr-4" align="end">
        <ul>
          {locales.map(({ id, isoCode, language }) => (
            <li
              key={id}
              className="hover:bg-primary-light cursor-pointer rounded-sm px-1.5 py-1"
            >
              <Link href={pathname} locale={isoCode} replace>
                <Text
                  weight={isoCode === currentLocale ? "semibold" : "regular"}
                >
                  {language}
                </Text>
              </Link>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
}

export default LocaleChange;
