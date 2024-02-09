import { RESUME, pageForSlug } from "@/data/resume";
import { DateTime, DateTimeFormatOptions } from "luxon";
import type { Metadata, ResolvingMetadata } from "next";
import { BulletList } from "./BulletList";

interface Props {
  params: { company: string };
  searchParams: URLSearchParams;
}

export default function Page({ params }: Props) {
  const company = pageForSlug(params.company, RESUME);

  if (!company) {
    return <div>Company not found</div>;
  }

  const dateStyle: DateTimeFormatOptions = { year: "numeric", month: "long" };
  const duration = (company.endDate || DateTime.now()).diff(company.startDate, [
    "years",
    "months",
  ]);

  return (
    <div className="p-8 md:p-24 flex flex-col gap-24">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-light opacity-50">
          {company.jobTitle} at {company.company}
        </h1>
        <p className="opacity-25">
          {company.startDate.toLocaleString(dateStyle)} —{" "}
          {company.endDate?.toLocaleString(dateStyle) || "Present"} (
          {duration.toFormat("y 'years and' M 'months'")})
        </p>
      </div>

      {company.bullets && (
        <div className="max-w-3xl">
          <BulletList bullets={company.bullets} />
        </div>
      )}
    </div>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const company = params.company;

  const companyInfo = pageForSlug(company, RESUME);

  return {
    title: `Jacob Sansbury — ${companyInfo?.jobTitle} at ${companyInfo?.company}`,
    description: companyInfo?.description,
  };
}
