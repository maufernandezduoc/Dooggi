import React from 'react';
import { useHistory } from 'react-router'; // Asegúrate de que useHistory esté importado desde 'react-router'
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
  const history = useHistory(); // Mueve la declaración de useHistory aquí

 

  return (
    <IonCard>
      <div className="content-container">
        <img
          src="/assets/cuidador.jpg"
          alt="Cuidador"
          className="profile-image"
        />
        <div className="text-container">
          <IonCardHeader>
            <IonCardTitle>Daniela</IonCardTitle>
            <IonCardSubtitle>"Tu mascota está bien cuidada en mis manos"</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Doglover</p>
            <p>Catlover</p>
          </IonCardContent>
         
        </div>
      </div>
    </IonCard>
  );
};

export default Home;
