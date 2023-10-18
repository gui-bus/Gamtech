"use client";
import React from "react";
import { Navbar, NavbarContent, Button, Input } from "@nextui-org/react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { Separator } from "../ui/separator";
import { HiMenu } from "react-icons/hi";
import { HiShoppingCart, HiSun, HiMoon } from "react-icons/hi2";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { TbDiscount2, TbListSearch, TbHomeMove } from "react-icons/tb";

import { useTheme } from "next-themes";

import Image from "next/image";
import ItemSearch from "./itemSearch";

export default function App() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Navbar className="bg-white p-2 shadow-xl dark:bg-[#181717]">
      <NavbarContent as="div" justify="start">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="light"
              isIconOnly
              startContent={<HiMenu size={24} />}
            />
          </SheetTrigger>

          <SheetContent side={"left"}>
            <SheetHeader>
              <h1 className="mx-auto text-lg font-semibold mb-4">Menu</h1>
            </SheetHeader>

            {/* TODO Add search */}
            {/* <ItemSearch /> */}

            {/* Login & Theme toggle */}
            <div className="flex w-full gap-2">
              <Button
                variant="shadow"
                color="primary"
                className="w-full"
                endContent={<FiLogIn size={20} />}
              >
                Login
              </Button>
              <Button
                variant="shadow"
                endContent={
                  theme === "dark" ? <HiSun size={20} /> : <HiMoon size={20} />
                }
                onClick={toggleTheme}
                isIconOnly
              />
            </div>

            <Separator className="my-4" />

            <div className="flex flex-col items-center justify-center gap-2">
              <Button
                color="default"
                className="w-full"
                endContent={<TbHomeMove size={20} />}
              >
                Página inicial
              </Button>

              <Button
                color="default"
                className="w-full"
                endContent={<TbDiscount2 size={20} />}
              >
                Promoções
              </Button>

              <Button
                color="default"
                className="w-full"
                endContent={<TbListSearch size={20} />}
              >
                Catálogo
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </NavbarContent>

      <NavbarContent as="div" justify="center">
        <Image
          src="/logo.png"
          alt="Foxtech"
          width={200}
          height={50}
          style={{ objectFit: "contain" }}
          className="h-auto w-36 md:w-44"
        />
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Button
          variant="light"
          isIconOnly
          startContent={<HiShoppingCart size={24} />}
        />
      </NavbarContent>
    </Navbar>
  );
}
