import "./Mini_Cards.css";
import { FaCartPlus } from "react-icons/fa";

// Definindo a interface para o item do carrinho
interface CartItem {
  id: string;
  image: string;
  name: string;
  price: number;
  category: string;
}

interface MiniCardsProps {
  addToCart: (item: CartItem) => void;
}

function MiniCards({ addToCart }: MiniCardsProps) {

 // Verifica se o preço tem casas decimais e aplica .toFixed(3) se necessário
 function formatPrice(price: number): string {
  return price.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}



  const miniItems: CartItem[] = [
    {
      id: "1", // mudando para string
      image:
        "https://samsungbrshop.vtexassets.com/arquivos/ids/228494-600-auto?v=638412055449170000&width=600&height=auto&aspect=true",
      name: "Smartphone Samsung Galaxy A15 6,5  128GB Azul Claro 4G 4GB RAM",
      price: 1800,
      category: "SmartPhones",
    },
    {
      id: "2", // mudando para string
      image:
        "https://api.store.vivo.com.br/medias/96Wx96H-DGAP181R3000-1-.jpg?context=bWFzdGVyfGF6dXJlaW1hZ2VzfDc1NzB8aW1hZ2UvanBlZ3xhRFF3TDJnd1lpODRPVGcyT0RBNU1qY3dNekF5THprMlYzZzVOa2hmUkVkQlVERTRNVkl6TURBd1h5QW9NU2t1YW5CbnxkYTBhN2FjMjJkY2ZmZTczZGI3MGUxN2QyYTM1ZGQzZjEwODJlYTBhOWExOGRiMDY2YTU3OGI3MTliYjk5ZjAx",
      name: "iPhone 15 Apple (128GB) Preto, Tela de 6,1",
      price: 3900,
      category: "SmartPhones",
    },
    {
      id: "3", // mudando para string
      image:
        "https://samsungbrshop.vtexassets.com/arquivos/ids/228494-600-auto?v=638412055449170000&width=600&height=auto&aspect=true",
      name: "Smartphone Samsung Galaxy A15 6,5  128GB Azul Claro 4G 4GB RAM",
      price: 1800,
      category: "SmartPhones",
    },
  ];

  return (
    <main className="minicards">
      {miniItems.map((item) => (
        <div key={item.id} className="mini_cards">
          <div className="img_mini">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="area_content_min">
            <h1>{item.name}</h1>
            <p>R$: {formatPrice(item.price)}</p>
            <button onClick={() => addToCart(item)}>
              Adicionar ao carrinho <FaCartPlus />
            </button>
          </div>
        </div>
      ))}
    </main>
  );
}

export default MiniCards;
