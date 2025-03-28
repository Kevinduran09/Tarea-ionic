
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../../App';


import Tab1 from '../../../pages/Tab1';
import { ProductCard, ProductInterfaceProps } from '../components/ProductCard';
import { vi, Mock } from 'vitest';
import { ProductList } from '../components/ProductList';
import { useCartStore } from '../../../store/useCartStore';
vi.mock('../../../store/useCartStore', () => ({
  useCartStore: vi.fn(() => ({
    addCart: vi.fn(),
    quantity:vi.fn(() => 4),
  })),
}));

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


  it('Prueba de renderizado de la ProductCard', () => {


    const product: ProductInterfaceProps = {
      id: 1,
      title: 'Producto A',
      category: 'electronics',
      price: 20.5,
      description: 'descricion',
      image: 'imagen',
      index: 1,

    };

    render(<ProductCard {...product} />);


    expect(screen.getByText('Producto A')).toBeInTheDocument();


    expect(screen.getByText('electronics')).toBeInTheDocument();


    expect(screen.getByTestId('add-cart-button')).toBeInTheDocument();
  })
  it("Prueba de funcionalidad del boton agregar", () => {

    const addCartMock = vi.fn();
    (useCartStore as unknown as Mock).mockReturnValue({ addCart: addCartMock });
    const product: ProductInterfaceProps = {
      id: 1,
      title: 'Producto A',
      price: 20.5,
      description: 'Una descripción de ejemplo',
      category: 'electronics',
      image: 'https://via.placeholder.com/150',
      
      index: 1,

    };

    render(<ProductCard {...product} />);

    const button = screen.getByTestId('add-cart-button');
    fireEvent.click(button);
    expect(addCartMock).toHaveBeenCalled();
    expect(addCartMock).toHaveBeenCalledWith(expect.objectContaining({
      id: 1,
      title: 'Producto A',
      price: 20.5,
      description: 'Una descripción de ejemplo',
      category: 'electronics',
      image: 'https://via.placeholder.com/150',
    }));
  })


});

test("Renderiza toda una lista de productos", async () => {

  const productos = [{
    id: 1,
    title: 'Producto A',
    category: 'electronics',
    price: 20.5,
    description: 'descricion',
    image: 'imagen',
    index: 1,
    rating: {
      rate: 3.9,
      count: 120
    }
  },
  {
    id: 2,
    title: 'Producto B',
    category: 'Desing',
    price: 20.5,
    description: 'descricion',
    image: 'imagen',
    index: 2,
    rating: {
      rate: 3.9,
      count: 120
    }
  },
  {
    id: 3,
    title: 'Producto C',
    category: 'Photo',
    price: 20.5,
    description: 'descricion',
    image: 'imagen',
    index: 3,
    rating: {
      rate: 3.9,
      count: 120
    }
  },]


  render(<ProductList Products={productos} />)


  expect(screen.getByRole('region')).toBeInTheDocument()

})

