export function handleChoice(filiere, niveau, metier) {
    return {
        type: 'HANDLE_CHOICE',
        filiere,
        niveau,
        metier
    }
    
}