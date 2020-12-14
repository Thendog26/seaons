import React from 'react'; 

// Spinner Component (with prop for custom message)
const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.message}
            </div>
        </div>
    )
};

// Default spinner message
Spinner.defaultProps = {
    message: "Loading..."
};

export default Spinner;