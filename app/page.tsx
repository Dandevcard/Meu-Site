import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Code,
  Database,
  Download,
  Github,
  Globe,
  Linkedin,
  Mail,
  MessageSquare,
  Palette,
  Phone,
  Send,
  Server,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="container -mt-6 md:-mt-14 flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Home Section */}
        <section id="home" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className=" px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none">
                    Olá, eu sou <br />{" "}
                    <span className="text-primary">Daniel Cardoso</span>
                  </h1>
                  <p className="max-w-[600px] text-justify   text-gray-500 md:text-xl dark:text-gray-400">
                    Desenvolvedor Full Stack especializado em criar experiências
                    web modernas e responsivas com React, Next.js e Tailwind
                    CSS.
                  </p>
                  <p className="max-w-[600px] text-justify text-gray-500 md:text-xl dark:text-gray-400">
                    Nesse site você vai conhecer um pouco do meu trabalho. Vai
                    conhecer um pouco sobre mim, vai poder ver os projetos que
                    eu já tive a oportunidade de trabalhar, e também caso lhe
                    interesse apresento alguns modelos para voçê se inspirar na
                    hora de fazer seu projeto!
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[500px]:flex-row">
                  <a href="#projects">
                    <Button className="w-full min-[500px]:w-auto">
                      Ver Projetos
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <Link href="/curriculo-Daniel.pdf" target="_blank" download>
                    <Button
                      variant="outline"
                      className="w-full min-[500px]:w-auto"
                    >
                      Download CV
                      <Download className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <Link href="https://github.com/Dandevcard" target="_blank">
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-primary md:size-11"
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
                      className="bg-primary md:size-11"
                    >
                      <Linkedin className="h-5 w-5 text-white" />
                      <span className="sr-only  ">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="mailto:daniel.dev.cardoso@gmail.com">
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-primary md:size-11"
                    >
                      <Mail className="h-5 w-5 text-white" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center  md:ml-10 md:-mr-10">
                <div className="relative aspect-square overflow-hidden rounded-full border-4 border-primary w-[280px] h-[280px] md:w-[350px] md:h-[350px] bg-primary">
                  <Image
                    src="/img-1.png"
                    alt="Foto de perfil"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container px-4 py-12 md:px-6 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Sobre Mim
              </h2>
              <p className="mt-4 text-gray-500 text-justify  md:text-xl dark:text-gray-400">
                Sou um desenvolvedor full stack apaixonado por criar
                experiências web modernas e intuitivas. Com mais de 2 anos de
                experiência no desenvolvimento de aplicações web, tenho
                trabalhado com as tecnologias mais recentes para entregar
                soluções de alta qualidade.
              </p>
              <p className="mt-4 text-gray-500 text-justify md:text-xl dark:text-gray-400">
                Minha jornada na programação começou com um primeiro sonho de
                construir um site, queria fazer algo que fosse meu e então
                comecei a trilhar a minha jornada. Desde então, tenho me
                dedicado a aprimorar minhas habilidades e conhecimentos para
                oferecer as melhores soluções aos meus clientes.
              </p>
              <p className="mt-4 text-gray-500 text-justify md:text-xl dark:text-gray-400">
                Quando não estou codando, gosto de muito de cantar e tocar meus
                instrumentos, gosto das atividades em ar-liver, ver as
                paisagens, sentir a brisa do vento. Acredito que essas
                atividades me ajudam a manter a criatividade e a perspectiva
                necessárias para resolver problemas complexos.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative aspect-square overflow-hidden rounded-xl border-2 border-primary w-full max-w-[400px]">
                <Image
                  src="/img-2.jfif"
                  alt="Foto de perfil"
                  fill
                  className="object-cover object-center" 
                />
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Experiência
            </h2>
            <div className="mt-6 grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Desenvolvedor Front-end</CardTitle>
                  <CardDescription>ColabDevs • 2024 - Presente</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Desenvolvimento de aplicações web utilizando React, Next.js
                    e Node.js. Implementação de interfaces responsivas com
                    Tailwind CSS e integração com APIs RESTful.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Desenvolvedor Front-end Jr</CardTitle>
                  <CardDescription>PetLove • 2023 - 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Criação de interfaces de usuário responsivas e acessíveis
                    utilizando HTML, CSS e JavaScript. Implementação de designs
                    utilizando bibliotecas como React e frameworks CSS.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Tecnologias
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Globe className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Front-end</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-gray-500 dark:text-gray-400">
                    <li>React / Next.js</li>
                    <li>HTML5 / CSS3</li>
                    <li>Tailwind CSS</li>
                    <li>JavaScript / TypeScript</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Server className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Back-end</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-gray-500 dark:text-gray-400">
                    <li>Node.js</li>
                    <li>API RESTful</li>
                    <li>Autenticação JWT</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Database className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Banco de Dados</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-gray-500 dark:text-gray-400">
                    <li>PostgreSQL</li>
                    <li>Prisma ORM</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Palette className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Design</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-gray-500 dark:text-gray-400">
                    <li>Figma</li>
                    <li>UI/UX Design</li>
                    <li>Responsive Design</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Code className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Outros</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-gray-500 dark:text-gray-400">
                    <li>Git / GitHub</li>
                    <li>Docker</li>
                    <li>Azure Devops</li>
                    <li>Testes Automatizados</li>
                    <li>Metodologias Ágeis / Scrum </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="w-full py-12 md:py-24 lg:py-32 bg-palette-beige/30"
        >
          <div className=" px-4 ">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
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
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
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
                  tags: [
                    "React",
                    "Styled-Componets",
                    "Vercel",
                    "React - Router",
                  ],
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
                  title: "Aplicativo de Gerênciamento de Tarefas",
                  description:
                    "Aplicativo para gerenciamento de tarefas com recursos de arrastar e soltar, categorias e lembretes.",
                  image: "/kan-ban.png",
                  tags: [
                    "React",
                    "TypeScript",
                    "Tailwind CSS",
                    "Banco de dados",
                  ],
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
              ].map((project) => (
                <Card
                  key={project.id}
                  className="overflow-hidden md:min-w-[330px] md:h-[470px] flex flex-col"
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
                            className="bg-palette-blue/10 text-palette-blue text-xs px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Botões fixados na base com margem superior automática */}
                    <div className="flex items-center gap-2 mt-auto pt-2">
                      <Link href={project.liveUrl} target="_blank">
                        <Button variant="outline" size="sm">
                          Ver Site
                        </Button>
                      </Link>
                      <Link href={project.githubUrl} target="_blank">
                        <Button variant="outline" size="sm">
                          <Github className="mr-1 h-4 w-4" />
                          Código
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Templates Section */}
        <section
          id="templates"
          className="container px-4 py-12 md:px-6 md:py-24"
        >
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
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
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
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
                  "Desing de Produtos",
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
            ].map((template) => (
              <Card key={template.id} className="overflow-hidden flex flex-col">
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
                  <h3 className="font-semibold text-xl mb-2">
                    {template.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {template.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {template.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-palette-blue/10 text-palette-blue text-xs px-2 py-1 rounded-full"
                      >
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
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container px-4 py-12 md:px-6 md:py-24">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Entre em Contato
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Tem um projeto em mente? Vamos conversar sobre como posso ajudar
                a torná-lo realidade.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Envie uma mensagem</CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e entrarei em contato o mais
                  breve possível.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
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

            <Card>
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
                      href="mailto:seu-email@exemplo.com"
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
                    <p className="text-sm text-gray-500 mt-1">
                      (69) 99249-7814
                    </p>
                    <a
                      href="tel:+5500000000000"
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
                    <p className="text-sm text-gray-500 mt-1">
                      (69) 99249-7814
                    </p>
                    <a
                      href="https://wa.me/6999249-7814"
                      target="_blank"
                      className="text-sm text-primary hover:underline mt-1 inline-block"
                      rel="noreferrer"
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
                      className="bg-muted hover:bg-muted/80 p-2 rounded-full"
                      rel="noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/daniel-cardoso-de-loiola-799a97300/"
                      target="_blank"
                      className="bg-muted hover:bg-muted/80 p-2 rounded-full"
                      rel="noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    
                    <a
                      href="https://www.instagram.com/daniel_kard/"
                      target="_blank"
                      className="bg-muted hover:bg-muted/80 p-2 rounded-full"
                      rel="noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
