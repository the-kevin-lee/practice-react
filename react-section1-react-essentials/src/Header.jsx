import './Header.css';

const Header = () => {

    const date = new Date().toString();


    return (
        <>
            <div className="header">
                <h1>
                    Kevin's Social Media App
                </h1>
                <h2>{date}</h2>

            </div>
        
        </>
    )

};

export default Header;