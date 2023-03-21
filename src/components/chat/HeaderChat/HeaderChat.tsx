import { IonIcon } from '@ionic/react';
export default function HeaderChat() {
  
  return(
    <div className="containerChat_Messages_header">
          <div className="containerChat_Messages_header_content">
            <img
              src="userImage.jpg"
              alt="user"
              className="containerChat_Messages_header_content_img"
            />
            <div className="containerChat_Messages_header_user">
              <p className="containerChat_Messages_header_user_name">Melonie</p>
              <p className="containerChat_Messages_header_user_online">
                Online
              </p>
            </div>
          </div>
          <IonIcon name="ellipsis-horizontal-outline"></IonIcon>
        </div>
  )
};
