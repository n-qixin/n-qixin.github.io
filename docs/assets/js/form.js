
function checkValid(field, val) {
    if (field == "name" || field == "username" || field == "password") {
        if (!val) {
            $("#" + field).css("background", "tomato");
            $("#" + field + "Warning").show();
        } else {
            $("#" + field).css("background", "lightgreen");
            $("#" + field + "Warning").hide();
        }
    } else if (field == "email") {
        var pattern = /^\w[a-zA-Z0-9]+@[a-zA-Z0-9]+?\.[a-zA-Z]{2,3}$/;
        if (!val.match(pattern)) {
            $("#" + field).css("background", "tomato");
            $("#" + field + "Warning").show();
        } else {
            $("#" + field).css("background", "lightgreen");
            $("#" + field + "Warning").hide();
        }
    }
}

function checkPasswordMatch() {
    if ($("#password").val().length < 8) {
        $("#passwordWarning").show();
    } else {
        $("#passwordWarning").hide();
        if ($("#password").val() == $("#cfmPassword").val()) {
            $("#registerBTN").prop("disabled", false)
            $("#passwordNotMatchWarning").hide();
        } else {
            $("#registerBTN").prop("disabled", true)
            $("#passwordNotMatchWarning").show();
        }
    }
}

function showPreview(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#previewFile').attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}