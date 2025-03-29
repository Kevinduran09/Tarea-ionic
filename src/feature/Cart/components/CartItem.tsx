import { IonButton, IonIcon, IonItem } from '@ionic/react'
import React from 'react'
import { trashOutline } from 'ionicons/icons';
interface CartItemProps {
    item: {
        price: number;
        image: string;
        title: string;
    };
    index: number;
    removeCart: (index: number) => void;
}

export const CartItem: React.FC<CartItemProps> = ({ item, index, removeCart }) => {
    return (
        <IonItem key={index}>
            <div className='flex flex-row py-2 px-1 w-full shadow-lg border-2 border-gray-300 rounded-lg'>
                <div className='w-1/3 h-full '>
                    <img src={item.image} alt="" className='w-full h-full' />
                </div>
                <div className='flex flex-col w-full py-2 px-2 gap-2'>
                    <div>
                        <h2 className='text-black font-semibold'>Nombre Producto:</h2>
                        <span className='text-gray-800'>{item.title}</span>
                    </div>
                    <div>
                        <h2 className='text-black font-semibold'>Precio:</h2>
                        <span className='text-gray-500 font-semibold'>{item.price} $</span>
                    </div>
                </div>
                <div className='flex flex-col justify-end items-center w-1/4'>
                    <IonButton data-testid='remove-cart-button' color="danger" onClick={() => removeCart(index)}>
                        <IonIcon className='mr-1' slot="icon-only" icon={trashOutline} />
                        Eliminar
                    </IonButton>
                </div>
            </div>

        </IonItem>
    )
}
