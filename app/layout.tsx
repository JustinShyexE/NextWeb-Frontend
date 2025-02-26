"use client";
import "./style/ui/css/homepage.css";
import { NavBar } from "./style/components/NavBar";
import TopBarSlider from "./style/components/TopBarSlider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <TopBarSlider/>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
