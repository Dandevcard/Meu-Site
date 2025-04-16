"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Eu() {
  return (
    <section
      id="home"
      className="w-full min-h-screen pt-24 md:pt-0 bg-background text-foreground py-16 md:py-24 lg:py-32 xl:py-48"
    >
      <div className="container px-4 md:px-0">
        <div className="flex flex-col md:flex-row items-center justify-around px-10 gap-12">
          {/* Texto com animações */}
          <motion.div
            className="flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }} // Garante que a animação só acontece quando 50% da div estiver na tela
          >
            <div className="space-y-4">
              <motion.h1
                className="text-3xl font-bold tracking-tight sm:text-5xl xl:text-7xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Olá, eu sou <br />
                <span className="text-primary">Daniel Cardoso</span>
              </motion.h1>

              <motion.p
                className="max-w-[600px] text-balance text-muted-foreground md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
              >
                Desenvolvedor Full Stack especializado em criar experiências web
                modernas e responsivas com React, Next.js e Tailwind CSS.
              </motion.p>

              <motion.p
                className="max-w-[600px] text-balance text-muted-foreground md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              >
                Nesse site você vai conhecer um pouco do meu trabalho. Vai
                conhecer um pouco sobre mim, ver os projetos que eu já tive a
                oportunidade de trabalhar, e também alguns modelos para você se
                inspirar na hora de fazer seu projeto!
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col gap-2 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            >
              <a href="#projects">
                <Button className="w-full sm:w-auto">
                  Ver Projetos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Link href="/curriculo-Daniel.pdf" target="_blank" download>
                <Button variant="outline" className="w-full sm:w-auto">
                  Download CV
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            >
              <Link href="https://github.com/Dandevcard" target="_blank">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Github className="h-5 w-5 text-white" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/daniel-cardoso-de-loiola-799a97300/"
                target="_blank"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Linkedin className="h-5 w-5 text-white" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:daniel.dev.cardoso@gmail.com">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Mail className="h-5 w-5 text-white" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Animação da imagem */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative aspect-square w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden border-4 border-primary bg-primary"
          >
            <Image
              src="/img-1.png"
              alt="Foto de perfil"
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
