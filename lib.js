function toggleTheme() {
    
    var theme = document.getElementsByTagName('link')[0];
    var logo = document.getElementById('logo');
    var topHeader = document.getElementById('topHeader');
    
    if (theme.getAttribute('href') == 'KFStyles.css') {
        theme.setAttribute('href', 'McStyles.css');
        logo.src = "https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo.png"
        topHeader.innerText = "Why McDonalds is better than KFC"
    } else {
        theme.setAttribute('href', 'KFStyles.css');
        logo.src = "https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png"
        topHeader.innerText = "Why KFC is better than McDonalds"
    }
} 