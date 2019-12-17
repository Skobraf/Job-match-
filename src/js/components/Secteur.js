import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return (
      {
        secteur: state.secteur.secteur     }
    
  )
}
 

const Filiere = ({secteur, location}) => (
  <ul>
    {secteur.map((e) => (
      <Link key={e.id} to={location.pathname + '/' + e.id}><li >{e.nameSecteur}</li></Link>
    ))}
  </ul>
)
const Secteur = withRouter(connect(mapStateToProps)(Filiere));

  export default Secteur;