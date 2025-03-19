import { IonButton, IonCard, IonCardContent, IonCardHeader, IonChip, IonIcon, IonImg } from '@ionic/react'
import { cartOutline } from 'ionicons/icons'
import React from 'react'
import { useCartStore } from '../store/useCartStore'
interface ProductInterface {
    id: number,
    title: string,
    description: string,
    price: GLfloat,
    category: string,
    image: string,
    onBuyClick: () => void
}
export const ProductCard: React.FC<ProductInterface> = ({ id, title, price, description, category, image, onBuyClick }) => {
    const {addCart} = useCartStore()

    function addProductCart(){
        addCart({id,title,price,description,category,image})
        onBuyClick()
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
            <div className='border-t-2 border-separate mt-5 p-2 flex flex-col justify-end'>
                <span className='text-black font-bold text-lg'>{title}</span>

                <span className='bg-gray-600 text-white max-w-max px-4 py-2 rounded-lg text-sm mt-2 capitalize shadow-md'>{category}</span>
                <p className='text-gray-700 mt-3 font-medium truncate-text'>{description}</p>
                <div className='ml-auto'>
                    <IonButton id='addcarttoast' size="small" onClick={addProductCart}>
                        Agregar
                        <IonIcon slot="end" icon={cartOutline}></IonIcon>
                    </IonButton>
                </div>
            </div>

        </IonCard>
    )
}
