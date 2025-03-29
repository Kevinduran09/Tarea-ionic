import { fireEvent, render , screen} from "@testing-library/react"
import CartPage from "../page/CartPage"
import { vi } from "vitest";
import { CartList } from "../components/CartList";
import { CartItem } from "../components/CartItem";


vi.mock('../../../store/useCartStore', () => ({
    useCartStore: vi.fn(() => ({
        addCart: vi.fn(),
        quantity: vi.fn(() => 4),
        cart: [{
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
        }]
    })),
}));


describe('Pruebas del modulo de Cart',()=>{


    it('Prueba de renderizado de CartPage', () => {
        const {baseElement} = render(<CartPage/>)
        const title = screen.getByTestId('title-Card-view')
        expect(title).toBeInTheDocument()
        expect(baseElement).toBeInTheDocument()
    })

    it('Prueba de renderizado de CartList', () => {
        render(<CartList/>)
        expect(screen.getByRole('region')).toBeInTheDocument()
        expect(screen.getByText('Producto A')).toBeInTheDocument()
    })
    
    it('Prueba de renderizado de CartItem',()=>{
        const removeCart = vi.fn()
        const product = {
              id: 1,
              title: 'Producto A',
              price: 20.5,
              description: 'Una descripción de ejemplo',
              category: 'electronics',
              image: 'https://via.placeholder.com/150',
              
              index: 1,
        
            };
        render(<CartItem item={product} index={product.index} removeCart={removeCart}/>)
        const button = screen.getByTestId('remove-cart-button')
        fireEvent.click(button)
        expect(button).toBeInTheDocument()
        expect(removeCart).toHaveBeenCalled()
        expect(removeCart).toHaveBeenCalledWith(product.index)
    })
    
})