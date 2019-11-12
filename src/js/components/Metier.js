import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindAtionCreators } from 'redux'; 

const mapStateToProps = (state) => {
  return (
      {
        secteur: state.secteur.secteur     }
    
  )
}
 

const Job = ({secteur, params}) => {
    const id = parseInt(params.id);
    const listMetier = secteur[id - 1].filiere
    return (
        <div className="metier">
            <div className="filier-list">
                <ul>
                    {listMetier.map(e => (
                        <li key={e.id}>
                            <input
                            type="radio"
                            id={e.id}
                            value={e.nameFiliere}
                            name="groupe"
                            />
                            <span>{e.nameFiliere}</span>
                            </li>
                    ))}
                </ul>
            </div>
            <br/>
            <div className="etude-list">
                <ul>
                    
                </ul>
            </div>
        </div>
        
    )
}
const Metier = connect(mapStateToProps)(Job);

  export default Metier;