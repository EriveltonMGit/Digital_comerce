
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
    name: "Maquina De Lavar Roupas Colormaq Automática 11,5 Kg",
    image: "/img/page_5/products/D_NQ_NP_623411-MLB74746264755_022024-O.webp",
    delivery: "/img/icons/full.png",
    price: 1399,
    discount: "De R$ 1500 ",
    category: "Eletrodomesticos",
  },
  {
    id: "30",
    name: "Cafeteira Nespresso Vertuo Pop Preto 220v",
    image: "/img/page_5/products/D_NQ_NP_856942-MLU75357674141_032024-O.webp",
    delivery: "/img/icons/full.png",
    price: 260,
    discount: "De R$ 299",
    category: "Natal",
  },
  {
    id: "31",
    name: "Fritadeira Sem Óleo Air Fryer 3,5l Mondial Preto/inox 1500w Af-31",
    image: "/img/page_5/products/D_NQ_NP_708221-MLB52679584793_122022-O.webp",
    delivery: "/img/icons/full.png",
    price: 213,
    discount: "De R$ 180",
    category: "Esporte",
  },
  {
    id: "32",
    name: "Tênis Oakley Stratus Masculino Adulto Casual Sintético",
    image: "/img/page_5/products/D_NQ_NP_984782-MLB80616988679_112024-O.webp",
    delivery: "/img/icons/full.png",
    price: 400,
    discount: "De R$ 620",
    category: "Roupa",
  },
  {
    id: "33",
    name: "Kit 2 Suplementos Pretorian Iso Protein Blend Complex Sabor Chocolate 2kg",
    image: "/img/page_5/products/D_NQ_NP_922704-MLA79131096681_092024-O.webp",
    delivery: "/img/icons/full.png",
    price: 162,
    discount: "De R$ 200",
    category: "Esporte",
  },
  {
    id: "34",
    name: "Creatina Monohidratada FTW 300g Aprovada Sabor Neutro",
    image: "/img/page_5/products/D_NQ_NP_726671-MLA79372127728_092024-O.webp",
    delivery: "/img/icons/full.png",
    price: 43,
    discount: "De R$ 79",
    category: "Esporte",
  },
  {
    id: "35",
    name: "Tênis Masculino Mizuno Wave 12s Lançamento ",
    image: "/img/page_5/products/D_NQ_NP_943091-MLB71728294369_092023-O.webp",
    delivery: "/img/icons/full.png",
    price: 199,
    discount: "De R$ 279",
    category: "calcados",
  },
  {
    id: "36",
    name: "RM Árvore De Natal Pinheiro Luxo 540 Galhos Verde 1,80m",
    image: "/img/page_5/products/D_NQ_NP_879592-MLB48068325080_102021-O.webp",
    delivery: "/img/icons/full.png",
    price: 199,
    discount: "De R$ 309",
    category: "Natal",
  },
  {
    id: "37",
    name: "Aspirador De Pó Vertical ",
    image: "/img/page_5/products/D_NQ_NP_784662-MLU72660363588_112023-O.webp",
    delivery: "/img/icons/full.png",
    price: 699,
    discount: "De R$ 879",
    category: "Eletrodomesticos",
  },
  {
    id: "38",
    name: "Olympikus CORRIDA Swift 4 Feminino Adultos",
    image: "/img/page_5/products/D_NQ_NP_678706-MLB80529442401_112024-O34.webp",
    delivery: "/img/icons/full.png",
    price: 199,
    discount: "De R$ 220",
    category: "Esporte",
  },
  {
    id: "39",
    name: "Carolina Herrera Good Girl Tradicional EDP 150ml para feminino",
    image: "/img/page_3/products/D_NQ_NP_950204-MLA49695604575_042022-O.webp",
    delivery: "/img/icons/full.png",
    price: 680,
    discount: "De R$ 820",
    category: "Esporte",
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