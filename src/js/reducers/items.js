function items(state = [], action) {
    if(action.tye = 'HANLDE_CHOICE') {
        const items = {...state.items};
        items.filiere = action.filiere;
        items.niveau = action.niveau;
        items.metier = action.metier
        return {items}
    }
    
}
export default items;