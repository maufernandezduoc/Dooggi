import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import CardCuidadores from '../components/CardCuidadores';
import CardPerfil from '../components/CardPerfil';
import CardPet from '../components/CardPet';
import Mapa from '../components/Mapa';
import { useHistory } from 'react-router';
// Home.tsx

import React from 'react';


const Home: React.FC = () => {

  const history = useHistory();


  return (
    <IonPage>
      
      <IonContent>
        <IonHeader>
        <IonToolbar>
          <IonTitle>Doggy</IonTitle>
        </IonToolbar>
      </IonHeader>
        <div><CardPerfil /></div>
        <div><CardPet /></div>
        <div><Mapa /></div>
        <div><CardCuidadores /></div>,
        
        
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
