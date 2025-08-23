"use client";
import { Button } from "@/presentation/components";
import Container from "@/presentation/layouts/Container/page";
import React from "react";
function Page() {
  return (
    <div className="mt-10">
      <Container>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint unde
          mollitia praesentium vel sapiente vero, maxime sed aliquid omnis
          repellat adipisci molestias architecto minus aperiam, ea qui.
          Possimus, harum sapiente!
        </p>
        <Button variant={"destructive"}> Ola Mundo</Button>
      </Container>
    </div>
  );
}

export default Page;
