import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import styles from './Metier.module.css';
import * as actionCreators from '../../actions/index';
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
        niveau: [],
        metier: []
    }
    componentDidMount() {
        const id = parseInt(this.props.match.params.id);
        const secteur = this.props.secteur;
        this.setState(prev => ({
            metier: [...prev.metier, secteur[id-1].filiere]
        }))
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
        const id = parseInt(this.props.match.params.id);
        const title = this.props.secteur[id-1].nameSecteur;
        const {filiere, niveau, metier } = this.state;
        this.props.handleChoice(filiere, niveau, metier);
        this.props.history.push({
            pathname: '/details',
            state: {
                title
            }
        });
    }
    render() {
        const id = parseInt(this.props.match.params.id);
        const listMetier = this.props.secteur[id - 1].filiere;
        const title = this.props.secteur[id-1].nameSecteur;
    return (
        <div className={styles["metier"]}>
            <div className={styles["filier-list"]}>
                <h1>{title}</h1>
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
            <div className={styles["etude-list"]}>
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
            <div className={styles["submit"]}>
            <button onClick={this.handleSubmit}>
                Go
            </button>
            </div>
        </div>  
    )
    }
} 
 export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Job));
