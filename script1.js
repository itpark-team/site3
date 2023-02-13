let someId = document.getElementById("someId");
someId.innerText = "XA-XA-XA";

function buttonLoad_OnClick(button) {
    button.textContent = "Устанавливается....";

    setTimeout(() => {
        button.textContent = "Установлено";
    }, 2000);
}

test();