import Image from "next/image";

interface DesktopBannerSectionProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export function DesktopBannerSection({ images }: DesktopBannerSectionProps) {
  return (
    <div className="hidden md:block">
      <div className="mx-auto my-5 flex w-full items-center justify-center gap-3 px-5">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={0}
            height={0}
            className="h-auto w-full max-w-[50%] rounded-2xl"
            sizes="100vw"
            priority
          />
        ))}
      </div>
    </div>
  );
}
