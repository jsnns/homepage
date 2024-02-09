import { RESUME, pageForSlug } from "@/data/resume";
import { DateTime, DateTimeFormatOptions } from "luxon";
import { ArrowRight } from "react-feather";

export default function Page({ params }: { params: { company: string } }) {
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
    </div>
  );
}
