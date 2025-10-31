"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Home() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f10] via-[#0d0d0e] to-black text-zinc-100 font-[Inter] selection:bg-cyan-500/30 transition-all duration-300">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-black/40 backdrop-blur-md border-b border-zinc-800">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Er. Vishal Parmar
        </h1>
        <div className="hidden sm:flex items-center gap-6 text-sm md:text-base font-medium">
          {["About", "Experience", "Portfolio", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-zinc-300 hover:text-cyan-400 transition"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[90vh] text-center px-6">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 blur-3xl opacity-25 animate-pulse"></div>
          <Image
            src="/profile.png"
            alt="Profile"
            width={160}
            height={160}
            className="relative rounded-full border-4 border-zinc-700 shadow-lg mb-6 object-cover"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 leading-tight">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Er. Vishal Parmar
          </span>
        </h1>
        <p className="text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed">
          A <span className="text-cyan-400 font-semibold">Full Stack Web Developer</span> crafting elegant,
          scalable web experiences using{" "}
          <span className="text-blue-400 font-semibold">
            Node.js, Next.js, NestJS, MongoDB, MySQL, and PostgreSQL
          </span>.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-3 text-black font-semibold shadow-lg hover:opacity-90 transition"
          >
            Contact Me
          </a>
          <a
            href="#portfolio"
            className="rounded-full border border-cyan-400 px-8 py-3 text-cyan-400 font-semibold hover:bg-cyan-400/10 transition"
          >
            View Work
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 md:px-12 py-20 max-w-4xl mx-auto text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-cyan-400 text-center">
          About Me
        </h2>
        <p className="text-lg text-zinc-400 leading-8">
          I’m a passionate developer with over{" "}
          <span className="text-cyan-400 font-semibold">3 years of experience</span>{" "}
          in building high-performance web apps. I focus on clean code, modern
          UI, and exceptional user experience. I love solving complex problems
          and creating impactful digital products.
        </p>
      </section>

      {/* Experience */}
      <section id="experience" className="px-6 md:px-12 py-20 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center text-cyan-400">
            Experience
          </h2>
          <div className="space-y-8">
            {[
              {
                title: "Nexios Technologies LLP - Full Stack Developer",
                desc: "Developed multiple production-grade web apps using Next.js, Angular, and Node.js with performance and scalability in focus.",
              },
              {
                title: "Bytesved Technologies - Full Stack Developer",
                desc: "Built robust APIs with NestJS, MongoDB, MySQL, and PostgreSQL, optimizing queries and system performance.",
              },
            ].map((job, i) => (
              <div
                key={i}
                className="bg-zinc-900/60 p-6 md:p-8 rounded-xl border border-zinc-800 hover:border-cyan-400/40 transition"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-2">
                  {job.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">{job.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="px-6 md:px-10 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-cyan-400">
          Portfolio
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Estipal Auction Platform (Api)", desc: "A robust backend built with Node.js, Express, and MySQL to power real-time online auctions. Designed for scalability, secure bidding, and lightning-fast data handling with a clean API architecture.", img: "/ESTIPAL.png" },
            { title: "Vishalji.in (E-commerce API)", desc: "A secure and scalable e-commerce backend built with Node.js, Express, and MySQL, integrated with Razorpay for seamless online payments and smooth order management.", img: "/VISHALJI.png" },
            { title: "Coupinos (Fullstack)", desc: "A full-stack web application built with Node.js, Angular, and MongoDB, featuring a RESTful API, secure authentication, and dynamic user interface for a smooth shopping experience.", img: "/COUPINO.png" },
            { title: "Coupinos App (Api)", desc: "A powerful backend API for the Coupinos mobile app, developed using Node.js and MongoDB, offering secure authentication, task handling, and smooth data synchronization.", img: "/COUPINO_APP.png" },
            { title: "Abzorb (Frontend)", desc: "A responsive risk and employee management dashboard built with Angular, offering real-time analytics, data visualization, and seamless integration with the backend API.", img: "/ABZORB.png" },
            { title: "kennedys (Frontend)", desc: "A comprehensive risk and employee management dashboard built with Angular, offering real-time reporting, performance tracking, and smart analytics visualization.", img: "/kennedy1.png" },
            { title: "Uegcl (Frontend)", desc: "An advanced employee and risk management platform developed with Angular, featuring interactive analytics, secure data handling, and responsive UI design.", img: "/uegcl.png" },
            { title: "Zaverchand Meghani App (Fullstack)", desc: "A fullstack mobile application on the famous gujarati literature book built with Node.js, MongoDB, and React Native.", img: "/ZAVERCHAND MEGHANI APP.png" },
            { title: "History Of Rajasthan App (Fullstack)", desc: "A fullstack mobile application based on the famous 'History of Rajasthan' book, built with Node.js, MongoDB, and React Native.", img: "/hor.png" },
            // { title: "Portfolio CMS", desc: "Custom headless CMS built with Node.js, MongoDB, and Admin Panel integration.", img: "/projects/cms.jpg" },
          ].map((proj, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10 transition"
            >
              <div className="overflow-hidden aspect-video">
                <Image
                  src={proj.img}
                  alt={proj.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-cyan-300 group-hover:text-cyan-400 transition">
                  {proj.title}
                </h3>
                <p className="text-zinc-400 mt-2 text-sm">{proj.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-20 bg-gradient-to-b from-zinc-950 to-black text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-cyan-400">
          Contact
        </h2>
        <p className="text-zinc-400 mb-8 text-base md:text-lg">
          Let’s collaborate or discuss new opportunities.
        </p>
        <div className="flex justify-center gap-8 text-3xl">
          <a href="mailto:vishaljinode@gmail.com" className="hover:text-cyan-400 transition">
            <FaEnvelope />
          </a>
          <a href="tel:+919664720473" className="hover:text-cyan-400 transition">
            <FaPhone />
          </a>
          <a href="https://github.com/vishalji" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/vishalji-parmar-351317b4" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
            <FaLinkedin />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-zinc-600 border-t border-zinc-800">
        © {new Date().getFullYear()}   Er. Vishal Parmar. All rights reserved.
      </footer>
    </div>
  );
}
