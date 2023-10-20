"use client";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";
import { TbArrowBack } from "react-icons/tb";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button
      startContent={<TbArrowBack size={20} />}
      color="primary"
      variant="solid"
      className="transition-all hover:scale-[1.02]"
      radius="lg"
      isIconOnly
      size="md"
      onClick={() => router.back()}
    />
  );
};

export default BackButton;
