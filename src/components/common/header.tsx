"use client";
import React from "react";
import {
  Navbar,
  NavbarContent,
  Button,
  Avatar,
  Link,
  Spinner,
} from "@nextui-org/react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { Separator } from "../ui/separator";
import { HiShoppingCart, HiSun, HiMoon, HiShoppingBag } from "react-icons/hi2";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { TbDiscount2, TbListSearch, TbHomeMove } from "react-icons/tb";
import { signIn, signOut, useSession } from "next-auth/react";

import { useTheme } from "next-themes";

import Image from "next/image";

export default function Header() {
  const { setTheme, theme } = useTheme();

  const { status, data } = useSession();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleLoginClick = async () => {
    await signIn("google");
  };

  const handleLogoutClick = async () => {
    await signOut();
  };

  return (
    <Navbar className="bg-white shadow-xl dark:bg-[#181717]">
      <NavbarContent as="div" justify="start">
        <Link href="/">
          <Image
            src="/gamtech.png"
            alt="Foxtech"
            width={200}
            height={50}
            style={{ objectFit: "contain" }}
            className="h-auto w-36"
          />
        </Link>
      </NavbarContent>

      <NavbarContent as="div" justify="end" className="flex items-center gap-4">
        <Button
          variant="light"
          isIconOnly
          startContent={<HiShoppingCart size={24} />}
        />

        <Sheet>
          {status === "loading" ? (
            <Spinner size="md" color="primary" />
          ) : (
            <SheetTrigger asChild>
              {status === "unauthenticated" ? (
                <Avatar
                  showFallback
                  src=""
                  isBordered
                  color="primary"
                  className="h-9 w-9 cursor-pointer text-large transition-all hover:scale-105"
                />
              ) : (
                <Avatar
                  showFallback
                  src={data?.user?.image!}
                  isBordered
                  color="primary"
                  className="h-9 w-9 cursor-pointer text-large transition-all hover:scale-105"
                />
              )}
            </SheetTrigger>
          )}

          <SheetContent side={"right"}>
            <SheetHeader>
              <h1 className="mx-auto mb-4 text-lg font-semibold">Dashboard</h1>
            </SheetHeader>

            {status === "authenticated" && data?.user && (
              <div className="mb-4 flex flex-col items-center justify-center gap-4 md:flex-row">
                <Avatar
                  showFallback
                  src={data?.user?.image!}
                  className="h-20 w-20 text-large"
                ></Avatar>
                <div className="flex flex-col items-center">
                  <p className="text-lg font-semibold">{data?.user?.name}</p>
                  <p className="text-tiny text-foreground-500">
                    {data?.user?.email}
                  </p>
                </div>
              </div>
            )}

            {/* TODO Add search */}
            {/* <ItemSearch /> */}

            {/* Login & Theme toggle */}
            <div className="flex flex-col gap-2">
              <div className="flex w-full gap-2">
                {status === "unauthenticated" ? (
                  <Button
                    variant="solid"
                    color="primary"
                    className="w-full transition-all hover:bg-[#1267dc]/70"
                    endContent={<FiLogIn size={20} />}
                    onClick={handleLoginClick}
                  >
                    Fazer Login
                  </Button>
                ) : (
                  <Button
                    variant="solid"
                    color="primary"
                    className="w-full transition-all hover:bg-[#1267dc]/70"
                    endContent={<FiLogOut size={20} />}
                    onClick={handleLogoutClick}
                  >
                    Fazer Logout
                  </Button>
                )}
                <Button
                  variant="solid"
                  className="hoverButton"
                  endContent={
                    theme === "dark" ? (
                      <HiSun size={20} />
                    ) : (
                      <HiMoon size={20} />
                    )
                  }
                  onClick={toggleTheme}
                  isIconOnly
                />
              </div>

              {status === "authenticated" && data.user && (
                <Button
                  color="default"
                  className="hoverButton w-full"
                  endContent={<HiShoppingBag size={20} />}
                >
                  Meus pedidos
                </Button>
              )}
            </div>

            <Separator className="my-4" />

            <h1 className="mx-auto mb-4 flex justify-center text-lg font-semibold">
              Descubra
            </h1>

            <div className="flex flex-col items-center justify-center gap-2">
              <Button
                color="default"
                className="hoverButton w-full"
                endContent={<TbHomeMove size={20} />}
              >
                Página inicial
              </Button>

              <Button
                color="default"
                className="hoverButton w-full"
                endContent={<TbDiscount2 size={20} />}
              >
                Promoções
              </Button>

              <Button
                color="default"
                className="hoverButton w-full"
                endContent={<TbListSearch size={20} />}
              >
                Catálogo
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </NavbarContent>
    </Navbar>
  );
}
