"use client";
import { TodoService } from "@/core/application/services";
import { Button } from "@/presentation/components/ui/button";
import Container from "@/presentation/layouts/Container/page";
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
    <Container display="grid" className=" bg-slate-200 py-2">
      <div className="h-[150px] w-[250] bg-blue-600">
        <p>Hello world</p>
      </div>
      <div className="h-[150px] w-[250] bg-blue-600">
        <p>Hello world</p>
      </div>
      <div className="h-[150px] w-[250] bg-blue-600">
        <p>Hello world</p>
      </div>
      <div className="h-[150px] w-[250] bg-blue-600">
        <p>Hello world</p>
      </div>
      <div className="h-[150px] w-[250] bg-blue-600">
        <p>Hello world</p>
      </div>
      <div className="h-[150px] w-[250] bg-blue-600">
        <p>Hello world</p>
      </div>
    </Container>
  );
}
