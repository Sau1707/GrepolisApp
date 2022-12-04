const gameScript = `
    document.body.style.zoom = 0.75;

    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.btn_action {scale: 1.6; } .city_overview_overlay{scale: 1.3;} .ui_construction_queue{scale: 1.3;} .game_list{font-size: 16px !important;} .game_list li {height: 30px !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);


`

/* 
game_list
let el = document.getElementsByClassName("reports_date small")

el.addEventListener("click", () => {
    let input = el.getElementsByTagName("input")[0]
    input.checked = !input.checked
})
*/

export default gameScript;