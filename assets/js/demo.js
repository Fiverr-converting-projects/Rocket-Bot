
function changeImage(button)
{
    $('.selected').removeClass('selected');
    $('.giveaway').removeClass('giveaway');
    $('.airdrop').removeClass('airdrop');
    $('.other').removeClass('other');
    $('.recieve').removeClass('recieve');
    $('.tip').removeClass('tip');
    var demo = document.getElementById("demo");
    if(button == "giveaway")
        demo.style.backgroundImage="url('/assets/img/demo/giveaway.svg')";
    else if(button == "recieve")
        demo.style.backgroundImage="url('/assets/img/demo/recieve.svg')";
    else if(button == "airdrop")
        demo.style.backgroundImage="url('/assets/img/demo/airdrop.svg')";
    else if(button == "tip")
        demo.style.backgroundImage="url('/assets/img/demo/tip.svg')";
    else if(button == "other")
        demo.style.backgroundImage="url('/assets/img/demo/other.svg')";
    document.getElementById(button).className += " selected ";
    document.getElementById("demo").className += " " + button;
    return false;
}