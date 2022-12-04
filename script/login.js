const loginScript = `
    // hide get the app
    document.getElementsByClassName("mobile-teaser")[0].style.display = "none";

    // add login
    var node = document.getElementById('login'),
    parent = node.parentNode,
    prev = node.previousSibling,
    oldChild = parent.removeChild(node);

    node.children[0].style.width = "fit-content";
    node.children[0].style.margin = "auto"
    node.children[0].style.scale = "1.3";
    document.getElementsByClassName("main-logo")[0].appendChild(node.children[0]);
    let user = document.getElementById("login_userid"); 
    user.setAttribute("style", "margin: auto !important");

    // center elements
    let pass = document.getElementById("login_password");
    pass.setAttribute("style", "margin: auto !important");
    let butt = document.getElementById("login_Login");
    butt.style.margin = "auto";

    // add gap and spacing
    let form = document.getElementsByClassName("login-form")[0]
    form.style.display = "flex";
    form.style.gap = "10px";
    form.style.flexDirection = "column";
    form.style.margin = "auto";
    form.style.marginTop = "50px";

    // hide facebook and google
    document.getElementsByClassName("ipp-login ipp facebook")[0].style.display = "none";
    document.getElementsByClassName("ipp-login ipp google")[0].style.display = "none";
    
    document.getElementsByClassName("login-meta")[0].style.display = "none";

    true; // note: this is required, or you'll sometimes get silent failures
    `;

export default loginScript;