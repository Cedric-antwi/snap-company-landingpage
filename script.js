const openMenu = document.getElementById("side-bar")
const openMenuBtn = document.getElementById("open-menu-btn")

openMenuBtn.addEventListener('click',  () => {
    console.log('click!')
    openMenu.display = "flex"
})