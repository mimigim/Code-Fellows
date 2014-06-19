$(function () { /*shortcut to doc ready*/
    $("input:checkbox").on("change", function () {
        var input = $(this).next("span");
        if (this.checked) {
            $(input).css("textDecoration", "line-through");
        } else {
            $(input).css("textDecoration", "none");
        }
    })
})