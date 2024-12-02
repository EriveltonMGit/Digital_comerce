// IMPORT CSS
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (

    <>

<div className="svg_top">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#292c31"
      fillOpacity="1" // Altere de fill-opacity para fillOpacity
      d="M0,128L120,138.7C240,149,480,171,720,170.7C960,171,1200,149,1320,138.7L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
    ></path>
  </svg>
</div>
    
    
  <footer className="footer">
        
      <div className="footer-container">
        {/* Coluna 1: Institucional */}
        <div className="footer-column">
          <h4>Institucional</h4>
          <ul>
            <li><a href="/sobre">Quem Somos</a></li>
            <li><a href="/trabalhe-conosco">Trabalhe Conosco</a></li>
            <li><a href="/politica-privacidade">Política de Privacidade</a></li>
            <li><a href="/termos">Termos e Condições</a></li>
          </ul>
        </div>

        {/* Coluna 2: Ajuda e Suporte */}
        <div className="footer-column">
          <h4>Ajuda e Suporte</h4>
          <ul>
            <li><a href="/contato">Central de Atendimento</a></li>
            <li><a href="/trocas">Trocas e Devoluções</a></li>
            <li><a href="/faq">Perguntas Frequentes</a></li>
            <li><a href="/garantia">Garantia de Produtos</a></li>
          </ul>
        </div>

        {/* Coluna 3: Formas de Pagamento */}
        <div className="footer-column">
          <h4>Formas de Pagamento</h4>
          <ul className="payment-methods">
            <li><img src="/public/img/page_9/visa.svg" alt="Visa" /></li>
            <li><img src="/public/img/page_9/master.svg" alt="Mastercard" /></li>
            <li><img src="/public/img/page_9/boleto.svg" alt="Boleto" /></li>
            <li><img src="/public/img/page_9/pix.svg" alt="Pix" /></li>
          </ul>
        </div>

        {/* Coluna 4: Redes Sociais */}
        <div className="footer-column">
          <h4>Redes Sociais</h4>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
            <a href="https://whatsapp.com" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Coluna 5: Contato */}
        <div className="footer-column email">
          <h4>Contato</h4>
          <p>Telefone: (11) 1234-5678</p>
          <p>Email: suporte@lojaonline.com</p>
          <p>Endereço: Rua Exemplo, 123 - São Paulo, SP</p>
        </div>
      </div>

      {/* Rodapé Inferior */}
      <div className="footer-bottom">
        <p>© 2024 Loja Online Digital Comerce. Todos os direitos reservados.</p>
      </div>
    </footer>    
    
    </>
  
  );
}

export default Footer;
