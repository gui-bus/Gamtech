import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image
        src="/banner_home_mobile_01.png"
        alt="Até 35% de desconto só esse mês"
        width={0}
        height={0}
        className="h-auto w-full md:hidden"
        sizes="100vw"
        priority
      />

      <Image
        src="/banner_home_desktop_01.png"
        alt="Até 35% de desconto só esse mês"
        width={0}
        height={0}
        className="hidden h-96 w-full object-cover md:block"
        sizes="100vw"
        priority
      />
    </main>
  );
}
