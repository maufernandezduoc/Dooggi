import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';

const Precios = () => {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>Precios</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <ul>
                    <li>5000 por 4 horas</li>
                    <li>15000 día completo</li>
                </ul>
            </IonCardContent>
        </IonCard>
    );
};

export default Precios;
