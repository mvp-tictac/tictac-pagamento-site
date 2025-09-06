"use client";
import { TodoService } from "@/core/application/services";
import HomePage from "@/presentation/layouts/pages/home";
import { Button } from "@/presentation/components/ui/button";
import Container from "@/presentation/layouts/Container/page";
import Section from "@/presentation/layouts/Section/Section";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const fetching = async () => {
      const response = await TodoService.listById("undefined");
      if (response.success) {
        console.log(response.data.title);
      } else {
        console.log(response.error);
      }
    };

    fetching();
  }, []);
  return (
    <>
      <HomePage />
    </>
  );
}
