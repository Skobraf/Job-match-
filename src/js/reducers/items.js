function items(state = [], action) {
    if(action.tye = 'HANLDE_CHOICE') {
        const items = {...state.items};
        items.filiere = action.filiere;
        items.niveau = action.niveau;
        return {items}
    }
    
}
export default items;