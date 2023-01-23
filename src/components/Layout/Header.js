import classes from './../../assets/scss/layout/Header.module.scss';
import ButtonFavorites
 from '../UI/ButtonFavorties';
const Header = () => {
    return (
        <header className="row">
            <div className="col d-flex align-items-center justify-content-between">
            <h1 className={`fw-bold pt-2 ${classes.header__logo}` }>
                    Music <span className="color-primary">shelter</span>
            </h1>
                <ButtonFavorites />
            </div>
        </header>
        
    )
}

export default Header;
