import "./styles/inputnewtext.css"
import { IonIcon } from '@ionic/react';
import { ChangeEvent, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";
interface EmojiString{
  emoji:string;
}
export default function InputNewText() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [formInput, setFormInput] = useState<string>("");
  const [activeEmojis, setActiveEmojis] = useState<Boolean>(false);
  const handleClickOpenEmojis=()=>{
    setActiveEmojis(!activeEmojis) 
  }
  const handleEmojiGetClick =({emoji}:EmojiString)=>{
    setFormInput(formInput=>formInput+emoji)
    inputRef.current && (inputRef.current.focus());
  }
  const handleChangeInputForm = (e:ChangeEvent<HTMLInputElement>) => {
    setFormInput(e.target.value);
  }
  return( 
    <div className="containerChat_User_Container_footer">
      {activeEmojis && <div className="containerChat_User_Container_footer_emojis">
        <EmojiPicker  onEmojiClick={handleEmojiGetClick}/>
      </div>}
      <IonIcon icon="add-outline" className="icon_add"></IonIcon>
      <input
          type="text"
          className="containerChat_User_Container_footer_input"
          ref={inputRef}
          value={formInput}
          onChange={handleChangeInputForm}
      />
      <IonIcon icon="happy-outline" onClick={handleClickOpenEmojis}></IonIcon>
      <IonIcon icon="send-outline"></IonIcon>

    </div>
  )
};
