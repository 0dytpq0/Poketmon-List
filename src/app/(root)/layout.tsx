import Header from "@/components/Header";
import { Metadata } from "next";
import { PropsWithChildren } from "react";
import "../globals.css";

export const metadata: Metadata = {
  title: "Poketmon",
  description: "Show Poketmon List",
};

function RootLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default RootLayout;
