import { Button } from "@/presentation/components";
import Card from "@/presentation/components/card/Card";
import { CardDescription, CardTitle } from "@/presentation/components/ui/card";
import { Container, Text } from "@/presentation/layouts";
import Section from "@/presentation/layouts/Section/Section";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <Container className="space-y-4">
      <Card
        className="border-none shadow-none"
        textContent={
          <>
            <CardTitle>
              {"Conheça a conta digital TicTac Pagamentos parceira"}
            </CardTitle>
            <CardDescription>
              {
                "Abrir uma conta parceira no TicTac Pagamentos é mais fácil que pagar imposto."
              }
            </CardDescription>
          </>
        }
        type={"imageOnSide"}
        imageOnLeft={false}
        imageUri="/for-test-purpose/placeholder.png"
      />
      <Card
        className="border-none shadow-none"
        textContent={
          <div>
            <Text size={"headlineLarge"}>Hello world</Text>
            <Text size={"bodySmall"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              ipsam expedita, autem dolore nemo ea ullam! Dignissimos et quae
              atque minus molestias sunt iste numquam officia neque. Adipisci,
              deserunt quis!
            </Text>
          </div>
        }
        type={"imageOnSide"}
        title="Conheça a conta digital TicTac Pagamentos parceira"
        description="Abrir uma conta parceira no TicTac Pagamentos é mais fácil que pagar imposto."
        imageUri="/for-test-purpose/placeholder.png"
      />

      <Card
        className="border-none shadow-none"
        imageOnLeft={false}
        textContent={
          <div>
            <Text size={"headlineLarge"}>Hello world</Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              ipsam expedita, autem dolore nemo ea ullam! Dignissimos et quae
              atque minus molestias sunt iste numquam officia neque. Adipisci,
              deserunt quis!
            </Text>
            <Button className="w-full">Comece aqui</Button>
          </div>
        }
        type={"imageOnSide"}
        title="Conheça a conta digital TicTac Pagamentos parceira"
        description="Abrir uma conta parceira no TicTac Pagamentos é mais fácil que pagar imposto."
        imageUri="/for-test-purpose/placeholder.png"
      />
    </Container>
  );
}

export default page;
