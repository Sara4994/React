import React from 'react';
import {Route} from 'react-router-dom';

const ChatComponent = () => {
    return(
        <fragment>
            <div className="chat__sidebar">
                <h3>Channel</h3>
                <div id="channels"></div>
                <h3>People</h3>
                <div id="users"></div>

            </div>

            <div className="chat__main">
                <ol id="messages" className="chat__messages"></ol>
                <div className="chat__footer">
                    <form id="message-form">
                        <input name="message" type="text" placeholder="Message" autofocus autocomplete="off" />
                        <button>Send</button>
                    </form>
                    {/* <!-- <button id="send-location">Send Location</button> --> */}
                </div>
            </div>
            <switch>
        <Route path="/chat" component={ChatComponent} />
        
      </switch>
        </fragment>
    )
    
}

export default ChatComponent;