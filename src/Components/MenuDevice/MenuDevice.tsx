
import "./MenuDevice.css"; // Estilização do menu
import { IoMdClose } from "react-icons/io";
const MenuDevice = () => {


  // Lista de categorias
  const categories = [
    "Televisores",
    "Celulares e Smartphones",
    "Computadores e Notebooks",
    "Eletrodomésticos",
    "Áudio e Som",
    "Cozinha e Utensílios",
    "Ar-Condicionadoe",
    "Câmeras e Fotografia",
    "Games e Consoles",
    "Acessórios Eletrônicos",
  ];


  const fecharCart = ()=>{
    const cartElement = document.getElementById("menu_device");

    if (cartElement) {
      // Alterna a classe de visibilidade
      cartElement.classList.toggle("show_cart");
    }
  }



  return (
    <nav className="menu-device " id="menu_device">
      {/* Botão para abrir/fechar o menu */}
     
      {/* Lista de categorias */}
        <h1>Categorias <IoMdClose className="close " onClick={fecharCart} /></h1>
      <ul className="menu-list" >
      
        {categories.map((category, index) => (
          <li key={index} className="menu-item">
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuDevice;
