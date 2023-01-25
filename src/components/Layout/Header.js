import classes from './../../assets/scss/layout/Header.module.scss';
import ButtonFavorites
 from '../UI/ButtonFavorties';
 
const Header = () => {
    return (
        <header className="row">
            <div className="col d-flex align-items-center justify-content-between">
                <div>
            <h1 className={`fs-1 fw-bold pt-2 mb-0 ${classes.header__logo}` }>
                    Music<span className="color-primary">shelter</span>
            </h1>
            <p><small className="text-body-secondary">Based on theAudioDB.com artists database</small></p>
            </div>
                <ButtonFavorites />
            </div>
        </header>
        
    )
}

export default Header;
