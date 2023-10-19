import DesktopUI from "@/components/home/desktopHomeUI";
import MobileUI from "@/components/home/mobileHomeUI";

export default function Home() {
  return (
    <main>
      {/* Desktop Product lists */}
      <DesktopUI />

      {/* Mobile Product lists */}
      <MobileUI />
    </main>
  );
}
