import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Container } from "@/utils/Container";
import ScrollToTop from "@/utils/ScrollToTop";
import { useState } from "react";
import { Outlet } from "react-router";

export const RootLayout = () => {
  const [footerHeight, setFooterHeight] = useState<number>(0);
  return (
    <div className="bg-bg-secondary relative">
      <ScrollToTop />
      <CustomCursor />

      <Header />

      <main className="relative z-[1]">
        <Outlet />
      </main>

      <div style={{ height: footerHeight + 50 }} className="bg-transparent" />

      <Container className="fixed bottom-0 bg-bg-secondary">
        <Footer setFooterHeight={setFooterHeight} />
      </Container>
    </div>
  );
};
