import { IonIcon } from "@ionic/react";

export default function ButtonCreate() {
  return(
    <button className="container_Chat_User_button">
          <IonIcon  icon="add-outline"></IonIcon >
          <p className="container_Chat_User_button_text">Create New</p>
        </button>
  )
};
