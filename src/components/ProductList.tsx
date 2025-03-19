import { IonInfiniteScroll, IonItem, IonList, IonSpinner } from '@ionic/react';
import React, { ReactSVG } from 'react'
import { ProductCard, ProductInterfaceProps } from './ProductCard';

export interface ProductListInterface{
  filterProducts: Omit<ProductInterfaceProps, 'onBuyClick'>[],
  handleBuyClick:()=>void,
  infinitySimulation: () => Promise<void>
}
export const ProductList: React.FC<ProductListInterface> = ({ filterProducts, handleBuyClick, infinitySimulation }) => {
  return (
    <div>
      <IonList role="region"  class='flex flex-wrap  justify-center items-stretch'>
        {
          filterProducts.map((item, index) => {
            return (
              <IonItem lines='none' key={index} >
                <ProductCard {...item} index={index} onBuyClick={handleBuyClick} />
              </IonItem>
            );
          })
        }
      </IonList>
      <IonInfiniteScroll onIonInfinite={async (event) => {
        await infinitySimulation()
        setTimeout(() => event.target.complete(), 3000)
      }}>
        <div className="infinite-scroll-content">
          <IonSpinner name="circular"></IonSpinner>
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><linearGradient id="a8"><stop offset="0" stop-color="#FFFFFF" stop-opacity="0"></stop><stop offset="1" stop-color="#FFFFFF"></stop></linearGradient><circle fill="none" stroke="url(#a8)" stroke-width="15" stroke-linecap="round" stroke-dasharray="0 44 0 44 0 44 0 44 0 360" cx="100" cy="100" r="70" transform-origin="center"><animateTransform type="rotate" attributeName="transform" calcMode="discrete" dur="2" values="360;324;288;252;216;180;144;108;72;36" repeatCount="indefinite"></animateTransform></circle></svg> */}

        </div>

      </IonInfiniteScroll>
    </div>
  )
}
