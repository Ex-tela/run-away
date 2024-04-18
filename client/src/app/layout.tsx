import type {Metadata} from "next";
import "./globals.css";
import DarkModeToggleLayout from "@/app/darkModeToggleLayout";

export const metadata: Metadata = {
  title: "RUN AWAY!!",
  description: "",
};

export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <DarkModeToggleLayout>
        {children}
      </DarkModeToggleLayout>
  );
}
