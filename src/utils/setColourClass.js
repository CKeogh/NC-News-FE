export const setColourClass = (index) => {
    const colours = ['dark', 'medium', 'light'];
    return colours[index % 3];
}