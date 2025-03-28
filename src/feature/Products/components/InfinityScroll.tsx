import { IonInfiniteScroll, IonSpinner } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { fetchProductByCategory, fetchProducts } from '../service/ProductsApi'
import { ProductInterface } from '../domain/models'

interface InfinityScrollProps {
    handleproducts: (products: ProductInterface[]) => void
    lengthProducts: number
    category: string
}

export const InfinityScroll: React.FC<InfinityScrollProps> = ({ handleproducts, lengthProducts, category }) => {
    const [hasMoreData, setHasMoreData] = useState(true)

    async function handleLoadData(event: any) {
        setTimeout(async () => {
            try {
                const currentLength = lengthProducts;
                const newLimit = currentLength + 5;

                const data: ProductInterface[] =
                    category === 'all'
                        ? await fetchProducts(newLimit)
                        : await fetchProductByCategory(category, newLimit);

                console.log(`Actual: ${currentLength}, Total en API: ${data.length}`, data);

                if (data.length <= currentLength) {
                    setHasMoreData(false);
                } else {
                    handleproducts(data.slice(currentLength));
                }

                event.target.complete();
            } catch (error) {
                console.error('Error al cargar más productos:', error);
                event.target.complete();
            }
        }, 1000);
    }

    useEffect(() => {

        setHasMoreData(true)
    }, [category])

    return (
        <IonInfiniteScroll
            onIonInfinite={(event) => handleLoadData(event)}
            disabled={!hasMoreData}
        >
            <div className="infinite-scroll-content">
                <IonSpinner name="circular" />
            </div>
        </IonInfiniteScroll>
    )
}
