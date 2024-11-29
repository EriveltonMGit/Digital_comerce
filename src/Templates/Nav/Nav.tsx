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
import { MdOutlineDevicesOther } from "react-icons/md";
// -------------------
import { BiSolidOffer } from "react-icons/bi";
import { MdNewReleases } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { MdWorkspacesFilled } from "react-icons/md";
import { FaShirt } from "react-icons/fa6";
import { BiSolidCoupon } from "react-icons/bi";
import { MdSell } from "react-icons/md";
import { MdContactMail } from "react-icons/md";
// ----------------
import { GiHamburgerMenu } from "react-icons/gi";
// IMPORT CSS
import "./Nav.css";
import MenuDevice from "../../Components/MenuDevice/MenuDevice";
import Favoritos from "../../Components/Favoritos/Favoritos";
import { Link } from "react-router-dom";
function Nav() {
  const abrirCart = () => {
    // Obtém o elemento do carrinho pelo ID
    const cartElement = document.getElementById("cart_model");

    if (cartElement) {
      // Alterna a classe de visibilidade
      cartElement.classList.toggle("show_cart");
    }
  };

  //  FUNÇAO PARA ABRIR O MENU DEVICE
  const abrirMenuDevcie = () => {
    // Obtém o elemento do carrinho pelo ID
    const cartElement = document.getElementById("menu_device");

    if (cartElement) {
      // Alterna a classe de visibilidade
      cartElement.classList.toggle("show_cart");
    }
  };

  const abrirFavoritos = () => {
    // Obtém o elemento do carrinho pelo ID
    const cartElement = document.getElementById(`favoritosProdutos`);

    if (cartElement) {
      // Alterna a classe de visibilidade
      cartElement.classList.toggle("show_cart");
    }
  };

  return (
    <>
      <header className="nav_bar">
        {/* conteudo div top */}
        <main className="area_content">
          <div className="logo">
            <Link to="/">
              <img src="/img/icons/logo.webp" alt="Logo" />
            </Link>
          </div>
          {/* search__bar */}
          <form className="search__bar">
            <input
              type="search__input"
              placeholder="Buscar Produtos..."
              className="search__input"
              required
            />

            <button type="submit" className="search__button">
              <HiMagnifyingGlass />
            </button>
          </form>
          {/* aqui fica o button hamburguer */}
          <div className="area-btn_device">
            <button className="carrinho_produtos_device" onClick={abrirCart}>
              <FiShoppingCart />{" "}
            </button>
            {/* BUTTON PARA ABRIR O MENU DEVICE */}
            <button className="btn_hamburguer" onClick={abrirMenuDevcie}>
              <GiHamburgerMenu />
            </button>
          </div>
          {/* MENU DEVICE */}
          <MenuDevice />
          {/* btn_group */}
          <div className="btn_group">
            <button>
              ATENDIMENTO <BiSupport />
            </button>
            <button>
              RASTREAT PEDIDO <TbTruckDelivery />
            </button>
            <button>
              ENTRAR/CADASTRE-SE
              <SlLogin />
            </button>
            <button className="carrinho_produtos" onClick={abrirCart}>
              <FiShoppingCart />{" "}
            </button>
            {/* BUTTON PARA ABRIR O CARD FAVORITOS */}
            <button>
              <FaRegHeart id="favoritos " onClick={abrirFavoritos} />
            </button>
            <Favoritos />
          </div>
        </main>
        {/* conteúdo div bottom */}
        <main className="area_links ">
          {/* CATEGORIAS */}
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
                    Monitores
                    <LuMonitorDot />
                  </a>
                </li>
                <li>
                  <a href="">
                    Desepenho
                    <SiOpensourcehardware />
                  </a>
                </li>
                <li>
                  <a href="">
                    Video Games <SiRepublicofgamers />
                  </a>
                </li>
                <li>
                  <a href="">
                    Outros...
                    <MdOutlineDevicesOther />
                  </a>
                </li>
                <li>
                  <a href="">
                    Outros...
                    <MdOutlineDevicesOther />
                  </a>
                </li>
                <li>
                  <a href="">
                    Outros...
                    <MdOutlineDevicesOther />
                  </a>
                </li>
                <li>
                  <a href="">
                    Outros...
                    <MdOutlineDevicesOther />
                  </a>
                </li>
                <li>
                  <a href="">
                    Outros...
                    <MdOutlineDevicesOther />
                  </a>
                </li>
              </div>
            </ul>
          </main>
          {/* UL LINKS - OPÇÕES */}
          <ul className="ul_links">
            <li>
              <a href="">
                <MdNewReleases />
                LANÇAMENTOS
              </a>
            </li>
            <li>
              <a href="">
                <FaLaptopCode />
                PC GAMER
              </a>
            </li>
            <li>
              <a href="">
                <MdWorkspacesFilled />
                ACESSÓRIOS
              </a>
            </li>
            <li>
              <a href="">
                <BiSolidOffer />
                OFERTAS
              </a>
            </li>
            <li>
              <a href="">
                <FaShirt />
                MODA
              </a>
            </li>
            <li>
              <a href="">
                <BiSolidCoupon />
                CUPONS
              </a>
            </li>
            <li>
              <a href="">
                <MdSell />
                VENDER
              </a>
            </li>
            <li>
              <a href="">
                <MdContactMail />
                CONTATO
              </a>
            </li>
          </ul>
        </main>
      </header>
    </>
  );
}

export default Nav;
