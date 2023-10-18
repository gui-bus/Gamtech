import { Button } from "../ui/button";
import { Card } from "../ui/card";
import Image from "next/image";
import { ThemeToggle } from "./themeToggle";
import { HiMenu } from "react-icons/hi";
import { HiShoppingCart } from "react-icons/hi2";

const Header = () => {
  return (
    <header>
      <Card className="flex justify-between p-4">
        <Button variant="ghost" size="icon">
          <HiMenu size={24} />
        </Button>

        <div className="relative h-auto w-52 px-6">
          <Image
            src="/logo.png"
            alt="Foxtech"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <HiShoppingCart size={24} />
          </Button>
          <ThemeToggle />
        </div>
      </Card>
    </header>
  );
};

export default Header;
