const $theme1 = document.getElementById("theme1");
const $theme2 = document.getElementById("theme2");
const $theme3 = document.getElementById("theme3");

//console.log($theme1, $theme2, $theme3);
[$theme1, $theme2, $theme3].forEach(function(each) {
    each.addEventListener('click', function() {
        //console.log(this);
        $theme1.classList.add("hidden");
        $theme2.classList.add("hidden");
        $theme3.classList.add("hidden");

        this.classList.remove("hidden");
    })
})