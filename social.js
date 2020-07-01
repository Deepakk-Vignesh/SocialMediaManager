let darkTheme = {
    '--background-color-1': 'hsl(232, 19%, 15%)',
    '--background-color-2': 'hsl(230, 17%, 17%)',
    '--card-color': 'hsl(228, 28%, 20%)',
    '--count-color': 'aliceblue',
    '--text-color': 'hsl(228, 34%, 66%)',
};
let lightTheme = {
    '--background-color-1': 'hsl(228, 34%, 66%)',
    '--background-color-2': '#e9ebf5',
    '--card-color': 'aliceblue',
    '--count-color': 'hsl(228, 28%, 20%)',
    '--text-color': 'hsl(232, 19%, 15%)',
};
function changeTheme(){
    let darkModeToggle = document.querySelector('.dark-mode-toggle > input');
    let theme = darkModeToggle.checked ? darkTheme : lightTheme;
    for(let key in theme){
        document.documentElement.style.setProperty(key, theme[key]);
    }
}