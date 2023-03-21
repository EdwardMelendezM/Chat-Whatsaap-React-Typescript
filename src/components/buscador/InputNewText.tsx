import "./styles/inputnewtext.css"
import { IonIcon } from '@ionic/react';
export default function InputNewText() {
  
  return(
    <div className="containerChat_User_Container_footer">
      <IonIcon icon="add-outline" className="icon_add"></IonIcon>
      <input
          type="text"
          className="containerChat_User_Container_footer_input"
      />
      <IonIcon icon="happy-outline"></IonIcon>
      <IonIcon icon="send-outline"></IonIcon>
    </div>
  )
};
