import Image from "next/image";

interface BannerSectionProps {
  imageSrc: string;
  altText: string;
}

export function BannerSection({ imageSrc, altText }: BannerSectionProps) {
  return (
    <div className="md:hidden">
      <div className="my-5 flex w-full gap-2">
        <Image
          src={imageSrc}
          alt={altText}
          width={0}
          height={0}
          className="h-auto w-full object-cover"
          sizes="100vw"
          priority
        />
      </div>
    </div>
  );
}
