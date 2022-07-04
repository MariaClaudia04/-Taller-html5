function verde() {

    let body = document.getElementById("body")
    let container = document.getElementById("container")

    if (container.classList.contains("color-purpura")) {

        body.classList.replace("color-body-purpura", "color-body-verde")
        container.classList.replace("color-purpura", "color-verde")

    } else {
        body.classList.replace("color-body-gris", "color-body-verde")
        container.classList.replace("color-gris", "color-verde")
    }

    if (!container.classList.contains("color-verde")) {
        body.classList.add("color-body-verde")
        container.classList.add("color-verde")
    }
}

function purpura() {

    let body = document.getElementById("body")
    let container = document.getElementById("container")

    if (container.classList.contains("color-verde")) {

        body.classList.replace("color-body-verde", "color-body-purpura")
        container.classList.replace("color-verde", "color-purpura")

    } else {
        body.classList.replace("color-body-gris", "color-body-purpura")
        container.classList.replace("color-gris", "color-purpura")
    }

    if (!container.classList.contains("color-purpura")) {
        body.classList.add("color-body-purpura")
        container.classList.add("color-purpura")
    }
}

function gris() {

    let body = document.getElementById("body")
    let container = document.getElementById("container")

    if (container.classList.contains("color-purpura")) {

        body.classList.replace("color-body-purpura", "color-body-gris")
        container.classList.replace("color-purpura", "color-gris")

    } else {
        body.classList.replace("color-body-verde", "color-body-gris")
        container.classList.replace("color-verde", "color-gris")
    }

    if (!container.classList.contains("color-gris")) {
        body.classList.add("color-body-gris")
        container.classList.add("color-gris")
    }
}


// acordeon 


    let accordion = document.getElementsByClassName("accordion");
    let i;

    for (i = 0; i < accordion.length; i++) {

        accordion[i].addEventListener("click", function () {
                       
            let reference = this.nextElementSibling;

            if (reference.style.display === "block") {
                reference.style.display = "none";
            } else {
                reference.style.display = "block";
            }
        });
    }
