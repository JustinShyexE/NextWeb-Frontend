"use client";
import "./style/ui/css/navbar.css";
import { NavBar } from "./style/components/NavBar";
import TopBarSlider from "./style/components/TopBarSlider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div className="slider-navbar">
          <TopBarSlider />
          <NavBar />
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
