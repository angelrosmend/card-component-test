import { render, fireEvent } from "@testing-library/react";
import ProductCard from "../ProductCard";
import {cardProductMock}  from "../helpers/cardProduct.mock"

describe('CardCarousel Component', () => {
  it('it renders', () => {
    render(<ProductCard item={cardProductMock}/>)
  })
})
