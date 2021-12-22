var button = document.getElementById("contents");
var mobileLinks = document.getElementsByClassName("navlinks-mobile").item(0);

var expanded = false;

button.onclick = () => {
    expanded = !expanded;
    button.setAttribute("aria-expanded", expanded.toString());

    if(expanded)
    {
        mobileLinks.classList.remove("hidden");
        return;
    }

    mobileLinks.classList.add("hidden");

};