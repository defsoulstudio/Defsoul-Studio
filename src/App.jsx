import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Layers,
  MonitorSmartphone,
  Palette,
  Rocket,
  Zap,
  MessageCircle,
  ExternalLink,
  Sparkles,
} from "lucide-react";

import logo from "./assets/logo.png";
import jrImg from "./assets/jr.png";
import adegaImg from "./assets/adega.png";
import academiaImg from "./assets/academia.png";

function Button({ children, className = "", ...props }) {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

const whatsappUrl =
  "https://wa.me/5512981462722?text=Olá,%20vim%20pelo%20portfólio%20da%20Defsoul%20Studio%20e%20quero%20fazer%20um%20orçamento.";

const projects = [
  {
    title: "JR New Concept Detail",
    tag: "Estética Automotiva",
    description:
      "Landing page premium para estética automotiva, com visual moderno, responsivo e foco em conversão.",
    url: "https://jr-new-concept-detail.vercel.app/",
    image: jrImg,
  },
  {
    title: "Adega Lá Prado",
    tag: "Adega / Delivery",
    description:
      "Site moderno para adega com identidade jovem, visual marcante e chamada direta para o cliente.",
    url: "https://adega-la-prado.vercel.app/",
    image: adegaImg,
  },
  {
    title: "Academia",
    tag: "Fitness / Treinos",
    description:
      "Projeto digital voltado para academia, com visual moderno e estrutura pensada para experiência mobile.",
    url: "https://gym-inky-nine.vercel.app/",
    image: academiaImg,
  },
];

const services = [
  {
    icon: MonitorSmartphone,
    title: "Sites Responsivos",
    text: "Experiência perfeita em qualquer dispositivo.",
  },
  {
    icon: Palette,
    title: "UI Design",
    text: "Visual premium e interfaces modernas.",
  },
  {
    icon: Code2,
    title: "Desenvolvimento",
    text: "Código limpo, rápido e otimizado.",
  },
  {
    icon: Zap,
    title: "Performance",
    text: "Sites leves e rápidos.",
  },
  {
    icon: Layers,
    title: "Landing Pages",
    text: "Páginas focadas em conversão.",
  },
  {
    icon: Rocket,
    title: "Publicação",
    text: "Deploy profissional no Vercel.",
  },
];

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
        <div className="absolute left-[-160px] top-[-120px] h-[500px] w-[500px] rounded-full bg-blue-600/30 blur-[150px]" />
        <div className="absolute right-[-160px] top-[260px] h-[480px] w-[480px] rounded-full bg-violet-700/30 blur-[160px]" />
        <div className="absolute bottom-[-180px] left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:34px_34px] opacity-40" />
      </div>

      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-4">
            <motion.img
              src={logo}
              alt="Defsoul Studio"
              className="h-14 w-14 rounded-full object-cover shadow-[0_0_35px_rgba(96,165,250,0.75)]"
              animate={{
                boxShadow: [
                  "0 0 25px rgba(59,130,246,0.5)",
                  "0 0 45px rgba(124,58,237,0.75)",
                  "0 0 25px rgba(59,130,246,0.5)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <div>
              <h1 className="text-xl font-black tracking-wide">
                DEF<span className="text-blue-400">SOUL</span>
              </h1>
              <p className="text-xs uppercase tracking-[0.35em] text-white/40">
                Studio
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/60 md:flex">
            <a href="#projetos" className="transition hover:text-blue-300">
              Projetos
            </a>
            <a href="#servicos" className="transition hover:text-blue-300">
              Serviços
            </a>
            <a href="#contato" className="transition hover:text-blue-300">
              Contato
            </a>
          </nav>

          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            <Button className="rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-6 py-3 text-sm font-bold text-white transition hover:scale-105 hover:shadow-[0_0_35px_rgba(124,58,237,0.55)]">
              Orçamento
            </Button>
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-28 pt-44">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-blue-300" />
            Experiências digitais premium
          </div>

          <motion.img
            src={logo}
            alt="Logo Defsoul Studio"
            className="mt-10 h-32 w-32 rounded-full object-cover shadow-[0_0_60px_rgba(124,58,237,0.65)]"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <h2 className="mt-8 max-w-5xl text-6xl font-black leading-[0.95] tracking-[-0.06em] md:text-8xl">
            Criamos experiências digitais modernas.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
            Sites premium, landing pages e interfaces modernas para marcas que
            querem se destacar no digital.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projetos">
              <Button className="rounded-2xl bg-white px-8 py-4 font-bold text-black transition hover:scale-105">
                Ver Projetos
              </Button>
            </a>

            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              <Button className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-bold text-white transition hover:border-violet-400/40 hover:bg-white/10 hover:shadow-[0_0_35px_rgba(124,58,237,0.35)]">
                Entrar em Contato
              </Button>
            </a>
          </div>

          <motion.div
            className="absolute right-0 top-20 hidden h-72 w-72 rounded-full border border-blue-500/30 md:block"
            animate={{ rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </section>

      <section id="projetos" className="mx-auto max-w-7xl px-6 py-24">
        <SectionTitle
          eyebrow="Projetos"
          title="Projetos modernos e visualmente marcantes."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-blue-500/30 hover:shadow-[0_0_80px_rgba(59,130,246,0.18)]">
                <CardContent>
                  <div className="relative h-64 overflow-hidden rounded-[2rem]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1"
                    />

                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-violet-500/10 opacity-0 transition duration-700 group-hover:opacity-100" />
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent" />

                    <div className="absolute bottom-6 left-6 right-6 z-10">
                      <p className="text-xs uppercase tracking-[0.3em] text-blue-300">
                        {project.tag}
                      </p>

                      <h3 className="mt-3 text-3xl font-black text-white drop-shadow-2xl">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="leading-7 text-white/60">
                      {project.description}
                    </p>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center font-medium text-blue-300 transition hover:text-white"
                    >
                      Ver projeto
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="servicos" className="mx-auto max-w-7xl px-6 py-24">
        <SectionTitle
          eyebrow="Serviços"
          title="Tudo que sua marca precisa."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-violet-500/30 hover:shadow-[0_0_45px_rgba(124,58,237,0.25)]"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 transition group-hover:scale-110">
                <service.icon className="h-6 w-6 text-blue-300" />
              </div>

              <h3 className="text-2xl font-bold">{service.title}</h3>

              <p className="mt-4 text-white/60">{service.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        id="contato"
        className="mx-auto max-w-5xl px-6 py-24 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-12 backdrop-blur-xl shadow-[0_0_70px_rgba(59,130,246,0.12)]"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-blue-300">
            Vamos criar?
          </p>

          <h2 className="mt-6 text-5xl font-black tracking-[-0.04em]">
            Seu negócio merece um visual premium.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-white/60">
            Entre em contato e vamos transformar sua ideia em um site moderno,
            bonito e profissional.
          </p>

          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            <Button className="mt-10 rounded-2xl bg-gradient-to-r from-blue-500 to-violet-600 px-8 py-4 font-bold text-white transition hover:scale-105 hover:shadow-[0_0_45px_rgba(124,58,237,0.5)]">
              <div className="flex items-center">
                <MessageCircle className="mr-2 h-5 w-5" />
                Chamar no WhatsApp
              </div>
            </Button>
          </a>
        </motion.div>
      </section>
    </main>
  );
}

function SectionTitle({ eyebrow, title }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm uppercase tracking-[0.45em] text-blue-300">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-5xl font-black tracking-[-0.05em]">
        {title}
      </h2>
    </div>
  );
}