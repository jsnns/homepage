import { RESUME, pageForSlug } from "@/data/resume";
import { DateTime, DateTimeFormatOptions } from "luxon";
import type { Metadata } from "next";
import { BulletList } from "./BulletList";
import { ResumeShortcuts } from "./ResumeShortcuts";

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
    <div className="p-8 md:p-24 flex flex-col gap-12">
      <ResumeShortcuts currentResumeItem={params.company} />
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl">
          {company.jobTitle} at {company.company}
        </h1>
        <p className="">
          {company.startDate.toLocaleString(dateStyle)} —{" "}
          {company.endDate?.toLocaleString(dateStyle) || "Present"} (
          {duration.toFormat("y 'years and' M 'months'")})
        </p>
      </div>

      {company.description && (
        <p className="max-w-3xl">{company.description}</p>
      )}

      {/* {company.bullets && (
        <div className="max-w-3xl">
          <BulletList bullets={company.bullets} />
        </div>
      )} */}
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
