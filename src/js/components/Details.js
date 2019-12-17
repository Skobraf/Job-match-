import React from 'react';
import { connect } from 'react-redux';

function selectorItem(state) {
   return state.filier.filier.filter( e => e.nameFiliere == state.items.items.filiere);
}
const mapStateToProps = (state) => {
    return ({
        items:state.items.items,
        jobs: selectorItem(state)
    })
}
const Work = ({jobs}) => {
    return (
        <div className="details">
            <div className="detail-head">title</div>
            <div className="selected-item">
                <select name="" id="" className="select-item">
                    <option value="">Hello</option>
                    <option value="">maroc</option>
                </select>
            </div>
            {console.log(jobs)}
        </div>
    )
}
const Details = connect(mapStateToProps)(Work);

export default Details;