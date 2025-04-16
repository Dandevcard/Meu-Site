"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, Database, Globe, Palette, Server } from "lucide-react";

export default function Sobre() {
  return (
    <section
      id="about"
      className="container  pb-10 px-6 pt-8 lg:px-6 mx-auto"
    >
      <div className="flex lg:flex-row flex-col justify-center gap-20 md:mt-8 items-center">
        {/* Texto com animação vindo da esquerda */}
        <motion.div
          className="w-full "
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Sobre Mim
          </h2>
          <p className="mt-4 text-muted-foreground text-justify md:text-xl">
            Sou um desenvolvedor full stack apaixonado por criar experiências
            web modernas e intuitivas. Com mais de 2 anos de experiência no
            desenvolvimento de aplicações web, tenho trabalhado com as
            tecnologias mais recentes para entregar soluções de alta qualidade.
          </p>
          <p className="mt-4 text-muted-foreground text-justify md:text-xl">
            Minha jornada na programação começou com um primeiro sonho de
            construir um site, queria fazer algo que fosse meu e então comecei a
            trilhar a minha jornada. Desde então, tenho me dedicado a aprimorar
            minhas habilidades e conhecimentos para oferecer as melhores
            soluções aos meus clientes.
          </p>
          <p className="mt-4 text-muted-foreground text-justify md:text-xl">
            Quando não estou codando, gosto de muito de cantar e tocar meus
            instrumentos, gosto das atividades em ar-livre, ver as paisagens,
            sentir a brisa do vento. Acredito que essas atividades me ajudam a
            manter a criatividade e a perspectiva necessárias para resolver
            problemas complexos.
          </p>
        </motion.div>

        {/* Imagem com animação vindo da direita */}
        <motion.div
          className="relative aspect-square lg:mt-14 w-full max-w-[360px] md:w-[400px] md:h-[400px] overflow-hidden rounded-xl border-2 border-primary"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src="/img-2.jfif"
            alt="Foto de perfil"
            fill
            className="object-cover object-center "
          />
        </motion.div>
      </div>

      {/* Seção de Experiência */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-primary ">
          Experiência
        </h2>
        <div className="mt-6 grid gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Desenvolvedor Front-end</CardTitle>
                <CardDescription>ColabDevs • 2024 - Presente</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground dark:text-gray-400 text-justify">
                  Desenvolvimento de aplicações web utilizando React, Next.js e
                  Node.js. Implementação de interfaces responsivas com Tailwind
                  CSS e integração com APIs RESTful.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Desenvolvedor Front-end Jr</CardTitle>
                <CardDescription>PetLove • 2023 - 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground dark:text-gray-400 text-justify">
                  Criação de interfaces de usuário responsivas e acessíveis
                  utilizando HTML, CSS e JavaScript. Implementação de designs
                  utilizando bibliotecas como React e frameworks CSS.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Seção de Tecnologias */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-primary">
          Tecnologias
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Globe className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Front-end</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground dark:text-gray-400">
                  <li>React / Next.js</li>
                  <li>HTML5 / CSS3</li>
                  <li>Tailwind CSS</li>
                  <li>JavaScript / TypeScript</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Server className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Back-end</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground dark:text-gray-400">
                  <li>Node.js</li>
                  <li>API RESTful</li>
                  <li>Autenticação JWT</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Database className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Banco de Dados</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground dark:text-gray-400">
                  <li>PostgreSQL</li>
                  <li>Prisma ORM</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Palette className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Design</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground dark:text-gray-400">
                  <li>Figma</li>
                  <li>UI/UX Design</li>
                  <li>Responsive Design</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Code className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Outros</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground dark:text-gray-400">
                  <li>Git / GitHub</li>
                  <li>Docker</li>
                  <li>Azure Devops</li>
                  <li>Testes Automatizados</li>
                  <li>Metodologias Ágeis / Scrum </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
