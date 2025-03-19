import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton } from '@ionic/react';
import { useCartStore } from '../store/useCartStore';


const Cart: React.FC = () => {
  const { cart, removeCart } = useCartStore();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Carrito de Compras</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {cart.map((item, index) => (
            <IonItem key={index}>
              <IonLabel>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p>${item.price}</p>
              </IonLabel>
                  <IonButton color="danger" onClick={() => removeCart(index)}>Eliminar</IonButton>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Cart;
