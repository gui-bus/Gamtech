"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  name: string;
  imageUrls: string[];
}

const ProductImages = ({ imageUrls, name }: ProductImagesProps) => {
  const [currentImage, setCurrentImage] = useState(imageUrls[0]);

  const handleImageClick = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  };

  return (
    <div className="flex flex-col">
      <div className="flex h-80 w-full items-center justify-center bg-white/50 dark:bg-neutral-800">
        <Image
          src={currentImage}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-full w-full p-2"
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Buttons */}
      <div className="mx-auto my-4 grid grid-cols-4 gap-3 px-2">
        {imageUrls.map((imageUrl) => (
          <Button
            key={imageUrl}
            className={`flex h-20 w-20 items-center justify-center rounded-lg bg-white/50 dark:bg-neutral-800 ${
              imageUrl === currentImage &&
              "border-2 border-black bg-gray-300 dark:border-white dark:bg-neutral-600"
            }`}
            onClick={() => handleImageClick(imageUrl)}
          >
            <Image
              src={imageUrl}
              alt={name}
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-full"
              style={{ objectFit: "contain" }}
            />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
