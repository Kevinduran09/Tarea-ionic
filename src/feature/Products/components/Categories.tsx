import { IonSegment, IonSegmentButton, IonLabel } from '@ionic/react';
import React, { useEffect, useState } from 'react'
import { fetchCategories, fetchProductByCategory, fetchProducts } from '../service/ProductsApi';
import { ProductInterface } from '../domain/models';



interface CategoriesProps {

    category?: string;
    setCategory: (category: string) => void;
}

export const Categories: React.FC<CategoriesProps> = ({ category, setCategory }) => {
    const [categories, setcategories] = useState<string[]>([])

    useEffect(() => {
        fetchCategories().then((data: string[]) => setcategories(data)).catch((err: any) => console.error(err))
    }, [])

    function handleCategoryChange(event: any) {
        const selectedCategory = event.detail.value;
        setCategory(selectedCategory);

    }

    return (
        <IonSegment color={'medium'} class='text-xs flex flex-wrap' value={category} onIonChange={(event) => handleCategoryChange(event)}>
            <IonSegmentButton value="all" >
                <IonLabel className='segment-label'>All</IonLabel>
            </IonSegmentButton>
            {
                categories.map((categor) => {
                    return (
                        <IonSegmentButton key={categor} value={categor}>
                            <IonLabel className='segment-label'>{categor}</IonLabel>
                        </IonSegmentButton>
                    )
                })
            }
        </IonSegment>
    )
}
