import { ImageGridCard } from "./ImageGridCard";

export function ImageGridCardWrapper({ cards = [] }) {
    return (
        <div className="w-full px-4  py-8 sm:py-12 md:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
                {cards.map((card, index) => (
                    <ImageGridCard
                        key={index}
                        title={card.title}
                        buttonText={card.buttonText}
                        image={card.image}
                        link={card.link}
                    />
                ))}
            </div>
        </div>
    );
}

