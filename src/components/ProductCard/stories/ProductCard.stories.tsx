import { ComponentMeta, ComponentStory } from "@storybook/react";
import { cardProductMock } from "../helpers/cardProduct.mock";
import ProductCard from "../ProductCard";
import { CardProps } from "../types";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default {
    title: "UI/Card",
    component: ProductCard,
} as ComponentMeta <typeof ProductCard>

const Template: ComponentStory <typeof ProductCard> = (args: CardProps) => <ProductCard {...args}/>
 
export const Nuovo = Template.bind({})
Nuovo.args = {
    item: cardProductMock
}

export const Usato = Template.bind({})
Usato.args = {
    item: {...cardProductMock, condition: "usato"}
}

export const Favorite = Template.bind({})
Favorite.args = {
    item: {...cardProductMock, favorite: true}
}

export const Discount = Template.bind({})
Discount.args = {
    item: {...cardProductMock, old_price: 5000, condition: "usato"}
}


