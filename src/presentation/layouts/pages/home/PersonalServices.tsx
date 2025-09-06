import { Container, Text } from "@/presentation/layouts";
import Section from "@/presentation/layouts/Section/Section";
import React from "react";
import Card from "../../../components/card/Card";
import { Button } from "../../../components/ui/button";
import Link from "next/link";

function PersonalServices() {
  return (
    <Section className="my-10 ">
      <Container className="">
        <div className="flex-1 space-y-6">
          <Text className="text-center" size={"headlineLarge"}>
            Descubra como podemos ajudar a simplificar sua jornada financeira.
          </Text>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(310px,1fr))] px-2 gap-x-5 gap-y-4 ">
            <Card
              imageUri="/for-test-purpose/placeholder.png"
              title="Conta Digital"
              description="Movimente seu dinheiro com rapidez e practicidade, sempre que precisar."
            />

            <Card
              button={
                <Button className="w-full">
                  <Link
                    className=""
                    target="_blank"
                    href={"https://www.google.com/"}
                  >
                    Ver mais
                  </Link>
                </Button>
              }
              imageUri="/for-test-purpose/placeholder.png"
              description="Gerencie suas finanças com facilidade, acompanhe gastos e mantenha tudo
                    sob controle em um só lugar."
              title="Transações"
            />

            <Card
              button={
                <Button className="w-full">
                  <Link
                    className=""
                    target="_blank"
                    href={"https://www.google.com/"}
                  >
                    Ver mais
                  </Link>
                </Button>
              }
              type={"imageOnTop"}
              imageUri="/for-test-purpose/placeholder.png"
              description="Proteção avançada para suas transações, garantindo confiança e tranquilidade ."
              title="Segurança"
            />

            <Card
              type={"imageOnTop"}
              imageUri="/for-test-purpose/placeholder.png"
              description="Proteção avançada para suas transações, garantindo confiança e tranquilidade ."
              title="Controle Financeiro"
            />

            <Card
              imageUri="/for-test-purpose/placeholder.png"
              description="Gerencie suas finanças com facilidade, acompanhe gastos e mantenha tudo sob controle em um só lugar."
              title="Segurança"
            />

            <Card
              imageUri="/for-test-purpose/placeholder.png"
              description="Proteção avançada para suas transações, garantindo confiança e tranquilidade ."
              title="Segurança"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default PersonalServices;
