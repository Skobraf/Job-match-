import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, Router} from 'react-router-dom';
import * as actionCreators from '../actions/index';
import { bindActionCreators } from 'redux'; 


const mapStateToProps = (state) => {
  return (
      {
        secteur: state.secteur.secteur,
        diplome: state.diplome.diplome
            }
    
  )
}

const mapDispatchToProps = (dispatch) => {
    return(
        bindActionCreators(actionCreators, dispatch)
    )
}
 
class Job extends Component {
    state = {
        filiere: '',
        niveau: []
    }
    handleChange = (e) => {
        const value = e.target.value;
        this.setState(state => {
            const niveau = [...state.niveau];
            if(niveau.includes(value)) {
                return { niveau: niveau.filter(e => e !== value)  };
            } else {
                return { niveau: [...niveau, value]};
            }
            
        })
    }
    handleClick = (e) => {
        const value = e.target.value;
        this.setState({
            filiere: value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleChoice(this.state.filiere, this.state.niveau);
        this.props.history.push('/details');
    }
    render() {
        const id = parseInt(this.props.match.params.id);
        const listMetier = this.props.secteur[id - 1].filiere
    return (
        <div className="metier">
            <div className="filier-list">
                <h2>Choisis une filiere</h2>
                <ul>
                    {listMetier.map(e => (
                        <li key={e.id}>
                            <input
                            type="radio"
                            id={e.id}
                            value={e.nameFiliere}
                            onClick={this.handleClick}
                            name="groupe"
                            />
                            <span>{e.nameFiliere}</span>
                            </li>
                    ))}
                </ul>
            </div>
            <br/>
            <div className="etude-list">
                <h2>Quel est ton niveaud'etude</h2>
                <ul>
                        {
                          this.props.diplome.map(e => (
                              <li key={e.id}>
                                  <input
                                    type="checkbox"
                                    value={e.nameDiplome}
                                    id={e.id}
                                    onChange={this.handleChange}
                                  />
                                  <span>{e.nameDiplome}</span>
                              </li>
                          ))  
                        }
                </ul>
            </div>
            <div className="submit">
            <button onClick={this.handleSubmit}>Go </button>
            </div>
        </div>
        
    )
    }
} 
const Metier = withRouter(connect(mapStateToProps,mapDispatchToProps)(Job));

  export default Metier;