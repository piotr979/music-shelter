import classes from './../../assets/scss/layout/Header.module.scss';
import ReactDOM from 'react-dom';
import ButtonFavorites
 from '../UI/ButtonFavorties';
import React, { useState } from 'react';
import FavoritesModal from '../Modals/FavoritesModal';
 
const Header = () => {

    const [isModalOpen, setModalOpen] = useState(false);
    
    const handleModal = () => {
        isModalOpen ? setModalOpen(false) : setModalOpen(true)
    }
    return (
        <React.Fragment>
            { 
            isModalOpen &&
            ReactDOM.createPortal(<FavoritesModal handleClose={handleModal} />,
             document.getElementById("modals"))
            }

        <header className="row">
            <div className="col d-flex align-items-center justify-content-between">
                <div>
            <h1 className={`fs-1 fw-bold pt-2 mb-0 ${classes.header__logo}` }>
                    Music<span className="color-primary">shelter</span>
            </h1>
            <p><small className="text-body-secondary">Based on theAudioDB.com</small></p>
            </div>
            <div>
                <ButtonFavorites handleModal={handleModal}/>
                </div>
            </div>
        </header>
        </React.Fragment>
        
    )
}

export default Header;
