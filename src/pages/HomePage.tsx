import { 
  IonContent, 
  IonFab, 
  IonFabButton, 
  IonHeader, 
  IonIcon, 
  IonImg, 
  IonItem, 
  IonLabel, 
  IonList, 
  IonPage, 
  IonThumbnail, 
  IonTitle, 
  IonToolbar
} from '@ionic/react';
import { add as addIcon } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase';
import { collection, query, limit, onSnapshot, orderBy } from '@firebase/firestore';
import { Entry, toEntry } from '../models';
import { useAuth } from '../auth';
import { formatDate } from '../date';

const HomePage: React.FC = () => {
  const { userId } = useAuth();
  const [ entries, setEntries ] = useState<Entry[]>([]);
  useEffect(() => {
    const entriesRef = collection(firestore, 'users', userId, 'entries');
    const entriesQuery = query(entriesRef, orderBy('date', 'desc'), limit(7))
    return onSnapshot(entriesRef, ({ docs }) => setEntries(docs.map(toEntry)));
  }, [userId]);

  // console.log('[HomePage] render entries:', entries);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Daily Moments</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          {entries.map((entry) =>
            <IonItem button key={entry.id}
              routerLink={`/my/entries/view/${entry.id}`}>
                <IonThumbnail slot="end">
                  <IonImg src={entry.pictureUrl} />
                </IonThumbnail>
              <IonLabel>
                <h2>{formatDate(entry.date)}</h2>
                <h3>{entry.title}</h3>
              </IonLabel>
            </IonItem>
          )}
        </IonList>
        <IonFab  vertical="bottom" horizontal="end" >
          <IonFabButton routerLink="/my/entries/add">
            <IonIcon icon={addIcon} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
