import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const UserInfoPage = () => {
    // We'll use the history to navigate the user
    // programmatically later on (we're not using it yet)
    const history = useHistory();

    // These states are bound to the values of the text inputs
    // on the page (see JSX below). 
    const [nameValue, setNameValue] = useState('');
    const [userNameValue, setUserNameValue] = useState('');
    const [fromAddressValue, setFromAddressValue] = useState('');
    const [toAddressValue, setToAddressValue] = useState('');
    const [cityValue, setCityValue] = useState('');
    const [stateValue, setStateValue] = useState('');
    const [startingDateValue, setStartingDateValue] = useState('');
    const [returingDateValue, setReturingDateValue] = useState('');
    const [adultsValue, setAdultsValue] = useState('');
    const [childrenValue, setChildrenValue] = useState('');
    


    // These state variables control whether or not we show
    // the success and error message sections after making
    // a network request (see JSX below).
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    // This useEffect hook automatically hides the
    // success and error messages after 3 seconds when they're shown.
    // Just a little user interface improvement.
    useEffect(() => {
        if (showSuccessMessage || showErrorMessage) {
            setTimeout(() => {
                setShowSuccessMessage(false);
                setShowErrorMessage(false);
            }, 3000);
        }
    }, [showSuccessMessage, showErrorMessage]);

    const saveChanges = async () => {
        // Send a request to the server to
        // update the user's info with any changes we've
        // made to the text input values
        alert('Save functionality not implemented yet');
    }

    const logOut = () => {
        // We'll want to log the user out here
        // and send them to the "login page"
        alert('Log out functionality not implemented yet');
    }
    
    const resetValues = () => {
        // Reset the text input values to
        // their starting values (the data we loaded from the server)
        alert('Reset functionality not implemented yet');
    }
    
    // And here we have the JSX for our component. It's pretty straightforward
    return (
        <div className="content-container">
            <h1>Info for ______</h1>
            {showSuccessMessage && <div className="success">Successfully saved user data!</div>}
            {showErrorMessage && <div className="fail">Uh oh... something went wrong and we couldn't save changes</div>}
            <label>
                Name
                <input
                    onChange={e => setNameValue(e.target.value)}
                    value={nameValue} />
            </label>
            <label>
                Username
                <input
                    onChange={e => setUserNameValue(e.target.value)}
                    value={userNameValue} />
            </label>
            <label>
                From Address
                <input
                    onChange={e => setFromAddressValue(e.target.value)}
                    value={fromAddressValue} />
            </label>
            <label>
                To Address
                <input
                    onChange={e => setToAddressValue(e.target.value)}
                    value={toAddressValue} />
            </label>
            <label>
                City
                <input
                    onChange={e => setCityValue(e.target.value)}
                    value={cityValue} />
            </label>
            <label>
              State
                <input
                    onChange={e => setStateValue(e.target.value)}
                    value={stateValue} />
            </label>
            <label>
                Starting Date
                <input
                    onChange={e => setStartingDateValue(e().target.value)}
                    value={startingDateValue} />
            </label>
            <label>
                Returning Date
                <input
                    onChange={e => setReturingDateValue(e.target.value)}
                    value={returingDateValue} />
            </label>
            <label>
               Number Of Adults
                <input
                    onChange={e => setAdultsValue(e.target.value)}
                    value={adultsValue} />
            </label>
            <label>
               Number Of Children
                <input
                    onChange={e => setChildrenValue(e.target.value)}
                    value={childrenValue} />
            </label>





            <hr />
            <button onClick={saveChanges}>Save Changes</button>
            <button onClick={resetValues}>Reset Values</button>
            <button onClick={logOut}>Log Out</button>
        </div>
    );
}