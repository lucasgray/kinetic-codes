"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import AnimatedSection from "@/components/AnimatedSection";
import TechBadge from "@/components/TechBadge";
import EngagementCard from "@/components/EngagementCard";
import TestimonialCard from "@/components/TestimonialCard";
import ContactForm from "@/components/ContactForm";
import TypewriterText from "@/components/TypewriterText";

const ParticleBackground = dynamic(
  () => import("@/components/ParticleBackground"),
  {ssr: false}
);

const techStack = [
  "React",
  "TypeScript",
  "Tailwind",
  "Node.js",
  "Modern PaaS",
  "PostgreSQL",
  "Redis",
  "MarTech",
  ".Net",
  "Kotlin",
  "Flutter",
  "React-Native",
  "Stripe"
];

const engagements = [
  {
    title: "Engineering Team Scale-up",
    challenge:
      "Startup growing from 2 to 12 engineers with no defined processes and a messy codebase",
    solution:
      "Established ways of working, PR review process, QA, system architecture, and software delivery process",
    impact:
      "Company scaled to 8-figure ARR, 100% engineer retention, and sustained code quality at scale",
  },
  {
    title: "Immersive Digital Experience",
    challenge:
      "Deliver an immersive app blending video transitions, animated backgrounds, and headless CMS—on a tight runway",
    solution:
      "Built end-to-end with Contentful, Cognito auth, and custom full-screen video transitions with animated color swirl backgrounds",
    impact:
      "Launched on time, bug-free, with smooth visual polish that delighted users",
  },
  {
    title: "Marketing Technology",
    challenge:
      "Healthcare company needed accurate conversion tracking while navigating strict privacy and compliance requirements",
    solution:
      "Implemented server-side tracking infrastructure, bypassing client-side limitations and ensuring HIPAA-compliant data flow",
    impact:
      "Full-funnel attribution visibility, improved ad spend efficiency, and zero compliance incidents",
  },
];

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Jane Smith",
    role: "CTO",
    company: "TechCorp",
  },
  {
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Michael Chen",
    role: "VP Engineering",
    company: "StartupCo",
  },
  {
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    name: "Sarah Johnson",
    role: "CEO",
    company: "GrowthLabs",
  },
];

export default function Home() {
  return (
    <>
      <ParticleBackground/>

      <main className="relative z-10">
        {/* Hero Section */}
        <section
          className="relative z-20 min-h-screen flex flex-col items-center justify-center px-6 text-center border-b border-muted/20 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl">
            <TypewriterText
              text="Technical Leader. Software Craftsman. Problem Solver."
              className="text-glow-cyan"
            />
          </h1>
          <p className="text-xl md:text-2xl text-muted max-w-2xl mb-10">
            Kinetic Code helps startups and scale-ups build reliable systems and
            high-performing engineering teams. Based in Madison, WI.
          </p>
          <div className="flex flex-row gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-neon-cyan text-background font-bold rounded-lg hover:shadow-[0_0_30px_var(--neon-cyan)] transition-all"
            >
              Get in Touch
            </a>
            <a
              href="https://cal.com/lucas-gray-zyglbi/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-neon-magenta/20 text-neon-magenta font-bold rounded-lg hover:bg-neon-magenta/40 transition-all duration-150"
            >
              View Calendar
            </a>
          </div>
        </section>

        {/* About Section */}
        <AnimatedSection
          className="py-24 px-6 bg-white text-background border-y border-gray-300 shadow-[inset_0_-20px_30px_-20px_rgba(0,0,0,0.2)]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              About
            </h2>
            <div className="grid md:grid-cols-[auto_1fr] gap-12 items-center mb-12 max-w-3xl mx-auto">
              <div className="flex justify-center">
                <div className="w-56 h-56 relative rounded-full overflow-hidden shadow-lg">
                  <Image
                    src="/lucas-color-pop.jpg"
                    alt="Lucas Gray"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div>
                <p className="text-lg text-background/70 leading-relaxed mb-6">
                  With almost 20 years building software products and leading engineering
                  teams, I bring deep technical expertise and practical leadership to
                  complex challenges. I specialize in system architecture, rapid prototyping,
                  and 0-to-1 scaling.
                </p>
                <p className="text-lg text-background/70 leading-relaxed">
                  I work as a player-coach team lead, fractional principal engineer, or technical advisor—embedded
                  with your team for as long as you need.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {techStack.map((tech, index) => (
                <TechBadge key={tech} name={tech} index={index}/>
              ))}
            </div>

            <p className="text-center">
              <a
                href="https://lucasegray.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 hover:text-cyan-700 hover:underline transition-all"
              >
                See my personal projects →
              </a>
            </p>
          </div>
        </AnimatedSection>

        {/* Engagements Section */}
        <AnimatedSection
          className="py-24 px-6 bg-foreground/[0.02] border-y border-muted/20 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Engagement Examples
            </h2>
            <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
              A sampling of challenges I&apos;ve helped teams solve
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {engagements.map((engagement, index) => (
                <EngagementCard key={engagement.title} {...engagement} index={index}/>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Why Kinetic Section */}
        <AnimatedSection
          className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-cyan-950 via-cyan-900 to-cyan-950 border-y border-cyan-800 shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
          {/* Hexagon pattern overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="hexagons" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(1)">
                <path
                  d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66ZM28 100L0 84L0 50L28 34L56 50L56 84L28 100Z"
                  fill="none"
                  stroke="rgba(0, 255, 255, 0.5)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)"/>
          </svg>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neon-cyan">
              Why Kinetic?
            </h2>
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
              Code in motion. Always evolving, never static. Building systems that anticipate change. Every ounce of
              energy directed towards the right solve, the first time.
            </p>
            <p className="text-xl md:text-2xl font-semibold text-neon-cyan border-t border-cyan-700/50 pt-6 mt-6">
              That&apos;s the kinetic way.
            </p>
          </div>
        </AnimatedSection>

        {/* Testimonials Section */}
        <AnimatedSection
          className="py-24 px-6 bg-white text-background border-y border-gray-300 shadow-[inset_0_-20px_30px_-20px_rgba(0,0,0,0.2)]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              What People Say
            </h2>
            <p className="text-background/70 text-center mb-12">
              From clients and colleagues I&apos;ve worked with
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={testimonial.name} {...testimonial} index={index}/>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection id="contact"
                         className="py-24 px-6 bg-foreground/[0.02] border-y border-muted/20 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Let&apos;s Talk
            </h2>
            <p className="text-muted text-center mb-12">
              Have a challenge? Let&apos;s discuss how I can help.
            </p>
            <ContactForm/>
          </div>
        </AnimatedSection>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-muted/10">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-muted text-sm">
              © {new Date().getFullYear()} Kinetic.codes. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="mailto:hello@kinetic.codes"
                className="text-muted hover:text-neon-cyan transition-colors"
              >
                Email
              </a>
              <a
                href="https://github.com/lucasgray"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-neon-cyan transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/lucas-gray-6169403/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-neon-cyan transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://lucasegray.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-neon-cyan transition-colors"
              >
                Blog
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
