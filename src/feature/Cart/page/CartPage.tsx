import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { CartList } from '../components/CartList';


export default function CartPage(){
 

  return (
    <IonPage>
      <IonHeader class='ion-text-center'>
        <IonToolbar >
          <IonTitle data-testid='title-Card-view' className='font-semibold text-2xl'>Carrito de Compras</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <CartList/>
      </IonContent>
    </IonPage>
  );
};


