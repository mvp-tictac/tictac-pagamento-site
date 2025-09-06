import { Link } from "@/infrastructure/i18n/navigation";
import { Text } from "@/presentation/layouts/Typography/page";
import React from "react";

function Logo() {
  return (
    <Link className="" href="/">
      <div className="flex">
        <Text size="headlineSmall" color={"primary"} weight={"bold"}>
          Ti
        </Text>
        <Text size="headlineSmall" color={"secondary"} weight={"bold"}>
          c
        </Text>
        <Text size="headlineSmall" color={"primary"} weight={"bold"}>
          Tac
        </Text>
      </div>
      <Text size={"labelLarge"} color={"secondary"} weight={"light"}>
        Pagamentos
      </Text>
    </Link>
  );
}

export default Logo;
