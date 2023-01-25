import classes from '../../assets/scss/ui/ImageThumb.module.scss';


const ImageThumb = (props) => {
    return (
        <img src={props.imageUrl} className={classes.imageThumb} alt="music item"/>
    )
}

export default ImageThumb;