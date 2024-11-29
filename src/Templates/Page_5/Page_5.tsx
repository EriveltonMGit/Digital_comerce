
import { useRef } from "react";
import './Page_5.css'
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
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
    id: "29",
    name: "Mouse Gamer Para Jogo 3.200 Dpi Óptico Com Led Rgb Usb Exbom",
    image: "/img/Page_6/products/D_NQ_NP_916293-MLB76747490319_052024-O.webp",
    delivery: "/img/icons/full.png",
    price: 36,
    discount: "De R$ 55",
    category: "Eletronicos",
  },
  {
    id: "30",
    name: "Mouse Sem Fio Recarregável Wireles Optico Led Rgb Ergonômico",
    image: "/img/Page_6/products/D_NQ_NP_897691-MLB71229171865_082023-O.webp",
    delivery: "/img/icons/full.png",
    price: 28,
    discount: "De R$55",
    category: "Eletronicos",
  },
  {
    id: "31",
    name: "Casaco Jaqueta Puffer Bobojaco Gominho Impermeável Masculino",
    image: "/img/Page_6/products/D_NQ_NP_732583-MLB69969035981_062023-O.webp",
    delivery: "/img/icons/full.png",
    price:92,
    discount: "De R$ 180",
    category: "Roupa",
  },
  {
    id: "32",
    name: "Super Plus Size Jaqueta Frio Inverno Puffer Bobojaco Gominho",
    image: "/img/Page_6/products/D_NQ_NP_829250-MLB80097415728_102024-O.webp",
    delivery: "/img/icons/full.png",
    price:279,
    discount: "De R$ 320",
    category: "Roupa",
  },
  {
    id: "33",
    name: "Mountain bike Alfameq Makan aro 29 19",
    image: "/img/Page_6/products/D_NQ_NP_745783-MLU77398275363_072024-O.webp",
    delivery: "/img/icons/full.png",
    price: 830,
    discount: "920",
    category: "Esporte",
  },
  {
    id: "34",
    name: "Bicicleta Aro 29 Aço Carbono Ksvj Freios Disco Suspensão 21v",
    image: "/img/Page_6/products/D_NQ_NP_682905-MLB73104779367_112023-O.webp",
    delivery: "/img/icons/full.png",
    price:790,
    discount: "De 936",
    category: "Esporte",
  },
  {
    id: "35",
    name: "Yamaha Dtx6k-X Negro",
    image: "/img/Page_6/products/D_NQ_NP_880597-MLU73021737323_112023-O.webp",
    delivery: "/img/icons/full.png",
    price:9757,
    discount: "De R$ 10200",
    category: "Instruemtos",
  },
  {
    id: "36",
    name: "Bateria Eletronica Revas Roland Pb350 + Estante",
    image: "/img/Page_6/products//D_NQ_NP_802363-MLB48432623895_122021-O.webp",
    delivery: "/img/icons/full.png",
    price:1649,
    discount: "De R$ 1890",
    category: "Instruemtos",
  },
  {
    id: "37",
    name: "Bicicleta Spinning Com Roda De Inércia De 13kg Wct Fitness Cor Preto",
    image: "/img/Page_6/products/D_NQ_NP_706535-MLA46736414487_072021-O.webp",
    delivery: "/img/icons/full.png",
    price: 1720,
    discount: "De R$ 2120",
    category: "Esporte",
  },
  {
    id: "38",
    name: "Patins Roller Inline Infantil Roxo 34 A 37 Menina + Proteção",
    image: "/img/Page_6/products/D_NQ_NP_963989-MLB80962700623_112024-O.webp",
    delivery: "/img/icons/full.png",
    price: 199,
    discount: "De R$ 220",
    category: "Esporte",
  },
  {
    id: "39",
    name: "Patins Inline Freestyle Traxart Volt + 2.0 Preto - Abec-9",
    image: "/img/Page_6/products/D_NQ_NP_715271-MLB76323203552_052024-O.webp",
    delivery: "/img/icons/full.png",
    price:899,
    discount: "De R$ 970",
    category: "Calcados",
  },
];


import { useNavigate } from "react-router-dom";

function Page_5({ addToCart }: ProductCarouselProps) {

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
         <section className="section_5">
        {/* TITULO */}
        <div className="title_">
          <h1>PRODUTOS MELHOR AVALIADOS < FaStar className="star"/></h1>
        </div>
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

export default Page_5;
<>
</>