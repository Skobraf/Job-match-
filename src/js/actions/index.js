export function handleChoice(filiere, niveau) {
    return {
        type: 'HANDLE_CHOICE',
        filiere,
        niveau
    }
    
}