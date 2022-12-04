const world = `
    // hide play on mobile
    document.getElementById("home_content").style.display = "none";
    // hide play bar
    document.getElementById("pbar").style.display = "none";
    // hide facebook like
    document.getElementById("facebook_like").style.display = "none";

    // create style sheet
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '#login_form {float: none; width: 100%} #worlds {scale: 1.4} #loginform { width: 100%} .settings_button {font-size: 20px} .logout_button {font-size: 20px} .player_greeting {font-size: 20px !important; margin-bottom: 30px !important}';
    document.getElementsByTagName('head')[0].appendChild(style);
`

export default world