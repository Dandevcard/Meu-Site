"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_5j43rmw", // <- coloque aqui seu service ID
        "template_k8x6q7o", // <- coloque aqui seu template ID
        formRef.current,
        "aXIlMIHnqX2eQDqON" // <- coloque aqui sua public key
      )
      .then(
        () => {
          alert("Mensagem enviada com sucesso!");
          formRef.current?.reset();
        },
        (error) => {
          console.error("Erro ao enviar:", error);
          alert("Houve um erro ao enviar sua mensagem. Tente novamente.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="container px-2 py-12 md:px-6 md:py-24 bg-palette-beige/30"
    >
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Entre em Contato
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Tem um projeto em mente? Vamos conversar sobre como posso ajudar a
            torná-lo realidade.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-2">
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Envie uma mensagem</CardTitle>
              <CardDescription>
                Preencha o formulário abaixo e entrarei em contato o mais breve
                possível.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Seu nome completo"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu-email@exemplo.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Assunto da mensagem"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Descreva seu projeto ou dúvida..."
                    className="min-h-[150px]"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>Informações de Contato</CardTitle>
              <CardDescription>
                Você também pode entrar em contato diretamente através dos
                canais abaixo.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Daniel.dev.cardoso@gmail.com
                  </p>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=daniel.dev.cardoso@gmail.com&su=Contato%20via%20portfólio&body=Olá%20Daniel%2C%20gostaria%20de%20falar%20sobre..."
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-primary hover:underline mt-1 inline-block"
                  >
                    Enviar email
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Telefone</h3>
                  <p className="text-sm text-gray-500 mt-1">(69) 99249-7814</p>
                  <a
                    href="tel:+5569992497814"
                    className="text-sm text-primary hover:underline mt-1 inline-block"
                  >
                    Ligar agora
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MessageSquare className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">WhatsApp</h3>
                  <p className="text-sm text-gray-500 mt-1">(69) 99249-7814</p>
                  <a
                    href="https://wa.me/5569992497814"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-primary hover:underline mt-1 inline-block"
                  >
                    Conversar no WhatsApp
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t">
                <h3 className="font-medium mb-4">Redes Sociais</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Dandevcard"
                    target="_blank"
                    className="bg-primary hover:bg-primary/80 p-2 rounded-full"
                    rel="noreferrer"
                  >
                    <Github />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/daniel-cardoso-de-loiola-799a97300/"
                    target="_blank"
                    className="bg-primary hover:bg-primary/80 p-2 rounded-full"
                    rel="noreferrer"
                  >
                    <Linkedin />
                  </a>

                  <a
                    href="https://www.instagram.com/daniel_kard/"
                    target="_blank"
                    className="bg-primary hover:bg-primary/80 p-2 rounded-full"
                    rel="noreferrer"
                  >
                    <Instagram />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
