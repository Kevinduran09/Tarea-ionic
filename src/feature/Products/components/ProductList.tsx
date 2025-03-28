import { IonInfiniteScroll, IonItem, IonList, IonSpinner } from '@ionic/react';
import React, { ReactSVG, useEffect } from 'react'
import { ProductInterface } from '../domain/models';
import { ProductCard } from './ProductCard';
interface ProductListProps {
  Products: ProductInterface[];
}

export const ProductList: React.FC<ProductListProps> = ({ Products }) => {

  useEffect(() => { }, [Products])
  return (

    <IonList role="region" class='flex flex-wrap  justify-center items-stretch mt-5'>
      {
        Products.map((item, index) => {
          return (
            <IonItem lines='none' key={index} >
              <ProductCard {...item} index={index} />
            </IonItem>
          );
        })
      }
    </IonList>


  )
}
