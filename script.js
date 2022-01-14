function pageSwap(targetCat, targetSub) {
    const allTextBox = document.getElementsByClassName("main_text");
    const allSubNavMenu = document.getElementsByClassName("main_subMenu")
    const targetTextBox = document.getElementById(targetCat+targetSub)
    const targetSubMenu = document.getElementById(targetCat+"nav")
    const newsPage = document.getElementById("news")
    const allNavMenu = document.getElementsByClassName("nav_item")
    const targetNavMenu = document.getElementById(targetCat);
    const allSubNavItem = document.getElementsByClassName("main_link")
    const targetSubNavItem = document.getElementById(targetSub+targetCat);

    for (let i = 0; i < allTextBox.length; i++) {
        allTextBox[i].style.display = "none"
    }

    for(let i = 0; i< allSubNavMenu.length; i++){
        allSubNavMenu[i].style.display="none"
    }

    for(let i = 0; i< allNavMenu.length; i++){
        allNavMenu[i].style.color="white"
    }

    for(let i = 0; i<allSubNavItem.length; i++){
allSubNavItem[i].style.fontWeight ="100"
allSubNavItem[i].style.paddingLeft ="0"
     }


    targetTextBox.style.display = "block"
    targetSubMenu.style.display = "block"
    newsPage.style.display = "none"
    targetNavMenu.style.color = "red"
    targetSubNavItem.style.fontWeight ="800"
    targetSubNavItem.style.paddingLeft ="1rem"

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}