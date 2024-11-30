
import { useRef } from "react";
import './Page_6.css'
import { FaHeart } from "react-icons/fa";

// Definindo a interface para o item do carrinho
interface CartItem {
  id: string;
  image: string;
  name: string;
  price: number;
  category: string;
  discount: string;
  delivery: string;
}
interface ProductCarouselProps {
  addToCart: (item: CartItem) => void; // Função para adicionar ao carrinho
}

const products: CartItem[] = [
  {
    id: "40",
    name: "Camisa Jogo 3 Bahia 2024 Azul Masculina",
    image: "/img/Page_6/products/D_NQ_NP_694364-MLB79422609301_092024-O.webp",
    delivery: "/img/icons/full.png",
    price: 198,
    discount: "De R$ 230 ",
    category: "Esporte",
  },
  {
    id: "41",
    name: "Capacete Moto Tipo Sanmarino Automático Masculino Feminino",
    image: "/img/Page_6/products/D_NQ_NP_860255-MLB72462091952_102023-O.webp",
    delivery: "/img/icons/full.png",
    price: 87,
    discount: "De R$ 120",
    category: "Esporte",
  },
  {
    id: "42",
    name: "Camisa Corinthians Retrô Campeão Brasileiro 1990 Oficial",
    image: "/img/Page_6/products/D_NQ_NP_956514-MLB80271835488_112024-O.webp",
    delivery: "/img/icons/full.png",
    price:219,
    discount: "De R$ 250",
    category: "Esporte",
  },
  {
    id: "43",
    name: "Camisa Retrô Flamengo 1981 Zico Libertadores Oficial",
    image: "/img/Page_6/products/D_NQ_NP_967533-MLB46819833304_072021-O.webp",
    delivery: "/img/icons/full.png",
    price: 173,
    discount: "De R$ 214",
    category: "Esporte",
  },
  {
    id: "44",
    name: "Camisa Atlético Mineiro Retrô Libertadores 2013 Oficial",
    image: "/img/Page_6/products/D_NQ_NP_757010-MLB75750457355_042024-O.webp",
    delivery: "/img/icons/full.png",
    price: 188,
    discount: "298",
    category: "Esporte",
  },
  {
    id: "45",
    name: "Capacete Fechado Pro Tork Sport Moto 788 Automatico Vis Fume Cor Laranja Tamanho do capacete 60",
    image: "img/Page_6/products/D_NQ_NP_853263-MLU76897657990_062024-O.webp",
    delivery: "/img/icons/full.png",
    price:99,
    discount: "De 260",
    category: "Esporte",
  },
  {
    id: "46",
    name: "Monitor LG 24ms Ips, Fullhd, 100hz, Ajuste De Inclinação",
    image: "/img/Page_6/products/D_NQ_NP_824267-MLA79575810594_102024-O.webp",
    delivery: "/img/icons/full.png",
    price: 699,
    discount: "De R$ 670",
    category: "Tecnologia",
  },
  {
    id: "47",
    name: "Monitor Gamer LG Ultragear 24 180hz 1ms Ips 24gs60f Bivolt Negro",
    image: "/img/Page_6/products/D_NQ_NP_840804-MLU78161762657_082024-O.webp",
    delivery: "/img/icons/full.png",
    price:951,
    discount: "De R$ 1024",
    category: "Tecnologia",
  },
  {
    id: "48",
    name: "Monitor Gamer Portátil 15.6 1080p Fhd Ips Tela Pare Hdmi/usb",
    image: "/img/Page_6/products/D_NQ_NP_759124-MLB79512086328_102024-O.webp",
    delivery: "/img/icons/full.png",
    price: 767,
    discount: "De R$ 913",
    category: "Tecnologia",
  },
  {
    id: "49",
    name: "Monitor Portátil Arzopa Z1FC 16,1'' 144hz Ultrafino 1080p Fhd Ips Hdmi Usb-c Tela Extendida",
    image: "/img/Page_6/products/D_NQ_NP_824138-MLU75842134825_042024-O.webp",
    delivery: "/img/icons/full.png",
    price: 670,
    discount: "De R$ 730",
    category: "Tecnologia",
  },
  {
    id: "50",
    name: "Fone De Ouvido Bluetooth Lenovo Gm2 Pro Led Gamer Livepods Cor Preto",
    image: "/img/Page_6/products/D_NQ_NP_690479-MLU77371088705_072024-O.webp",
    delivery: "/img/icons/full.png",
    price: 78,
    discount: "De R$ 89",
    category: "Tecnologia",
  },
];


import { useNavigate } from "react-router-dom";

function Page_6({ addToCart }: ProductCarouselProps) {


  const navigate = useNavigate();
  // Verifica se o preço tem casas decimais e aplica .toFixed(3) se necessário
  function formatPrice(price: number): string {
    return price.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  const carouselRef = useRef<HTMLDivElement>(null);

  // Função para mover o carrossel para a esquerda
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -400, // Move 5 cards para a esquerda
        behavior: "smooth",
      });
    }
  };

  // Função para mover o carrossel para a direita
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 400, // Move 5 cards para a direita
        behavior: "smooth",
      });
    }
  };

  //  FUNÇÃO PAA FAVORITAR PTODUTOS
  function favoritarProduct() {
    const favoritos = document.getElementById(`favoritos_span`);
    const fa = document.getElementById(`favoritos`);
    if (favoritos) {
      favoritos.style.display = "flex";

      setTimeout(() => {
        favoritos.style.display = "none";
      }, 4000);
    }
    if (fa) {
      fa.style.color = "#28a745";
      setTimeout(() => {
        fa.style.color = "";
      }, 2000);
    }
  }





    return (  
        <>
         <section className="section_6">
       
        {/*  card ofertas  */}
        <div className="card_ofertas">
          <div className="product-carousel-container">
            <button className="carousel-control-btn left" onClick={scrollLeft}>
              {"<"}
            </button>

            <div ref={carouselRef} className="carousel-track">
              {products.map((product) => (
                <div key={product.id} className="carousel-card">
                  <FaHeart onClick={favoritarProduct} className="favoritos" />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="carousel-card-img"
                  />
                    <button
              className="btn_exibir"
              onClick={() => navigate(`/product/${product.id}/${encodeURIComponent(product.name)}`)}
            >
              Visualizar
            </button>
                  <div className="carousel-card-body">
                    <h5 className="carousel-card-title">{product.name}</h5>

                    <div className="carousel-card-price">
                      <div className="delivery">
                        <b>
                          Frete Grátis: <img src={product.delivery} alt="" />
                        </b>
                      </div>
                      <div className="price_area">
                        <p>{product.discount}</p>{" "}
                        <span>R$ {formatPrice(product.price)}</span>{" "}
                      </div>
                    </div>

                    <button
                      className="add-to-cart-btn"
                      onClick={() => {
                        addToCart(product);
                      }}
                    >
                      Adicionar ao carrinho
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="carousel-control-btn right"
              onClick={scrollRight}
            >
              {">"}
            </button>
          </div>
        </div>

        
      </section>
        </>
    );
}

export default Page_6;
<>
</>