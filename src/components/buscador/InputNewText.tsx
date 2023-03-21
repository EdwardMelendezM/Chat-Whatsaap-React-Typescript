
import { IonIcon } from '@ionic/react';
export default function InputNewText() {
  
  return(
    <div className="containerChat_User_Container_footer">
          <IonIcon name="add-outline" className="icon_add"></IonIcon>
          <input
            type="text"
            className="containerChat_User_Container_footer_input"
          />
          <IonIcon name="happy-outline"></IonIcon>
          <IonIcon name="send-outline"></IonIcon>
        </div>
  )
};
