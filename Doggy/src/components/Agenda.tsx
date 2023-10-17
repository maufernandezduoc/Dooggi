import { IonButton, IonCard, IonCardHeader, IonCardContent, IonDatetime, IonItem, IonLabel } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import './agenda.css';

function Example() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString());
  const [selectedHours, setSelectedHours] = useState<string[]>([]);
  const [isDateAvailable, setIsDateAvailable] = useState(false);
  const [selectedHourIndex, setSelectedHourIndex] = useState(-1);
  const [isHourSelected, setIsHourSelected] = useState(false);

  const availableDates = [
    {
      from: '2023-10-05T10:00',
      to: '2023-10-05T11:00',
    },
    {
      from: '2023-10-05T11:00',
      to: '2023-10-05T12:00',
    },
    {
      from: '2023-10-06T14:30',
      to: '2023-10-06T15:30',
    },
    // Agrega más fechas y horas disponibles según tus necesidades
  ];

  const highlightedDates = availableDates.map(dateRange => {
    return {
      date: dateRange.from.split('T')[0],
      textColor: 'var(--ion-color-primary)',
      backgroundColor: 'var(--ion-color-secondary)',
    };
  });

  const handleDateChange = (event: CustomEvent) => {
    const newDate = new Date(event.detail.value);
    setSelectedDate(newDate.toISOString().split('T')[0]);
  };

  const handleHourSelect = (index: number) => {
    setSelectedHourIndex(index);
    setIsHourSelected(true);
  };

  const handleChooseHour = () => {
    if (selectedHourIndex !== -1) {
      // Obtiene las horas exactas seleccionadas
      const fromTime = selectedHours[selectedHourIndex].split(' - ')[0];
      const toTime = selectedHours[selectedHourIndex].split(' - ')[1];

      // Obtiene la fecha seleccionada
      const formattedSelectedDate = selectedDate.split('T')[0];

      // Construye el JSON correspondiente con ambas horas
      const selectedDateTime = {
        from: `${formattedSelectedDate}T${fromTime}`,
        to: `${formattedSelectedDate}T${toTime}`,
      };

      // Muestra la hora seleccionada en la interfaz
      console.log("Hora seleccionada:", fromTime);

      // Imprime el JSON en la consola
      console.log("JSON seleccionado:", selectedDateTime);

      setIsHourSelected(false); // No es necesario mantenerlo como seleccionado
    }
  };

  useEffect(() => {
    const formattedSelectedDate = selectedDate.split('T')[0];
    const selectedDateRanges = availableDates
      .filter((item) => formattedSelectedDate === item.from.split('T')[0])
      .map((item) => {
        const fromTime = new Date(item.from).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const toTime = new Date(item.to).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return `${fromTime} - ${toTime}`;
      });

    setSelectedHours(selectedDateRanges);
    setIsDateAvailable(selectedDateRanges.length > 0);
  }, [selectedDate]);

  return (
    <div>
      <IonCard>
      <IonCardContent>
      <IonDatetime
        firstDayOfWeek={1}
        presentation="date"
        onIonChange={handleDateChange}
        value={selectedDate}
        showDefaultButtons={true}
        highlightedDates={highlightedDates}
      >
        <span slot="title">Selecciona día</span>
      </IonDatetime>
      </IonCardContent>
      </IonCard>

      {selectedDate && (
        <IonCard>
          
          <IonCardHeader>
            <h2>Horas disponibles:</h2>
          </IonCardHeader>
          <IonCardContent>
            {isDateAvailable ? (
              selectedHours.map((dateAndTime, index) => (
                <IonItem
                  key={index}
                  onClick={() => handleHourSelect(index)}
                  className={index === selectedHourIndex ? 'selected-hour' : ''}
                >
                  <IonLabel>{dateAndTime}</IonLabel>
                </IonItem>
              ))
            ) : (
              <p>No hay horas disponibles para esta fecha.</p>
            )}
            {isHourSelected && (
              <IonButton onClick={handleChooseHour}>Elegir hora</IonButton>
            )}
          </IonCardContent>
        </IonCard>
      )}
    </div>
  );
}

export default Example;
