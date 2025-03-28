import { useState } from 'react'
import { IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { Categories } from '../components/Categories'
import { ProductList } from '../components/ProductList'
import { CartIcon } from '../../../components/CartIcon'
import { InfinityScroll } from '../components/InfinityScroll'
import { AddProductNotification } from '../../../components/AddProductNotification'
import { useProducts } from '../hooks/useProducts'
import '../styles/Products.css'


export default function ProductsPage() {
    const [category, setcategory] = useState('all')
    const { products, handleLoadMoreProducts } = useProducts(category)




    return (

        <IonPage>
            <IonHeader id='header' class='ion-text-center ion-no-border bg-red-500' translucent={true}>
                <IonToolbar class='ion-padding px-2' >
                    <IonTitle class='font-bold text-2xl' data-testid='title-products-view'>Lista de productos</IonTitle>
                    <IonButtons slot="end">
                        <CartIcon />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen >


                <Categories category={category} setCategory={setcategory} />
                <ProductList Products={products} />
                <InfinityScroll handleproducts={handleLoadMoreProducts} lengthProducts={products.length} category={category} />
                <AddProductNotification />

            </IonContent>
        </IonPage>

    )
}
