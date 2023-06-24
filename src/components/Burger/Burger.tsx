import React, {useState} from 'react';
import Ingredient from "../Ingredient/Ingredient";
import TotalPrice from "../TotalPrice/TotalPrice";
import {IngredientType} from "../../types/types";

interface BurgerProps {
    selectedIngredient: IngredientType[] | null;
}

const Burger: React.FC<BurgerProps> = ({ selectedIngredient }) => {
    const [burgerIngredients, setBurgerIngredients] = useState<IngredientType[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(30);

    if (selectedIngredient && selectedIngredient !== burgerIngredients) {
        const countPrice = (): number => {
            return selectedIngredient.reduce((acc, ingredient) => {
                return acc + ingredient.price;
            }, 30);
        };

        setTotalPrice(countPrice());
        setBurgerIngredients(selectedIngredient);
    }

    return (
        <div>
            <div className="Burger">
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
                {burgerIngredients.map((ingredient, index) => (
                    <Ingredient key={index} ingredient={burgerIngredients[burgerIngredients.length - index - 1]} />
                ))}
                <div className="BreadBottom"></div>
            </div>
            <TotalPrice totalPrice={totalPrice} />
        </div>
    );
};

export default Burger;
