import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FurniGo — Sewa lebih praktis untuk kehidupan anak kos",
  description: "Sewa furnitur dan elektronik berkualitas untuk anak kos di Jakarta Barat.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
