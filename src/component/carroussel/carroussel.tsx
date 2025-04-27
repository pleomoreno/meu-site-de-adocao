import "./carroussel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../card/card";
import { useRef } from "react";

interface CardProps {
    titulo: string;
    descricao: string;
    imagem: string;
}

const Carroussel: React.FC = () => {
    const sliderRef = useRef<Slider>(null);
    const settings = {
        infinite:true,
        speed:500,
        slidesToShow:1,
        sliderToScroll:1
    }
    const cardsData: CardProps[] = [
        {
          titulo: "Card 1",
          descricao: "Descrição do primeiro card",
          imagem:
            "https://pm1.narvii.com/6471/6b5c044a2c2d352b5e3b64a8a21bed6def286c12_hq.jpg",
        },
        {
          titulo: "Card 2",
          descricao: "Descrição do segundo card",
          imagem:
            "https://3.bp.blogspot.com/-tMNrU015ueY/Tq6nx1t1W6I/AAAAAAAAABE/JrbR3NV0szI/s1600/gatos-filhotes.jpg",
        },
        {
          titulo: "Card 3",
          descricao: "Descrição do terceiro card",
          imagem:
            "https://th.bing.com/th/id/OIP.mB3jp8ru7aUt8eDr4nfPgwHaFj?w=225&h=180&c=7&r=0&o=5&pid=1.7",
        },
        {
          titulo: "Card 4",
          descricao: "Descrição do quarto card",
          imagem:
            "https://th.bing.com/th/id/OIP.wKqIskH1uQKIlF5Inly94gHaJQ?w=148&h=185&c=7&r=0&o=5&pid=1.7",
        },
        {
          titulo: "Card 5",
          descricao: "Descrição do quinto card",
          imagem:
            "https://th.bing.com/th/id/OIP.uMPsnNczy3vLwy5aLRVhqQAAAA?w=185&h=191&c=7&r=0&o=5&pid=1.7",
        },
      ];

      const goToNext = () => {
        sliderRef.current?.slickNext();
    };

    const goToPrev = () => {
        sliderRef.current?.slickPrev();
    };

    return(
        <div className="containerCarroussel">
            <div className="carroussel-secao">
                <h2 className="carroussel-title">Animais para Adoção</h2>
                <div className="carroussel-wrapper">
                    <Slider ref={sliderRef} {...settings}>
                        {cardsData.map((card, index)=> (
                            <div key={index} className="card-wrapper">
                                <Card {...card} />
                            </div>
                        ))}
                    </Slider>
                    <button className="prev" onClick={goToPrev}></button>
                    <button className="next" onClick={goToNext}></button>
                </div>
            </div>
        </div>
    );
};

export default Carroussel;
