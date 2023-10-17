import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonButton,
} from '@ionic/react';

import './CardPerfil.css'; // Importa tu archivo CSS personalizado

const Home: React.FC = () => {
  return (
    <IonCard>
      <div className="profile-image-container">
        <img
          src="/assets/perfil.jpg"
          alt="Perfil"
          className="profile-image"
        />
      </div>
      <IonCardHeader>
        <IonCardSubtitle>Aquí va la foto</IonCardSubtitle>
        <IonCardTitle>Mauricio Fernandez</IonCardTitle>
      </IonCardHeader>
    </IonCard>
  );
};

export default Home;
