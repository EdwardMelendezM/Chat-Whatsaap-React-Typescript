import { IonIcon } from '@ionic/react';
interface Data{
  id:string;
  name:string;
}
export default function Users() {
  return(
    <div className="containerChat_User_Container_Users_user">
              <div className="containerChat_User_Container_Users_user_img">
                <img
                  src="userImage.jpg"
                  alt="user"
                  className="containerChat_User_Container_Users_user_img"
                />
                <IonIcon icon="ellipse-outline"></IonIcon>
              </div>
              <div className="containerChat_User_Container_Users_user_text">
                <p className="containerChat_User_Container_Users_user_text_name">
                  Alberto Fujimori
                </p>
                <p className="containerChat_User_Container_Users_user_text_fecha">
                  Hour ago
                </p>
              </div>
            </div>
  )
}
