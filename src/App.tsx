import {
  IonApp,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonSelect,
  IonSelectOption,
  setupIonicReact,
} from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

interface IOption {
  label: string;
  value: string;
}

const options: IOption[] = [
  { label: 'selected by default', value: '1' },
  { label: 'not selected by default', value: '2' },
];

const selectedOptions = [options[0]];

const compareWith = (a: IOption, b: IOption) => {
  return a.value === b.value;
};

const App: React.FC = () => (
  <IonApp>
    <IonContent>
      <IonList>
        <IonItem>
          <IonLabel>Correct: Select using simple values</IonLabel>
          <IonSelect
            value={selectedOptions.map((option) => option.value)}
            placeholder="Select One"
          >
            {options.map((option) => (
              <IonSelectOption key={option.value} value={option.value}>
                {option.label}
              </IonSelectOption>
            ))}
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonLabel>Correct: Select using objects</IonLabel>
          <IonSelect value={selectedOptions} placeholder="Select One">
            {options.map((option) => (
              <IonSelectOption key={option.value} value={option}>
                {option.label}
              </IonSelectOption>
            ))}
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonLabel>Incorrect: Select using objects and compareWith</IonLabel>
          <IonSelect
            value={selectedOptions}
            compareWith={compareWith}
            placeholder="Select One"
          >
            {options.map((option) => (
              <IonSelectOption key={option.value} value={option}>
                {option.label}
              </IonSelectOption>
            ))}
          </IonSelect>
        </IonItem>
      </IonList>
    </IonContent>
  </IonApp>
);

export default App;
