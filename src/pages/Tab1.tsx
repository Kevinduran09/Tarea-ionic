import { IonCol, IonContent, IonGrid, IonHeader, IonItem, IonList, IonPage, IonRow, IonTitle, IonToolbar, IonSegment, IonSegmentButton, IonLabel, IonInfiniteScroll, IonInfiniteScrollContent, IonSpinner, IonToast, IonButtons, IonIcon, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { useEffect, useState } from 'react';
import { ProductCard, ProductInterfaceProps } from '../components/ProductCard';
import { waitFor } from '@testing-library/react';
import { cartOutline } from 'ionicons/icons';
import { useCartStore } from '../store/useCartStore';
import { ProductList } from '../components/ProductList';

const Tab1: React.FC = () => {
  const history = useHistory();
  const [products, setProducts] = useState<Omit<ProductInterfaceProps, 'onBuyClick'>[]>([])
  const [filterProducts, setfilterProducts] = useState<Omit<ProductInterfaceProps, 'onBuyClick'>[]>([])
  const [category, setCategory] = useState<string>('')
  const [showToast, setShowToast] = useState(false);
  const { quantity } = useCartStore()
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://fakestoreapi.com/products');

      if (!response) {
        throw new Error("Error to fetch data");
      }
      const data = await response.json()
      setProducts(data)
      setfilterProducts(data)

    };
    fetchData();
  }, []);

  const filterProduct = (category: string) => {


    if (category === 'all') {
      setfilterProducts(products)
      return
    }
    const filterdata = products.filter((prod) => prod.category === category)
    setfilterProducts(filterdata)
  }
  async function infinitySimulation() {
    const response = await fetch('https://fakestoreapi.com/products')

    if (response) {
      const data = await response.json()
      if (category === 'all' || category === '') {
        setfilterProducts((prev) => [...prev, ...data])
      }
      else {

        console.log(typeof category);

        const new_data = data.filter((prod: Omit<ProductInterfaceProps, 'onBuyClick'>) => prod.category === category)
        console.log(new_data);


        setfilterProducts((prev) => [...prev, ...new_data])
      }
    }
  }


  function getCategories() {
    const categories = products.map((product) => product.category)
    return [...new Set(categories)]
  }

  const handleBuyClick = () => {
    setShowToast(true);
  };

  return (
    <IonPage>
      <IonHeader id='header' class='ion-text-center ion-no-border bg-red-500' translucent={true}>
      <IonToolbar class='ion-padding px-2' >
          <IonTitle class='font-bold text-2xl' data-testid='title-products-view'>Lista de productos</IonTitle>
        <IonButtons slot="end">
          <IonButton onClick={() => history.push('/cart')}>
          {quantity() > 0 && (
            <span className='absolute -top-1 -right-1 bg-red-600 text-white rounded-full px-1 text-xs'>{quantity()}</span>
          )}
          <IonIcon slot="icon-only" icon={cartOutline}></IonIcon>
          </IonButton>
        </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen >
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonSegment color={'medium'} class='text-xs flex flex-wrap' value={category} onIonChange={(e) => { setCategory(e.detail.value as string); filterProduct(e.detail.value as string); }}>
                <IonSegmentButton value="all" >
                  <IonLabel className='segment-label'>All</IonLabel>
                </IonSegmentButton>
                {getCategories().map((category: string) => (
                  <IonSegmentButton key={category} value={category}>
                    <IonLabel className='segment-label'>{category}</IonLabel>
                  </IonSegmentButton>
                ))}
              </IonSegment>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <ProductList filterProducts={filterProducts} handleBuyClick={handleBuyClick} infinitySimulation={infinitySimulation}/>
            </IonCol>
          </IonRow>
        </IonGrid>


        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Producto añadido al carrito"
          duration={2000}
          color="success"
          position="top"
          className='custom-toast w-2/4 m-auto md:ml-64'
        />

      </IonContent>
    </IonPage>
  );
};

export default Tab1;


