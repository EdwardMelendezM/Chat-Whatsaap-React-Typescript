import "./chat.css";
import InputNewText from "../buscador/InputNewText";
import TextChat from "./TextChat/TextChat";
import HeaderChat from "./HeaderChat/HeaderChat";
import UserContainer from "../buscador/UserContainer";
import ButtonCreate from "../Button/ButtonCreate";

export default function Chat() {
  return (
    <div className="containerChat">
      <div className="containerChat_Users">
        <ButtonCreate/>
        <UserContainer/>
      </div>
      <div className="containerChat_Messages">
        <HeaderChat/>
        <TextChat/>
        <InputNewText/>
      </div>
    </div>
  );
}
