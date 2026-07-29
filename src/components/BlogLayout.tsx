import "@/app/globals.css";
import "@/app/essay.css";

export const BlogLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="paper relative min-h-svh text-[#14110d]">
      <div className="relative mx-auto max-w-[1040px] px-[26px] py-10 md:pb-[84px] md:pl-[72px] md:pr-[60px] md:pt-11">
        <div className="essay-body relative text-[16px] leading-relaxed md:pr-[204px]">
          {children}
        </div>
      </div>
    </main>
  );
};
