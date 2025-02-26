import Image from "next/image";

export default function Home() {
  return (
    <div 
      className="relative min-h-screen bg-gray-900 text-white"
      style={{ backgroundImage: "url('/background.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-2 bg-white shadow-md fixed w-full z-10">
        <div className="flex items-center">
          <Image src="/logo-preto.png" alt="IP6 Logo" width={50} height={50} />
          <span className="text-6xl font-bold text-gray-900 ml-20">IPSix</span>
        </div>
        <ul className="flex space-x-6 text-gray-800 items-center">
          <li className="hover:text-blue-600 cursor-pointer">E-Sports</li>
          <li className="hover:text-blue-600 cursor-pointer">Tecnologia</li>
          <li className="hover:text-blue-600 cursor-pointer">Games</li>
          <li className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">NOTÍCIAS</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-3xl md:text-5xl font-bold">Fique por dentro das últimas novidades em games e tecnologias</h2>
          <p className="text-lg mt-4 max-w-2xl">Rápido, preciso e sempre atualizado!</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10 mt-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
              <Image src="/logo-branco.png" alt="IP6 Logo" width={50} height={50} />
              <p className="mt-4">&copy; 2025 IP6. Todos os direitos reservados.</p>
            </div>
            <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
              <ul className="flex justify-center space-x-6">
                <li><a href="#" className="hover:text-blue-600">Home</a></li>
                <li><a href="#" className="hover:text-blue-600">Sobre</a></li>
                <li><a href="#" className="hover:text-blue-600">Serviços</a></li>
                <li><a href="#" className="hover:text-blue-600">Contato</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 text-center md:text-right">
              <ul className="flex justify-center md:justify-end space-x-6">
                <li><a href="#" className="hover:text-blue-600"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#" className="hover:text-blue-600"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#" className="hover:text-blue-600"><i className="fab fa-instagram"></i></a></li>
                <li><a href="#" className="hover:text-blue-600"><i className="fab fa-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>contato@ip6.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
