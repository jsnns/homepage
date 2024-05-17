import { Metadata } from "next";
import React from "react";
import { Age } from "./Age";

const Pg: React.FC<{ text: string }> = ({ text }) => {
  return <p>{text}</p>;
};

const Header: React.FC<{ text: string }> = ({ text }) => {
  return <h2 className="text-xl font-light opacity-75">{text}</h2>;
};

const Subheader: React.FC<{ text: string }> = ({ text }) => {
  return <h2 className="text-lg font-light opacity-50">{text}</h2>;
};

const Section: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="flex flex-col gap-2 my-2">{children}</div>;
};

const Bullets: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ul className="list-disc ml-8">{children}</ul>;
};

export default function HowToWorkWithMePage() {
  return (
    <div className="p-8 md:p-24 flex flex-col gap-16 max-w-5xl">
      <Section>
        <p className="text-xs opacity-25">
          A living document. Last updated April 1st, 2024
        </p>
        <h1 className="text-3xl opacity-50">How to Work with Jacob</h1>
        <p>
          👋 Hey there! I&apos;m Jacob a <Age /> tech founder. I care a lot
          about building impactful and beautiful products that change
          people&apos;s lives in a positive way. I wanted to share a bit about
          my background and how I like to work.
        </p>
      </Section>

      <Section>
        <Header text="My Story" />

        <Section>
          <Subheader text="First taste of building products" />

          <Pg text="I first learned to code in 3rd grade, teaching myself PHP. From there, I was hooked. I wrote code every single day through high school. By my sophomore year of college, I had landed my first full-time job at a local startup." />
          <Pg text="In 2015, ahead of the ARKit release, I founded an AR for education startup. It was an incredible learning experience." />
        </Section>

        <Section>
          <Subheader text="Building professionally" />

          <Pg text="My junior year took an unexpected turn when Bridgewater Associates reached out and asked me to come work for them. I moved from my small hometown in South Carolina to Westport, Connecticut, where I had the privilege of learning from some of the smartest people I've ever met." />
          <Pg text="But my founder itch never went away, so I made the move to San Francisco and joined a tiny startup. It was there that I had my first major disagreement with a CEO. I called him a moron for wanting to triple our manufacturing price for only a 20% reduction, especially when our product was already a fraction of the size of our competitors. That disagreement led to me being fired." />
          <Pg text="Interviewing during COVID was a roller coaster. I received offers from Meta, Google, and Netflix, but all were rescinded during the hiring freeze. Later that year, I got offers from NVIDIA and Coinbase. I decided to join NVIDIA to lead a team working on publisher and game dev SDK tools at GeForce Now." />
        </Section>

        <Section>
          <Subheader text="Starting Pluto" />

          <Pg text="On the weekends, I started a project with my middle school best friend. Our goal was to manage our money the way Bridgewater manages their clients' money. We ran into countless problems along the way: API access to brokerage accounts, data processing, backtesting, knowledge sharing." />
          <Pg text="Those challenges led me to leave NVIDIA and start Pluto. We raised a pre-seed, then a seed round. We launched a few products that didn't gain traction, but then we found one that really resonated." />
          <Pg text="And that brings us to today!" />
        </Section>
      </Section>

      <Section>
        <Header text="How I Work" />
        <Section>
          <Subheader text="Communication" />
          <Pg text="I'll be straight with you: I'm not great at async communication. If I don't respond to your email, please ping me again. I much prefer face-to-face conversations whenever possible, even if it's just a quick sync." />
          <Pg text="I'm a firm believer in direct feedback. If you think I'm wrong about something, I want you to tell me. I'll always do the same for you. Disagreement and debate are healthy and necessary for any high-performing team." />
        </Section>
        <Section>
          <Subheader text="Decision Making" />
          <Pg text="I tend to be intuitive and meritocratic in my decision making. I put a lot of weight on good judgment and taste. When someone on my team demonstrates strong instincts, I'm happy to delegate most decision making to them." />
        </Section>
        <Section>
          <Subheader text="Leadership" />
          <Pg text="I strive to be a hands-on leader who is equally focused on strategy and execution. I believe in building small, extremely capable teams. I'm always eager for feedback on how I can improve as a leader and manager." />
        </Section>
      </Section>

      <Section>
        <Header text="Expectations" />
        <Section>
          <Section>
            <Subheader text="Here's what I expect from my colleagues:" />
            <Pg text="Consistently high-quality work" />
            <Pg text="Proactive, transparent communication (if you need to go heads down to focus, just let me know in advance, then blow me away with your output)" />
          </Section>
        </Section>

        <Section>
          <Subheader text="In return, here's what you can expect from me:" />
          <Pg text="Complete transparency on all fronts" />
          <Pg text="A commitment to teaching you everything I know and connecting you with others who can fill in my knowledge gaps (of which there are many)" />
        </Section>
      </Section>

      <Section>
        <Header text="Let's Connect" />
        <Pg text="Consider this a living document. I'll update it based on feedback from the people I work with. If we haven't already, I'd love to schedule a 1:1 to discuss this guide and how we can work together most effectively." />
        <Pg text="Feel free to reach out anytime. Let's build something great together!" />
      </Section>
    </div>
  );
}

export const metadata: Metadata = {
  title: "How to Work with Jacob",
  description: "A guide on how to effectively work with Jacob, a tech founder",
  // Add any other metadata properties you need
  openGraph: {
    title: "How to Work with Jacob",
    description:
      "A guide on how to effectively work with Jacob, a tech founder",
    type: "article",
    // Add any other og properties you need
  },
  twitter: {
    card: "summary",
    site: "@jsnnsa",
    creator: "@jsnnsa",
    title: "How to Work with Jacob",
    description:
      "A guide on how to effectively work with Jacob, a tech founder",
  },
  // Add any other metadata properties you need
};
