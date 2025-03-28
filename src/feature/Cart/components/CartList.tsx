import { IonButton, IonItem, IonList } from '@ionic/react'
import React from 'react'
import { useCartStore } from '../../../store/useCartStore';
import { CartItem } from './CartItem';

export const CartList = () => {
    const { cart, removeCart } = useCartStore();
    return (
        <>
            {cart.length > 0 ? (
                <IonList>
                    {cart.map((item, index) => (
                        <CartItem key={index} item={item} index={index} removeCart={removeCart} />
                    ))}
                </IonList>
            ) : (
                <div className='flex flex-col justify-center items-center mt-5'>
                    <h1 className='text-2xl font-bold'>No hay productos en el carrito</h1>
                    <IonButton routerLink='/products' className='mt-5'>Ir a comprar</IonButton>
                </div>
            )}
        </>
    )
}
