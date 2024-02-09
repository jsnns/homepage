import { DateTime } from "luxon";

export interface ResumeItem {
  company: string;
  jobTitle: string;
  location: string;
  startDate: DateTime;
  endDate?: DateTime;
  description: string;
  techStack: string[];
  bullets?: Bullet[];
}

export interface Bullet {
  text: string;
  subBullets?: Bullet[];
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

const Saleae: ResumeItem = {
  jobTitle: "Sr. Software Engineer",
  company: "Saleae",
  location: "South San Francisco, California, United States",
  startDate: DateTime.fromISO("2019-10-01"),
  endDate: DateTime.fromISO("2020-03-01"),
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
  bullets: [
    {
      text: "Insider Threat Investigation Toolset",
      subBullets: [
        {
          text: "Shipped a set of 3 investigation tools to mitigate insider threat attack vectors each included tie-ins to AWS infrastructure and a React/Typescript frontend",
        },
        {
          text: "Shipped multithreaded front end data processing pipelines for rendering graph data on an HTML5 Canvas with more than ten thousand nodes and twenty thousand edges",
        },
        {
          text: "Decreased staff training time by three days through wrapping complicated but powerful graph analysis tools into a user-friendly React user interface",
        },
      ],
    },
    {
      text: "Proxy Policy Configuration Engine",
      subBullets: [
        {
          text: "Mitigated risk for over 1,000 policy exception by integrating Bridgewater's proxy configuration engine with RSA Archer",
        },
        {
          text: "Built a proxy configuration engine that tracks over one thousand active policy exceptions in React and Golang",
        },
      ],
    },
    {
      text: "Security Infrastructure",
      subBullets: [
        {
          text: "Migrated a Docker build pipeline to Bazel for 80% smaller builds and reduced attack surface",
        },
        {
          text: "Improved critical infrastructure visibility by 90% though new tooling for packet capture",
        },
        {
          text: "Grew AWS Terraform adoption by 5x through education sessions and team demos",
        },
        {
          text: "Embedded static code analysis in over 100 CI/CD pipelines with SonarCloud",
        },
        {
          text: "Implemented Terraform-backed multi-availability-zone AWS infrastructure with RDS and Fargate to store and process terabytes of graph data",
        },
      ],
    },
  ],
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
  Saleae,
  BridgewaterAssociates,
  MadMobile,
  SentinelSix,
  TCubeSolutions,
];

export const slugify = (company: string) =>
  company.toLowerCase().replace(" ", "-");

export const pageForSlug = (slug: string, resume: ResumeItem[]) =>
  resume.find((item) => slugify(item.company) === slug);
