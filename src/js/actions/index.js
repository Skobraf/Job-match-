export function handleChoice(filiere, diplome) {
    return {
        type: 'HANDLE_CHOICE',
        filiere,
        diplome
    }
}