function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");
        sidebar.style.left = "-250px";
    } else {
        sidebar.classList.add("open");
        sidebar.style.left = "0";
    }
}
