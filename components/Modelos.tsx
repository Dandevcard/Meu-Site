'use client'
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Modelos() {
  return (
    <section id="templates" className="w-full py-8 md:py-16 lg:py-24">
      <div className="px-4">
        <div className="flex flex-col  items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Modelos Disponíveis
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Confira os modelos de sites que posso personalizar para o seu
              negócio ou projeto pessoal.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              id: 1,
              title: "Landing Page Empresarial",
              description:
                "Template moderno para empresas que desejam mostrar o seu produto e marcar presença online.",
              image:
                "https://cdn.dribbble.com/userupload/42845938/file/original-a206a2dd5a134759e3bd4d4c310c0e7d.jpg?resize=752x&vertical=center",
              tags: [
                "Responsivo",
                "SEO Otimizado",
                "Formulário de Contato",
                "Design de Produtos",
              ],
              category: "Empresarial",
            },
            {
              id: 2,
              title: "E-commerce Profissional",
              description:
                "Template de e-commerce com design limpo e foco na experiência do usuário e conversão.",
              image:
                "https://cdn.dribbble.com/userupload/9643919/file/original-964e7c7ed9c77cfa90cf565645804613.png?resize=752x&vertical=center",
              tags: [
                "Carrinho de Compras",
                "Pagamentos",
                "Catálogo de Produtos",
              ],
              category: "E-commerce",
            },
            {
              id: 3,
              title: "Blog Profissional",
              description:
                "Template para blog com foco em legibilidade e compartilhamento em redes sociais.",
              image:
                "https://cdn.dribbble.com/userupload/16522312/file/original-a7493b0ffb9ec65ba57c8f56eb2570af.jpg?resize=752x&vertical=center",
              tags: ["Categorias", "Comentários", "Newsletter"],
              category: "Blog",
            },
            {
              id: 4,
              title: "Portfólio Criativo",
              description:
                "Template para profissionais criativos exibirem seus trabalhos de forma elegante.",
              image:
                "https://cdn.dribbble.com/userupload/19152480/file/original-debbeb577dd3bcd7cb4c19c6b7ba72dd.png?resize=752x588&vertical=center",
              tags: ["Galeria", "Animações", "Contato"],
              category: "Portfólio",
            },
            {
              id: 5,
              title: "Dashboard Administrativo",
              description:
                "Template de painel administrativo com múltiplos gráficos e visualizações de dados.",
              image:
                "https://cdn.dribbble.com/userupload/16702253/file/original-760d91a1d7e30545670b8aa497e88396.jpg?format=webp&resize=400x300&vertical=center",
              tags: ["Gráficos", "Tabelas", "Relatórios"],
              category: "Administrativo",
            },
            {
              id: 6,
              title: "Site para Restaurante",
              description:
                "Template para restaurantes com cardápio online, reservas e informações de contato.",
              image:
                "https://cdn.dribbble.com/userupload/13121328/file/original-bbe11a132a6443c75c01594424494de4.png?resize=1024x768&vertical=center",
              tags: ["Cardápio", "Reservas", "Localização"],
              category: "Restaurante",
            },
          ].map((template, index) => (
            <motion.div
              key={template.id}
              className="overflow-hidden flex flex-col"
              initial={{
                opacity: 0,
                x: index % 3 === 0 ? -100 : index % 3 === 2 ? 100 : 0,
                y: index % 3 === 1 ? -100 : 0,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.1 * index,
              }}
            >
              <Card className="overflow-hidden flex flex-col md:h-[440px]">
                <div className="aspect-video relative">
                  <Image
                    src={template.image || "/placeholder.svg"}
                    alt={template.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
                    {template.category}
                  </div>
                </div>
                <CardContent className="p-4 flex flex-col flex-1">
                  <h3 className="font-semibold text-xl mb-2">{template.title}</h3>
                  <p className="text-sm text-gray-500 mb-4 text-justify">{template.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {template.tags.map((tag, index) => (
                      <span key={index} className="bg-black text-primary text-xs px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <a href="#contact">
                      <Button className="w-full">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Fale comigo para personalizar
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
