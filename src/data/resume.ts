import { DateTime } from "luxon";

export interface ResumeItem {
  company: string;
  jobTitle: string;
  location: string;
  startDate: DateTime;
  endDate?: DateTime;
  description: string;
  techStack: string[];
}

const Pluto: ResumeItem = {
  jobTitle: "Founder and CEO",
  company: "Pluto",
  location: "San Francisco Bay Area",
  startDate: DateTime.fromISO("2021-12-01"),
  description: "",
  techStack: ["React", "Python", "Kubernetes", "Digial Ocean", "OpenAI"],
};

const NVIDIA: ResumeItem = {
  jobTitle: "Technical Lead",
  company: "NVIDIA",
  location: "Santa Clara County, California, United States",
  startDate: DateTime.fromISO("2020-09-01"),
  endDate: DateTime.fromISO("2021-12-01"),
  description: "",
  techStack: [],
};

const BridgewaterAssociates: ResumeItem = {
  jobTitle: "Software Engineer",
  company: "Bridgewater Associates",
  location: "Westport, CT",
  startDate: DateTime.fromISO("2018-07-01"),
  endDate: DateTime.fromISO("2019-11-01"),
  description: "",
  techStack: [],
};

const MadMobile: ResumeItem = {
  jobTitle: "Software Engineer",
  company: "Mad Mobile",
  location: "Tampa/St. Petersburg, Florida Area",
  startDate: DateTime.fromISO("2017-06-01"),
  endDate: DateTime.fromISO("2018-06-01"),
  description: "",
  techStack: ["React", "Node.js"],
};

const SentinelSix: ResumeItem = {
  jobTitle: "Jr. Software Engineer",
  company: "SentinelSix",
  location: "Columbia, South Carolina",
  startDate: DateTime.fromISO("2017-06-01"),
  endDate: DateTime.fromISO("2017-10-01"),
  description: "",
  techStack: [],
};

const TCubeSolutions: ResumeItem = {
  jobTitle: "Jr. Software Engineer",
  company: "TCube Solutions",
  location: "Columbia SC",
  startDate: DateTime.fromISO("2016-04-01"),
  endDate: DateTime.fromISO("2017-06-01"),
  description: "",
  techStack: [],
};

export const RESUME = [
  Pluto,
  NVIDIA,
  BridgewaterAssociates,
  MadMobile,
  SentinelSix,
  TCubeSolutions,
];

export const slugify = (company: string) =>
  company.toLowerCase().replace(" ", "-");

export const pageForSlug = (slug: string, resume: ResumeItem[]) =>
  resume.find((item) => slugify(item.company) === slug);
