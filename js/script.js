
function set_week() {
    let now = new Date();
    let onejan = new Date(now.getFullYear(), 0, 1);
    let week = Math.floor((((now.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7) ;

    console.log(week);
    const isWeekEven = !(week % 2 === 0);
    document.getElementById("xxx").innerHTML = "Tydzień "+ (isWeekEven? 'parzysty': 'nieparzysty' );
}
set_week();