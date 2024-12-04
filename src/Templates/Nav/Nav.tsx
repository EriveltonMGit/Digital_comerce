import React, { useState, useRef, useEffect } from "react";
// IMPORT IMGS

// ICONS REACT
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BiSupport } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { SlLogin } from "react-icons/sl";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
// ------------------
import { RxHamburgerMenu } from "react-icons/rx";
import { SlScreenSmartphone } from "react-icons/sl";
import { LuMonitorDot } from "react-icons/lu";
import { SiOpensourcehardware } from "react-icons/si";
import { SiRepublicofgamers } from "react-icons/si";
import {
  MdLaptopMac,
  MdOutlineDevicesOther,
  MdOutlineWatch,
  MdTabletAndroid,
} from "react-icons/md";
// -------------------
import { BiSolidOffer } from "react-icons/bi";
import { MdNewReleases } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { MdWorkspacesFilled } from "react-icons/md";
import { FaShirt } from "react-icons/fa6";
import { BiSolidCoupon } from "react-icons/bi";
import { MdSell } from "react-icons/md";
import { MdContactMail } from "react-icons/md";
import { BsCameraVideo } from "react-icons/bs";
import { AiOutlineAudio } from "react-icons/ai";
import { FaPrint } from "react-icons/fa6";
// ----------------
import { GiDeliveryDrone, GiHamburgerMenu } from "react-icons/gi";
// IMPORT CSS
import "./Nav.css";
import MenuDevice from "../../Components/MenuDevice/MenuDevice";
import Favoritos from "../../Components/Favoritos/Favoritos";
import { Link } from "react-router-dom";
import products from "../../Components/products";

function Nav() {
  const [searchTerm, setSearchTerm] = useState<string>(""); // Termo de busca
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]); // Resultados filtrados
  const searchBarRef = useRef<HTMLDivElement>(null); // Ref para monitorar o clique fora da div de filtros
  // FUNÇAO PARA ABRIR O CARRINHO DE PRODUTOS
  const abrirCart = () => {
    const cartElement = document.getElementById("cart_model");
    if (cartElement) {
      cartElement.classList.toggle("show_cart");
    }
  };
  // FUNÇÃO PAR AABRIR O MENU DE OPCAO DEVICE
  const abrirMenuDevcie = () => {
    const menuElement = document.getElementById("menu_device");
    if (menuElement) {
      menuElement.classList.toggle("show_cart");
    }
  };
  // FUNÇÃO PARA ADICOAR AOS FAVORITOS SO MENSAGEM
  const abrirFavoritos = () => {
    const favoritosElement = document.getElementById("favoritosProdutos");
    if (favoritosElement) {
      favoritosElement.classList.toggle("show_cart");
    }
  };
  // FUNÇÃO PARA O FILTER DE PRODUTOS DO INPUT
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  // Função para fechar a div de filtros ao clicar fora dela
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target as Node)
      ) {
        setSearchTerm(""); // Limpa o termo de busca
        setFilteredProducts([]); // Limpa os resultados
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="nav_bar">
      {/* Conteúdo superior */}
      <main className="area_content">
        <div className="logo">
          <Link to="/">
            <img src="/img/icons/logo.webp" alt="Logo" />
          </Link>
        </div>

        {/* Barra de pesquisa */}
        <div ref={searchBarRef} className="search-container">
          <form className="search__bar" onSubmit={(e) => e.preventDefault()}>
            <input
              type="search"
              placeholder="Buscar Produtos..."
              className="search__input"
              value={searchTerm}
              onChange={handleSearch}
              required
            />
            <button type="submit" className="search__button">
              <HiMagnifyingGlass />
            </button>
          </form>

          {/* Lista de resultados */}
          {filteredProducts.length > 0 && (
            <div className="search-results">
              <ul>
                {filteredProducts.map((product) => (
                  <li key={product.id}>
                    <Link
                      to={`/product/${product.id}/${encodeURIComponent(
                        product.name
                      )}`}
                      onClick={() => setSearchTerm("")} // Limpa a busca ao clicar
                    >
                      <img src={product.image} alt={product.name} />
                      <span>{product.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Botões para dispositivos */}
        <div className="area-btn_device">
         
          <button className="btn_hamburguer" onClick={abrirMenuDevcie}>
            <GiHamburgerMenu />
          </button>
          <button className="carrinho_produtos_device" onClick={abrirCart}>
            <FiShoppingCart />
          </button>
        </div>

        <MenuDevice />

        {/* Botões de funcionalidades */}
        <div className="btn_group">
          <button>
            ATENDIMENTO <BiSupport />
          </button>
          <button>
            RASTREAR PEDIDO <TbTruckDelivery />
          </button>
          <button>
            ENTRAR/CADASTRE-SE
            <SlLogin />
          </button>
          <button className="carrinho_produtos" onClick={abrirCart}>
            <FiShoppingCart />
          </button>
          <button>
            <FaRegHeart id="favoritos" onClick={abrirFavoritos} />
          </button>
          <Favoritos />
        </div>
      </main>

      {/* Conteúdo inferior */}
      <main className="area_links">
        <main className="categories">
          <ul>
            <RxHamburgerMenu /> CATEGORIAS
            <div className="list_categorys">
              
                <li>
                  <a href="">
                    Smartphones <SlScreenSmartphone />
                  </a>
                </li>
                <li>
                  <a href="">
                    Monitores <LuMonitorDot />
                  </a>
                </li>
                <li>
                  <a href="">
                    Desempenho <SiOpensourcehardware />
                  </a>
                </li>
                <li>
                  <a href="">
                    Video Games <SiRepublicofgamers />
                  </a>
                </li>
                <li>
                  <a href="">
                    Outros... <MdOutlineDevicesOther />
                  </a>
                </li>
                <li>
                  <a href="">
                    Tablets <MdTabletAndroid />
                  </a>
                </li>
                <li>
                  <a href="">
                    Relógios Inteligentes <MdOutlineWatch />
                  </a>
                </li>
                <li>
                  <a href="">
                    Câmeras <BsCameraVideo />
                  </a>
                </li>
                <li>
                  <a href="">
                    Fones de Ouvido <AiOutlineAudio />
                  </a>
                </li>
                <li>
                  <a href="">
                    Drones <GiDeliveryDrone />
                  </a>
                </li>
                <li>
                  <a href="">
                    Notebooks <MdLaptopMac />
                  </a>
                </li>
                <li>
                  <a href="">
                    Impressoras <FaPrint />
                  </a>
                </li>
           
            </div>
          </ul>
        </main>

        <ul className="ul_links">
          <li>
            <Link to="/lancamentos">
              <MdNewReleases /> LANÇAMENTOS
            </Link>
          </li>
          <li>
            <Link to="/pcgamer">
              <FaLaptopCode /> PC GAMER
            </Link>
          </li>
          <li>
            <a href="">
              <MdWorkspacesFilled /> ACESSÓRIOS
            </a>
          </li>
          <li>
            <a href="">
              <BiSolidOffer /> OFERTAS
            </a>
          </li>
          <li>
            <a href="">
              <FaShirt /> MODA
            </a>
          </li>
          <li>
            <a href="">
              <BiSolidCoupon /> CUPONS
            </a>
          </li>
          <li>
            <a href="">
              <MdSell /> VENDER
            </a>
          </li>
          <li>
            <a href="">
              <MdContactMail /> CONTATO
            </a>
          </li>
        </ul>
      </main>
    </header>
  );
}

export default Nav;
