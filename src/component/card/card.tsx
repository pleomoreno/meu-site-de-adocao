import "./card.css";

interface CardProps {
    titulo: string;
    descricao: string;
    imagem: string;
}

const Card: React.FC<CardProps> = ({ titulo, descricao, imagem }) => {
    return (
        <div className="card">
            <div className="cardImage">
                <img src={imagem} alt={titulo} />
            </div>
            <div className="cardContent">
                <h3>{titulo}</h3>
                <p>{descricao}</p>
            </div>
        </div>
    )
}

export default Card;