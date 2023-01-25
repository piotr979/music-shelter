import classes from '../../assets/scss/layout/Figures.module.scss';

const Figures = () => {
    return (
        <div className={classes.figCanvas}>
            <div className={classes['oval-top']}>
                <svg className={classes['oval-size']} height="1200" width="1600">
                    <circle cx="520" cy="250" r="800" strokeWidth="0" fill="#FAF6FF"></circle>
                </svg></div><div className={classes['circle-top-1']}>
                <svg className={classes['oval-size']} height="1400" width="1200">
                    <circle className={classes['circle-path-anim-1']} cx="200" cy="590" r="800" strokeWidth="4" stroke="#FAF6FF" fill="#red" fillOpacity="0"></circle>
                </svg></div><div className={classes['circle-top-2']}>
                <svg className={classes['oval-size']} height="1200" width="1200">
                    <circle className={classes['circle-path-anim-2']} cx="380" cy="598" r="590" strokeWidth="4" stroke="#FAF6FF" fill="#red" fillOpacity="0"></circle></svg></div>
            <div className={classes['circle-bottom-1']}><svg height="1000" width="1600">
                <circle className={classes['circle-path-anim-1']} cx="920" cy="750" r="500" strokeWidth="4" stroke="#FAF6FF" fill="#red" fillOpacity="0"></circle></svg></div>
            <div className={classes['circle-bottom-2']}><svg height="1000" width="1600">
                <circle className={classes['circle-path-anim-2']} cx="920" cy="748" r="500" strokeWidth="4" stroke="#FAF6FF" fill="#red" fillOpacity="0"></circle></svg></div>
            <div className={classes['oval-bottom']}><svg height="1000" width="1600">
                <circle cx="1320" cy="1250" r="800" strokeWidth="0" fill="#FAF6FF"></circle></svg></div>
        </div>
    )
}

export default Figures;