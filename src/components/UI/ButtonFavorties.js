import './../../assets/scss/ui/ButtonFavorites.module.scss';

const ButtonFavorites = ({handleModal}) => {

    return (
        <div>
        <button onClick={handleModal} className="btn btn-secondary mt-1">Favorites</button>
        </div>
    )
}

export default ButtonFavorites;
