"use client";
import "./Page_2.css";
import Carosel from "../../Components/Carosel/Carosel";


// Definição da interface para aceitar a prop



function Page_2() {
  
  return (
    <>
      <section className="section_2">
        <main className="card_title">
          <div className="card_text">
            <h1>
              Aproveite Cupons Exclusivos com <span>DIGITALD2309</span>: e Economize Hoje Mesmo!
            </h1>
          </div>
          <div className="card_anuncio">
            <Carosel />
          </div>
        </main>
      
      </section>
    </>
  );
}

export default Page_2;
