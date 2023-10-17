import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonButton,
} from '@ionic/react';

import './CardPet.css'; // Importa tu archivo CSS personalizado

const Home: React.FC = () => {
  return (
    <IonCard>
      <div className="content-container">
        <img
          src="/assets/perromascota.avif"
          alt="Mascota"
          className="profile-image"
        />
        <div className="text-container">
          <IonCardHeader>
            <IonCardTitle>Mocka</IonCardTitle>
            <IonCardSubtitle>1 año</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Mocka es un perro raro</p>
          </IonCardContent>
        </div>
      </div>
    </IonCard>
  );
};

export default Home;
