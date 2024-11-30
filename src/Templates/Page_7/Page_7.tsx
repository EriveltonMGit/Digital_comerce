
import { useRef } from "react";
import './Page_7.css'
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
    id: "51",
    name: "Bicicleta Aro 29 Aço Carbono Ksvj Freios Disco Suspensão 21v",
    image: "/img/Page_7/products/D_NQ_NP_612250-MLB77440227164_072024-O.webp",
    delivery: "/img/icons/full.png",
    price: 739,
    discount: "De R$ 860 ",
    category: "Esporte",
  },
  {
    id: "52",
    name: "Bicicleta Aro 29 Ksw Xlt 24 Marchas Shimano E Freios A Disco",
    image: "/img/Page_7/products/D_NQ_NP_909833-MLB70527501457_072023-O.webp",
    delivery: "/img/icons/full.png",
    price: 989,
    discount: "De R$ 1320",
    category: "Esporte",
  },
  {
    id: "53",
    name: "Bicicleta Aro 29 Ksw 27v Shimano, Freio Hidraulico, Trava/k7",
    image: "/img/Page_7/products/D_NQ_NP_834244-MLB50044787113_052022-O.webp",
    delivery: "/img/icons/full.png",
    price: 1315,
    discount: "De R$ 1430",
    category: "SmartPhones",
  },
  {
    id: "54",
    name: "Relógio Feminino Champion CN25118W Fundo Branco + Kit Colar e Brincos",
    image: "/img/Page_7/products/D_NQ_NP_726063-MLU77357739605_062024-O.webp",
    delivery: "/img/icons/full.png",
    price:240,
    discount: "De R$ 400",
    category: "Acessorios",
  },
  {
    id: "55",
    name: "Relógio Technos Masculino Dourado Militar Prova D'água Nf",
    image: "/img/Page_7/products/D_NQ_NP_980094-MLA51337333302_082022-O.webp",
    delivery: "/img/icons/full.png",
    price: 350,
    discount: "498",
    category: "Acessorios",
  },
  {
    id: "56",
    name: "Relógio Technos Masculino Dourado Militar Prova D'água Nf",
    image: "/img/Page_7/products/D_NQ_NP_649191-MLB78468399510_082024-O.webp",
    delivery: "/img/icons/full.png",
    price:226,
    discount: "De 300",
    category: "Acessorios",
  },
  {
    id: "57",
    name: "Relógio Dourado Masculino Technos Performance Racer Cor Do Fundo Preto",
    image: "/img/Page_7/products/D_NQ_NP_870051-MLA80690604495_112024-O.webp",
    delivery: "/img/icons/full.png",
    price: 439,
    discount: "De R$ 510",
    category: "Acessorios",
  },
  {
    id: "58",
    name: "Relógio Technos Masculino Prata Sport Prova D'agua Original",
    image: "/img/Page_7/products/D_NQ_NP_660607-MLB80113777729_102024-O.webp",
    delivery: "/img/icons/full.png",
    price:378,
    discount: "De R$ 412",
    category: "Acessorios",
  },
  {
    id: "59",
    name: "Fone De Ouvido P2 Estereo P/ Samsung Ou Android Pmcell F0-14",
    image: "/img/Page_7/products/D_NQ_NP_936994-MLB53166769073_012023-O.webp",
    delivery: "/img/icons/full.png",
    price: 20,
    discount: "De R$ 30",
    category: "Acessorios",
  },
  {
    id: "60",
    name: "Fone De Ouvido Taue101bk/00 Com Microfone Philips Cor Preto",
    image: "/img/Page_7/products/D_NQ_NP_731838-MLA48256238534_112021-O.webp",
    delivery: "/img/icons/full.png",
    price: 20,
    discount: "De R$ 30",
    category: "Acessorios",
  },
  {
    id: "61",
    name: "Sandália Comfortflex Feminina Adulto Casual",
    image: "/img/Page_7/products/D_NQ_NP_703725-MLB80109242989_102024-O.webp",
    delivery: "/img/icons/full.png",
    price: 110,
    discount: "De R$ 150",
    category: "Moda",
  },
];


import { useNavigate } from "react-router-dom";

function Page_7({ addToCart }: ProductCarouselProps) {

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
         <section className="section_7">
       
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

export default Page_7;
<>
</>