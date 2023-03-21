export default function TextChat() {
  return(
    <div className="containerChat_Messages_body">
      <div className="containerChat_Messages_body_message">
        <div
          className="containerChat_Messages_body_message_user"
          id="you other"
        >
          <div className="containerChat_Messages_body_message_user_text">
            <p className="containerChat_Messages_body_message_user_text_p">
                  Hi bro, how are you?
            </p>
            <p className="containerChat_Messages_body_message_user_text_date">
                  10:10
            </p>
          </div>
        <div className="containerChat_Messages_body_message_user_img">
          <img src="userImage.jpg" alt="" id="userImagePhoto" />
        </div>
      </div>
    </div>
  </div>
  )
};
