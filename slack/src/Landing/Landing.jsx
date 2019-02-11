import React from 'react';
import {Redirect, Link} from 'react-router-dom';




const Landing = (props) => {
    return (
        <fragment className="centered-form">
            <div className="centered-form__form">
                <form>
                    <div className="form-field">
                        <label>Display Name</label>
                        <input type="text" name="name" autoFocus/>
                    </div>
                    <div className="form-field">
                        <label>Channel Name</label>
                        <select name="channel" required>
                            <option value="" disabled selected></option>
                            <option value="#general">#general</option>
                            <option value="#random">#random</option>
                        </select>
                    </div>
                    <div className="form-field">
                        <button><Link to="/chat">Join</Link></button>
                    </div>              
                </form>
                <switch>
        
        <Redirect from="/" to="/chat"/>
      </switch>
            </div>            
        </fragment>
    )
}

export default Landing;