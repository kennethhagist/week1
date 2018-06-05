function drawTable() {
    let htmlString = "<table>";
    for (let i = 0; i < 13; i++) {
        htmlString += "<tr>";
        for (let j = 0; j < 13; j++) {
            let nums = i * j;
            let data;

            if (i === 0) { nums = j };
            if (j === 0) { nums = i };

            if (nums === 0) {
                data = "<td>" + "x" + "</td>";
            } else {
                data = "<td>" + nums + "</td>";
            }

            htmlString += data;
        }
        htmlString += "</tr>";
    }
    htmlString += "</table>";
    document.getElementById("target").innerHTML = htmlString;
}
drawTable();