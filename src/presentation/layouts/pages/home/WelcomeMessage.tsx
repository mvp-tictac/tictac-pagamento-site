import { Container, Text } from "@/presentation/layouts";
import Section from "@/presentation/layouts/Section/Section";
import React from "react";
import { Button } from "../../../components/ui/button";
import Image from "next/image";

function WelcomeMessage() {
  return (
    <Section>
      <Container className="justify-between items-center" display={"flex"}>
        <div className="flex-1 space-y-3">
          <div className=" flex gap-x-2 flex-wrap ">
            <Text weight={"bold"} size={"displayLarge"}>
              Rapidez, Segurança e
            </Text>
            <Text color={"secondary"} weight={"bold"} size={"displayLarge"}>
              Conveniência
            </Text>
            <Text weight={"bold"} size={"displayLarge"}>
              em Suas Mãos.
            </Text>
          </div>

          <Text size={"headlineSmall"}>
            Experimente o poder de transações rápidas e seguras, com a
            conveniência que sua vida financeira precisa.
          </Text>

          <form className=" w-[503px] gap-x-2 p-[10px] flex border-2 rounded-[8px] border-primary ">
            <input
              placeholder="Informe seu E-mail para começar"
              className="flex-1 border-none outline-none focus:outline-none focus:ring-0 focus:border-none"
              type="text"
            />
            <Button type="submit" size={"lg"}>
              <Text size={"labelLarge"} color={"secondary"}>
                Começar
              </Text>
            </Button>
          </form>
        </div>

        <div className="flex-1 flex justify-end">
          <Image
            height={500}
            width={500}
            alt=""
            className="w-[688px] h-[714px]"
            src={"/for-test-purpose/placeholder.png"}
          />
        </div>
      </Container>
    </Section>
  );
}

export default WelcomeMessage;
