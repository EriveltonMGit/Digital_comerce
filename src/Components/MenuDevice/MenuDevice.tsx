import "./MenuDevice.css"; // Estilização do menu
import { IoMdClose } from "react-icons/io";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoLogIn } from "react-icons/io5";
import { FaMobileAlt, FaTv, FaLaptop, FaCouch, FaEllipsisH } from 'react-icons/fa';
import { MdKitchen } from 'react-icons/md';
const MenuDevice = () => {
  
  const fecharCart = () => {
    const cartElement = document.getElementById("menu_device");

    if (cartElement) {
      // Alterna a classe de visibilidade
      cartElement.classList.toggle("show_cart");
    }
  };

  return (
    <nav className="menu-device " id="menu_device">
      {/* Botão para abrir/fechar o menu */}

      {/* Lista de categorias */}
      <div className="top_links">
        <h1>Categorias<IoMdClose className="close " onClick={fecharCart} /></h1>
        <li className="login_links">
          <a href="">Entrar ou Cadastra-se< IoLogIn /></a>
        </li>
        <div className="link_pedidos">
          <a href="">Pedidos <CiDeliveryTruck/></a>
          
        </div>
      </div>
      <ul className="menu-list">
        <div className="cards_a">
          <a href="">Smartphones</a>
          <a href="">Tablets</a>
        </div>
        <div className="cards_a">
          <a href="">Esporte</a>
          <a href="">Artigos de casa</a>
        </div>
        <div className="cards_a">
          <a href="">Notebooks</a>
          <a href="">Moda</a>
        </div>
        {/*  */}
        <li>
          <a href=""></a>
        </li>
      </ul>

       <div className="opcoes_links">
       <div className="favoti">
       <a href="">Favoritos</a>
       <a href="">Cupons</a>
       </div>
        <div className="links_products_device">
      <a href="">
        <FaMobileAlt /> Celulares
      </a>
      <a href="">
        <MdKitchen /> Eletrodomésticos
      </a>
      <a href="">
        <FaTv /> TV e Vídeo
      </a>
      <a href="">
        <FaLaptop /> Informática
      </a>
      <a href="">
        <FaCouch /> Móveis
      </a>
      <a href="">
        <FaEllipsisH /> Outros
      </a>
    </div>
       </div>




    </nav>
  );
};

export default MenuDevice;
