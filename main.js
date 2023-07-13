window.onload = function () {
    let flagColors = ["blue", "pink", "white", "pink", "blue"];
    for (i = 0; i < 5; i++) {
        div = document.createElement("div");
        div.id = flagColors[i];
        div.setAttribute("class", "stripe");

        document.getElementsByTagName("body")[0].appendChild(div);
    }

}