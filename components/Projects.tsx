"use client"; // Garantir que o código seja executado no cliente

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Github } from "lucide-react";
import { Button } from "./ui/button";

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full py-8 md:py-16 lg:py-24 bg-palette-beige/30"
    >
      <div className="px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center ">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meus Projetos
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Confira alguns dos projetos que desenvolvi utilizando as
              tecnologias mais modernas do mercado.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              id: 1,
              title: "Oss - serviços",
              description:
                "Um Site para uma empresa que cuida da parte de gestão de pessoas, Perfomance e coach empresarial",
              image: "/oss-servicos.png",
              tags: ["Next.js", "React", "Tailwind CSS", "Prisma Orm"],
              liveUrl: "https://www.ossoficial.com/",
              githubUrl: "https://github.com/Dandevcard/oss-servicos",
            },
            {
              id: 2,
              title: "Site ColabDevs",
              description: "Construi o site da empresa que trabalhei",
              image: "/colabdevs.png",
              tags: [
                "Next.js",
                "Dark-Mode",
                "Tailwind CSS",
                "Shadcn-ui",
                "Prisma",
              ],
              liveUrl: "https://www.colabdevs.com.br/",
              githubUrl: "https://github.com/Dandevcard/Site-Colab",
            },
            {
              id: 3,
              title: "React Notes",
              description:
                "Aplicativo de Gerenciamento de notas, com sistema de login e cadatros, atividades gerenciadas dentro da aplicação",
              image: "react-notes.png",
              tags: ["React", "Styled-Componets", "Vercel", "React - Router"],
              liveUrl: "https://github.com/Dandevcard/RoketNotes_Styles",
              githubUrl: "https://github.com/Dandevcard/RoketNotes_Styles",
            },
            {
              id: 4,
              title: "NLW - Connect",
              description: "Projeto realizado junto com a RocketSeat",
              image: "/nlw-connect.png",
              tags: ["Next", "Biome", "Tailwind CSS", "Node.js"],
              liveUrl: "https://github.com/Dandevcard/nlw-connect",
              githubUrl: "https://github.com/Dandevcard/nlw-connect",
            },
            {
              id: 5,
              title: "KanBan de Tarefas",
              description:
                "Aplicativo para gerenciamento de tarefas com recursos de arrastar e soltar, categorias e lembretes.",
              image: "/kan-ban.png",
              tags: ["React", "TypeScript", "Tailwind CSS", "Banco de dados"],
              liveUrl: "https://github.com/Dandevcard/kan-ban-react-ts",
              githubUrl: "https://github.com/Dandevcard/kan-ban-react-ts",
            },
            {
              id: 6,
              title: "Api de Filmes",
              description:
                "Plataforma de filmes com pesquisa, sistema de filtro e paginação.",
              image: "/api-filmes.png",
              tags: ["React", "Node.js", "Express", "MongoDB", "AWS S3"],
              liveUrl: "#",
              githubUrl: "#",
            },
          ].map((project, index) => (
            <motion.div
              key={project.id}
              className="overflow-hidden bg-white rounded-md border md:min-w-[330px] md:h-[470px] flex flex-col"
              initial={{
                opacity: 0,
                x: index % 3 === 0 ? -100 : index % 3 === 2 ? 100 : 0,
                y: index % 3 === 1 ? -100 : 0,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              whileHover={{ scale: 1.09 }} // Aumenta o tamanho ao passar o mouse
              transition={{
                duration: 0.3,
                ease: "easeOut",
                delay: 0.1 * index,
              }}
            >
              <div className="aspect-video relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <CardContent className="p-4 flex flex-col flex-1">
                <div>
                  <h3 className="font-semibold text-xl mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-black text-primary text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-auto pt-2">
                  <Link href={project.liveUrl} target="_blank">
                    <Button variant="outline" size="sm" className="bg-primary">
                      Ver Site
                    </Button>
                  </Link>
                  <Link href={project.githubUrl} target="_blank">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white text-pretty"
                    >
                      <Github className="mr-1 h-4 w-4" />
                      Código
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
