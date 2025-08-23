"use client";
import { Button } from "@/presentation/components";
import Card from "@/presentation/components/card/Card";
import Toast from "@/presentation/components/Toast/Toast";
import { Container } from "@/presentation/layouts";
import React, { useState } from "react";
import { toast } from "sonner";

function page() {
  return (
    <Container>
      <Card />
    </Container>
  );
}

export default page;
