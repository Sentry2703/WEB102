import "../App.css";

const Card = ({ flashcards, currentCard, isFront }) => {
    const cardClass = isFront ? "card" : "card flip";

    return (
        <div className={cardClass} id="cardA">
            <div className="front">
                <h2>Front {currentCard + 1}</h2>
                <p>{flashcards[currentCard]["Q"]}</p>
            </div>

            <div className="back">
                <h2>Back {currentCard + 1}</h2>
                <p>Literal Translation: {flashcards[currentCard]["T"]}</p>
                <p>Euphemism: {flashcards[currentCard]["A"]}</p>
            </div>
        </div>
    );
}

export default Card;