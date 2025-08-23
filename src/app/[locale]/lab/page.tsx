import { Button } from "@/presentation/components";
import { Container } from "@/presentation/layouts";
import React from "react";

function page() {
  return (
    <Container>
      <Button>Defult</Button>
      <Button variant={"destructive"}> Primary</Button>
      <Button variant={"secondary"}> Secondary</Button>
      <Button variant={"outline"}>Outlined</Button>
    </Container>
  );
}

export default page;
