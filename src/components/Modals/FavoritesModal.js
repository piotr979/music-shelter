import classes from '../../assets/scss/modals/FavoritesModal.module.scss';
import FavList from './FavList';
const FavoritesModal = (props) => {

   
    return (
        <div className={`container ${classes['favorites-modal']}` }>
            <div className="row mt-2">
                <div className="col-8">
                        <h2 className="fw-bold">Favorites</h2>
                </div>
                <div className="col-4 d-grid justify-content-md-end" >
                        <button 
                            onClick={props.handleClose} 
                            className="btn btn-danger">
                                Close
                        </button>
                </div>
            </div>
            <div className="row">
                <FavList />

            </div>
        </div>
    )
}

export default FavoritesModal;
