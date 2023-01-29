import { useContext } from 'react';
import classes from '../../assets/scss/ui/ImageThumb.module.scss';
import DataContext from '../../store/data-context';

const ImageThumb = (props) => {

    const favCtx = new useContext(DataContext);

    return (
        <div className="col-6 col-md-4 col-lg-3 text-center">
            <a href={`/artist/${props.id}`} >
                <img src={props.image} className={classes.image} alt="music item" />
            </a>
            <button 
                onClick={() => favCtx.addToFav(props.item)} 
                className="btn btn-outline-primary btn-sm mt-3 mb-4"
                disabled={ props.disabled && 'disabled'}>Add to fav
                </button>
        </div>
    )
}

export default ImageThumb;