var checkedOptions = {
    "id": "",
    "checkedGlyph": "glyphicon-ok-circle",
    "uncheckedGlyph": "glyphicon-unchecked",
    "checkedBtn": "btn-success",
    "uncheckedBtn": "btn-primary",
    "checkedText": "Selected",
    "uncheckedText": "Not Selected"
};

var totalOptions = {
    id: "#total",
    priceClass: ".price",
    priceContainerClass: ".panel"
};

$(document).ready(function () {
    $(".panel input[type ='checkbox']").on('change', function () {
        if ($(this).prop('checked')) {
            setChecked($(this));
        }
        else {
            setUnchecked($(this));
        }

        calculateTotal($(this));
    });

    var checked = $(checkedOptions.id + " .btn-group input:checked");
    for (var i = 0; i < checked.length; i++) {
        setChecked($(checked[i]));
        calculateTotal($(checked[i]));
    }

});
function setChecked(elem) {
    $(elem).prev().removeClass(checkedOptions.uncheckedGlyph)
        .addClass(checkedOptions.checkedGlyph);
    $(elem).parent().removeClass(checkedOptions.uncheckedBtn)
        .addClass(checkedOptions.checkedBtn);
    $(elem).next().text(checkedOptions.checkedText);
}
function setUnchecked(elem) {
    $(elem).prev().removeClass(checkedOptions.checkedGlyph)
        .addClass(checkedOptions.uncheckedGlyph);
    $(elem).parent().removeClass(checkedOptions.checkedBtn)
        .addClass(checkedOptions.uncheckedBtn);
    $(elem).next().text(checkedOptions.uncheckedText);
}
function calculateTotal(elem) {
    var total = $(totalOptions.id).text();
    total = stripCurrency(total);
    var price = $(elem)
                 .closest(totalOptions.priceContainerClass)
                 .find(totalOptions.priceClass).text();
    price = stripCurrency(price);
    if ($(elem).prop("checked")) {
        total = parseFloat(total) + parseFloat(price);
    }
    else {
        total = parseFloat(total) - parseFloat(price);
    }

    $("#total").text(formatCurrency(total));
}