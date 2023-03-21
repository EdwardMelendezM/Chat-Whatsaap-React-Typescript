import "./styles/inputnewtext.css"
import { IonIcon } from '@ionic/react';
import { useState } from "react";
export default function InputNewText() {
  const [activeEmojis, setActiveEmojis] = useState<Boolean>(false);

  return(
    <div className="containerChat_User_Container_footer">
      {activeEmojis && <div className="containerChat_User_Container_footer_emojis">
        <div className="containerChat_User_Container_footer_emojis_input">
          <input type="text" placeholder="Search your emoji"/>
        </div>
        <div className="containerChat_User_Container_footer_emojis_content">
          
        </div>
      </div>}
      <IonIcon icon="add-outline" className="icon_add"></IonIcon>
      <input
          type="text"
          className="containerChat_User_Container_footer_input"
      />
      <IonIcon icon="happy-outline" onClick={()=>setActiveEmojis(!activeEmojis)}></IonIcon>
      <IonIcon icon="send-outline"></IonIcon>

    </div>
  )
};
