import { IonButton, IonIcon } from '@ionic/react'
import React from 'react'
import { useHistory } from 'react-router';
import { useCartStore } from '../store/useCartStore';
import { cartOutline } from 'ionicons/icons';

export const CartIcon = () => {
    const history = useHistory();
      
      const { quantity } = useCartStore()
    return (
        <IonButton onClick={() => history.push('/cart')}>
            {quantity() > 0 && (
                <span className='absolute -top-1 -right-1 bg-red-600 text-white rounded-full px-1 text-xs'>{quantity()}</span>
            )}
            <IonIcon slot="icon-only" icon={cartOutline}></IonIcon>
        </IonButton>
    )
}
