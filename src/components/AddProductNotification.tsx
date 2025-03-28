import { IonToast } from '@ionic/react'
import React, { useEffect } from 'react'
import { useCartStore } from '../store/useCartStore'

export const AddProductNotification = () => {
    const {showToast,hideToast} = useCartStore()

    useEffect(()=>{
        if (showToast) {
            setTimeout(() => {
                hideToast();
            }, 2000); 
        }
    },[showToast,hideToast])
  return (
      <IonToast
          isOpen={showToast}
          onDidDismiss={() => hideToast}
          message="Producto añadido al carrito"
          duration={2000}
          color="success"
          position="top"
          className=''
      />
  )
}
