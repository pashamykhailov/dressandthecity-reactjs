// import logo from './logo.svg';
import desktopGirlsPhoto from "./assets/img/desktop/girls_photo.png";
import desktopLetter from "./assets/img/desktop/letter_big.jpg";
import mobileInstagramSmall from "./assets/img/mobile/instagram_small.png";
import desktopLogoBig from "./assets/img/desktop/logo_big.png";

import './App.css';

function App() {
  return (
    <div className='wrapper'>
        <div className="container-big container-fluid">
            <div className="row">
                <div className="inner-wrapper">
                    <div className="logo">
                        <img
                            src={desktopLogoBig}
                            alt="dress in the city logo"
                        />
                        <div className="social-icons">
                            <a href="https://instagram.com/dressandthecity.ua">
                                <img
                                    src={mobileInstagramSmall}
                                    alt="instagram link"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="main-section-wrapper">
                        <div className="letter">
                            <img
                                src={desktopLetter}
                                alt="about us"
                            />
                        </div>
                        <div className="photo">
                            <img
                                src={desktopGirlsPhoto}
                                alt="girls"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- NOTE: container small --> */}
        <div className="container-small container-fluid">
            <div className="row">
                <div className="inner-wrapper">
                    <div className="logo">
                        <img
                            src={desktopLogoBig}
                            alt="dress in the city"
                        />
                    </div>
                    <div className="social-icons">
                        <a href="https://instagram.com/dressandthecity.ua">
                            <img
                                src={mobileInstagramSmall}
                                alt="instagram link"
                            />
                        </a>
                    </div>
                    <div className="letter">
                        <img
                            src={desktopLetter}
                            alt="about us"
                        />
                    </div>
                    <div className="photo">
                        <img
                            src={desktopGirlsPhoto}
                            alt="girls"
                        />
                    </div>
                </div>
            </div>
        </div>

    </div>
  );
}

export default App;
