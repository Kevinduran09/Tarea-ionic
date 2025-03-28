import { IonButton, IonCard, IonCardContent, IonCardHeader, IonChip, IonIcon, IonImg } from '@ionic/react'
import { cartOutline } from 'ionicons/icons'
import React from 'react'
import { useCartStore } from '../../../store/useCartStore'
export interface ProductInterfaceProps {
    id: number,
    title: string,
    description: string,
    price: GLfloat,
    category: string,
    image: string,
    index: number,

}

export const ProductCard: React.FC<ProductInterfaceProps> = ({ id, title, price, description, category, image, index }) => {
    const { addCart } = useCartStore()

    function addProductCart() {
        addCart({ id, title, price, description, category, image })

    }

    return (
        <IonCard className='product-card bg-white rounded-md p-2 m-3 font-sans md:w-96 w-auto hover:shadow-md transition-all'>
            <div className='flex items-center justify-center relative'>
                <IonImg className='product-image' style={{
                    height: '400px',
                    width: '80%',

                }} src={image} alt={title} ></IonImg>
                <span className='text-black mr-3 absolute text-2xl font-bold bottom-0 right-0 bg-green-500 rounded-md px-2'>${price}</span>
            </div>
            <div className='border-t-2 border-separate mt-5 p-2 flex flex-col'>
                <span className='text-black font-bold text-lg'>{title}</span>

                <span className='bg-gray-600 text-white max-w-max px-4 py-2 rounded-lg text-sm mt-2 capitalize shadow-md'>{category}</span>
                <p className='text-gray-700 mt-3 font-medium truncate-text'>{description}</p>
                <div className='ml-auto'>
                    <IonButton id='addcarttoast' data-testid="add-cart-button" size="small" onClick={addProductCart}>
                        Agregar
                        <IonIcon slot="end" icon={cartOutline}></IonIcon>
                    </IonButton>
                </div>
            </div>

        </IonCard>
    )
}
