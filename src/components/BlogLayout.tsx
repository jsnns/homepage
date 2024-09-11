import "@/app/globals.css";
import RootLayout from "@/app/layout";

export const BlogLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="flex flex-col p-8 md:p-24 max-w-4xl">{children}</div>
    </>
  );
};
