window.addEventListener("DOMContentLoaded", function() {

    // hieu ung tab
    var tablinks = document.querySelectorAll(".product-type-link");
    var tabcontent = document.querySelectorAll(".product-item");

    tablinks.forEach(function(el) {
        el.addEventListener("click", openTabs);

    });

    function openTabs(el) {
        var btn = el.currentTarget; // lắng nghe sự kiện và hiển thị các element
        var product = btn.dataset.product; // lấy giá trị trong data-electronic

        tabcontent.forEach(function(el) {
            el.classList.remove("active");
        });

        tablinks.forEach(function(el) {
            el.classList.remove("active");
        });

        document.querySelector("#" + product).classList.add("active");

        btn.classList.add("active");

    }
    // slidetoggle
    var navbar = document.querySelector(".navbar-toggle");
    var nav_header = document.querySelector(".header-nav");

    var nav_search = document.querySelector(".navbar-search");
    var header_search = document.querySelector(".header-search");
    // Calculates nav height, adds - and px
    var height = "-" + nav_header.clientHeight + "px";
    // console.log(height);
    navbar.addEventListener("click", function() {

        nav_header.classList.toggle("active");
        header_search.classList.remove("active");
    }, false);
    nav_search.addEventListener("click", function() {
        header_search.classList.toggle("active");
        nav_header.classList.remove("active");
    })
}, false);