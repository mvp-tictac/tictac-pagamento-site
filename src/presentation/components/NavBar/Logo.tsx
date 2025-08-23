import { Link } from "@/infrastructure/i18n/navigation";
import { Text } from "@/presentation/layouts/Typography/page";
import React from "react";

function Logo() {
  return (
    <Text size="headlineSmall" color={"primary"} weight={"bold"}>
      <Link href="/">TicTac</Link>
    </Text>
  );
}

export default Logo;
