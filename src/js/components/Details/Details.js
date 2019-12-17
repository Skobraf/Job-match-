import React from 'react';
import { connect } from 'react-redux';
import styles from './Details.module.css';

const selectorItem = (state) => {
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
        <div className={styles["details"]}>
            <div className={styles["detail-head"]}>
                {title}
            </div>
            <div className={styles["selected-item"]}>
                <select
                    className={styles["select-item"]}
                    defaultValue={items.filiere}>
                    {
                        options.map(e => (
                        <option
                        className={styles['option-item']}
                            value={e.nameFiliere}
                            key={e.id}>{e.nameFiliere}
                        </option>
                        ))
                    }
                </select>
            </div>
            <div className={styles["filiere-detail"]}>
                <ul>
                {jobs.length > 0
                    ?
                    jobs[0].metier.map(e => (
                <li
                    key={e.id_metier}
                    >
                        {e.nameMetier}
                </li>
                    ))
                    :
                    <p>No data</p>
                }
                </ul>
            </div>
        </div>
    )
}
export default connect(mapStateToProps)(Work);