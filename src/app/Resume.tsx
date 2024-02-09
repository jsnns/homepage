import { ResumeItem, slugify } from "@/data/resume";
import Link from "next/link";

interface Props {
  resume: ResumeItem[];
}

export const Resume: React.FC<Props> = ({ resume }) => {
  return (
    <div className="flex flex-col">
      {resume.map((item) => (
        <ResumeLineItem {...item} key={item.jobTitle} />
      ))}
    </div>
  );
};

export const ResumeLineItem: React.FC<ResumeItem> = (props) => {
  return (
    <Link
      className="hover:-translate-x-4 ease-out transition-all"
      href={`/resume/${slugify(props.company)}`}
    >
      {props.company} <span className="opacity-25">{props.jobTitle}</span>
    </Link>
  );
};
