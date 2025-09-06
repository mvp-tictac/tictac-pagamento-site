"use client";
import React from "react";
import Navigatior from "./Navigatior";
import LocaleChange from "../Locale/LocaleChange";
import { Button } from "../ui/button";
import Logo from "./Logo";
import { useTranslations } from "next-intl";
import { Container } from "@/presentation/layouts";

function Navbar() {
  const t = useTranslations("components.buttons.getStartedBtn");
  return (
    <div className="border-b-accent bg-background fixed z-50 top-0  mx-auto flex  w-full  border-b-2 shadow-sm ">
      <Container className="py-2 justify-between">
        <div className="hover:cursor-pointer">
          <Logo />
        </div>
        <Navigatior />
        <div className="flex gap-x-4 items-center">
          <LocaleChange />
          <Button className="flex cursor-pointer items-center justify-center">
            {t("Label")}
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
