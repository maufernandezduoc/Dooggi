// Importa las bibliotecas y componentes necesarios
import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';
import { useHistory } from 'react-router'; // Importa useHistory para la navegación
import './Login.css'; // Importa tu archivo CSS personalizado

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Obtiene el objeto history para la navegación
  const history = useHistory();

  const handleLogin = () => {
    // Simula una autenticación exitosa (deberás reemplazar esto con tu propia lógica)
    const isAuthenticationSuccessful = true;

    if (isAuthenticationSuccessful) {
      // Si la autenticación es exitosa, navega a la página de inicio
      history.push('/home');
    } else {
      // Maneja la autenticación fallida, muestra un mensaje de error o realiza otra acción
      console.error('Error de autenticación');
    }
  };

  return (
    <IonPage>
      <IonContent>
        <div className="login-background">
          <IonGrid className="login-container">
            <IonRow>
              <IonCol size="12">
                <form onSubmit={handleLogin}>
                  <IonInput
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onIonChange={(e) => setEmail(e.detail.value!)}
                  />
                  <IonInput
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onIonChange={(e) => setPassword(e.detail.value!)}
                  />
                  <IonButton expand="full" type="submit">
                    Iniciar Sesión
                  </IonButton>
                </form>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
