import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import CardCuidadoresINF from '../components/CardCuidadoresINF';
import { useHistory } from 'react-router';
import React from 'react';
import Precios from '../components/Precios';
import Agenda from '../components/Agenda';




export const CardCuidadorExp: React.FC = () => {
  const history = useHistory();

  const handleContactClick = () => {
    // Navega a la página de contacto
    history.push('/contact');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Doggy</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div><CardCuidadoresINF /></div> {/* Renderizamos el componente CardCuidadores */}
        <div><Precios /></div>
        <div><Agenda /></div>
      </IonContent>
    </IonPage>
  );
};
