import React from 'react';
import { connect } from 'react-redux';

function selectorItem(state) {
   return state.filier.filier.filter( e => e.nameFiliere == state.items.items.filiere);
}
const mapStateToProps = (state) => {
    return ({
        items:state.items.items,
        jobs: selectorItem(state),

    })
}
const Work = ({jobs, location, items}) => {
    const title = typeof location.state !== 'undefined' ? location.state.title : 'Filiere';
    const options = items.metier ? items.metier[0] : [];
    return (
        <div className="details">
            <div className="detail-head">{title}</div>
            <div className="selected-item">
                <select name="" id="" className="select-item">
                    {
                        options.map(e => (
                        <option value="" key={e.id}>{e.nameFiliere}</option>
                        ))
                    }
                </select>
            </div>
            <div className="filiere-detail">
                <ul>
                {jobs.length > 0 ? jobs[0].metier.map(e => (
                <li key={e.id_metier}>{e.nameMetier}</li>
                    )) : <p>No data</p>
                }
                </ul>
            </div>
        </div>
    )
}
const Details = connect(mapStateToProps)(Work);

export default Details;