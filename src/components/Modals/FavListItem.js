import React from "react";
const FavListItem = (props) => {
    return (
        <React.Fragment>
            <div className="col-8">
                <p>{props.item.name}</p>

            </div>
            <div className="col-4">
                <button className="btn btn-sm btn-danger" onClick={() => props.removeFromFav(props.item.id)}>Remove</button>
            </div>
        </React.Fragment>
    )
}

export default FavListItem;