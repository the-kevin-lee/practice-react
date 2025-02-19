import './TabButton.css';

const TabButton = ({children}) => {

    return (
        <li><button id="tab-button">{children}</button></li>
    )

};

export default TabButton;