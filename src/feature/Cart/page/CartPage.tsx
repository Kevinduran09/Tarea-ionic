import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton } from '@ionic/react';
import { useCartStore } from '../../../store/useCartStore';
import { CartList } from '../components/CartList';


export default function CartPage(){
 

  return (
    <IonPage>
      <IonHeader class='ion-text-center'>
        <IonToolbar >
          <IonTitle className='font-semibold text-2xl'>Carrito de Compras</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <CartList/>
      </IonContent>
    </IonPage>
  );
};


