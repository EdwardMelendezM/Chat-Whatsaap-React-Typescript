import { IonIcon } from '@ionic/react';
export default function BuscadorUser() {
  return(
    <div className="containerChat_User_Container_buscador">
            <input
              type="text"
              className="containerChat_User_Container_buscador_input"
              placeholder="Search name"
            />
            <IonIcon  name="search-outline"></IonIcon >
          </div>
  )
};
