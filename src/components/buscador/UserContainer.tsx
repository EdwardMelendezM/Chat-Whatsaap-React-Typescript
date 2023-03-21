import { IonIcon } from "@ionic/react";
import BuscadorUser from "./BuscadorUser";
import Users from "./Users";

export default function UserContainer() {
  
  return(
    <div className="containerChat_User_Container">
          <div className="containerChat_User_Container_title">
            <p className="containerChat_User_Container_titulo_p">Chat</p>
            <IonIcon  name="ellipsis-horizontal-outline"></IonIcon >
          </div>
          <BuscadorUser/>
          <div className="containerChat_User_Container_Users">
            <Users/>
            <Users/>
          </div>
        </div>
  )
};
