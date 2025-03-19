
import {  fireEvent, render, screen } from '@testing-library/react';
import App from './App';

import Tab1 from './pages/Tab1';
import { ProductCard, ProductInterfaceProps } from './components/ProductCard';
import { vi } from 'vitest';
import { ProductList } from './components/ProductList';

test('renders without crashing', () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeDefined();
});

test("Prueba de renderizado de la vista de productos", () => {
  const { baseElement } = render(<Tab1 />)

  const title = screen.getByTestId('title-products-view')
  expect(title).toBeInTheDocument()
  expect(baseElement).toBeInTheDocument()
})

describe('Renderiza ProductCard correctamente', () => {

 
  it('Prueba de renderizado de la ProductCard',()=>{
    const mockHandleBuyClick = vi.fn();

    const product: ProductInterfaceProps = {
      id: 1,
      title: 'Producto A',
      category: 'electronics',
      price: 20.5,
      description: 'descricion',
      image: 'imagen',
      index: 1,
      onBuyClick: mockHandleBuyClick
    };

    render(<ProductCard {...product} />);


    expect(screen.getByText('Producto A')).toBeInTheDocument();


    expect(screen.getByText('electronics')).toBeInTheDocument();


    expect(screen.getByTestId('add-cart-button')).toBeInTheDocument();
  })
  it("Prueba de funcionalidad del boton agregar",()=>{
    const mockHandleBuyClick = vi.fn();

    const product: ProductInterfaceProps = {
      id: 1,
      title: 'Producto A',
      category: 'electronics',
      price: 20.5,
      description: 'descricion',
      image: 'imagen',
      index: 1,
      onBuyClick: mockHandleBuyClick
    };

    render(<ProductCard {...product} />);

    const button = screen.getByTestId('add-cart-button');
    fireEvent.click(button)

    expect(mockHandleBuyClick).toHaveBeenCalledTimes(1)
  })
 

});

test("Renderiza toda una lista de productos", async () => {
  const mockHandleBuyClick = vi.fn();
  const mockInfinitySimulation = vi.fn().mockResolvedValue(undefined);
  const filterProducts= [{
    id: 1,
    title: 'Producto A',
    category: 'electronics',
    price: 20.5,
    description: 'descricion',
    image: 'imagen',
    index: 1,

  },
    {
      id: 2,
      title: 'Producto B',
      category: 'Desing',
      price: 20.5,
      description: 'descricion',
      image: 'imagen',
      index: 2,

    },
    {
      id: 3,
      title: 'Producto C',
      category: 'Photo',
      price: 20.5,
      description: 'descricion',
      image: 'imagen',
      index: 3,

    },]
    

  render(<ProductList filterProducts={filterProducts} handleBuyClick={mockHandleBuyClick} infinitySimulation={mockInfinitySimulation} />)


  expect(screen.getByRole('region')).toBeInTheDocument()

})

