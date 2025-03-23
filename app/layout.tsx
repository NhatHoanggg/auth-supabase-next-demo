import { AuthProvider } from "@/contexts/auth-provider";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Next.js App",
  icons: "/picture-logo.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head />
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
