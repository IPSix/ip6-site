"use client"; // Adicione esta linha no topo do arquivo

import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; // Para o menu mobile

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar o menu mobile

  // Dados dos quadros dinâmicos
  const categories = [
    {
      title: "Tecnologia",
      description: "As últimas inovações e tendências.",
      link: "/artigos/tecnologia",
      image: "/tecnologia-box.jpg", // Adicione uma imagem para cada categoria
    },
    {
      title: "Games",
      description: "Tudo sobre os lançamentos e novidades.",
      link: "/artigos/games",
      image: "/games-box.jpg",
    },
    {
      title: "E-Sports",
      description: "Cobertura completa dos principais eventos.",
      link: "/artigos/esports",
      image: "/esports-box.jpg",
    },
    {
      title: "APPs",
      description: "Dicas e análises dos melhores aplicativos.",
      link: "/artigos/apps",
      image: "/app-box.jpg",
    },
  ];

  return (
    <div
      className="relative min-h-screen bg-gray-900 text-white"
      style={{
        backgroundImage: "url('/background3.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed', // Mantém o fundo fixo ao rolar
      }}
    >
      {/* Sobreposição escura sobre o background */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Navbar Modernizado */}
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo e Nome */}
          <div className="flex items-center">
            <Image src="/logo-ip6-preto.png" alt="IP6 Logo" width={50} height={50} />
            <span className="text-5xl font-bold text-gray-900 ml-9">IPSix</span>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/forum" className="text-gray-800 hover:text-blue-600 transition-colors duration-300">
              Fórum
            </Link>
            <Link href="/youtube" className="text-gray-800 hover:text-blue-600 transition-colors duration-300">
              YouTube
            </Link>
            <Link href="/artigos" className="text-gray-800 hover:text-blue-600 transition-colors duration-300">
              Artigos
            </Link>
            <Link
              href="/noticias"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              NOTÍCIAS
            </Link>
          </div>

          {/* Menu Mobile (Ícone de Hambúrguer) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Mobile (Dropdown) */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-6 py-4 space-y-4">
              <Link href="/forum" className="block text-gray-800 hover:text-blue-600">
                Fórum
              </Link>
              <Link href="/youtube" className="block text-gray-800 hover:text-blue-600">
                YouTube
              </Link>
              <Link href="/artigos" className="block text-gray-800 hover:text-blue-600">
                Artigos
              </Link>
              <Link
                href="/noticias"
                className="block bg-blue-600 text-white px-6 py-2 rounded-full text-center hover:bg-blue-700"
              >
                NOTÍCIAS
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section Refatorada */}
      <div className="relative w-full h-screen flex items-center justify-center z-10">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          {/* Quadros Dinâmicos */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link href={category.link} key={index}>
                <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                  <div className="relative h-40 mb-4">
                    <Image
                      src={category.image}
                      alt={category.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Modernizado */}
      <footer className="bg-gray-800 text-white py-12 mt-20 z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo e Descrição */}
            <div className="mb-6 md:mb-0">
              <Image src="/logo-ip6-branco.png" alt="IP6 Logo" width={50} height={50} />
              <p className="mt-4 text-gray-400">
                IPSix - Sua fonte de notícias sobre games, tecnologia e E-Sports.
              </p>
              <div className="flex space-x-4 mt-4">
                <Link href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </div>

            {/* Atalhos para Assuntos */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Assuntos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/artigos/esports" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
                    E-Sports
                  </Link>
                </li>
                <li>
                  <Link href="/artigos/tecnologia" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
                    Tecnologia
                  </Link>
                </li>
                <li>
                  <Link href="/artigos/games" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
                    Games
                  </Link>
                </li>
                <li>
                  <Link href="/artigos/lancamentos" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
                    Lançamentos
                  </Link>
                </li>
              </ul>
            </div>

            {/* Links Úteis */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/sobre" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="/contato" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
                    Contato
                  </Link>
                </li>
                <li>
                  <Link href="/politica-de-privacidade" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="/termos-de-uso" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
                    Termos de Uso
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Receba Novidades</h3>
              <p className="text-gray-400 mb-4">
                Inscreva-se para receber as últimas notícias diretamente no seu e-mail.
              </p>
              <form className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Inscrever-se
                </button>
              </form>
            </div>
          </div>

          {/* Direitos Autorais */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2025 IPSix. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}