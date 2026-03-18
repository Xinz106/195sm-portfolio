import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "195sm - AI Programmer & 3D Artist",
  description: "The Portfolio of 195sm",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>{`
          :root {
            color-scheme: dark;
          }
          body {
            background-color: #050505;
            color: #ffffff;
            margin: 0;
            padding: 0;
          }
        `}</style>
      </head>
      <body className="antialiased selection:bg-gray-700 selection:text-white bg-[#050505] text-white min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}