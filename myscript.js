import * as data from "data.json"

let button_list = [];
let videos = data;

let start_index = {
    "110-1": 1,
    "110-2": 111,
    "111-1": 154,
    "111-2": 0,
};

function show(key) {
    button_list.forEach(button_id => {
        if (button_id == key) {
            document.getElementById(button_id).classList.add('btn-secondary');
            document.getElementById(button_id).classList.remove('btn-outline-secondary');
        }
        else {
            document.getElementById(button_id).classList.add('btn-outline-secondary');
            document.getElementById(button_id).classList.remove('btn-secondary');
        }
    });

    document.getElementById("tbody").innerHTML = "";

    let index = start_index[key];
    for (let date in videos[key]) {
        append_date(date);
        for (let i in videos[key][date]) {
            append_link(index, videos[key][date][i]);
            index++;
        }
    }
}

function append_date(input_date) {
    let tbody = document.getElementById("tbody");

    let tr = document.createElement("tr");
    let empty_td1 = document.createElement("td");
    let empty_td2 = document.createElement("td");
    let date_td = document.createElement("td");

    let y = input_date.substring(0, 4);
    let m = input_date.substring(4, 6);
    let d = input_date.substring(6, 8);
    let date = y + " / " + m + " / " + d;
    date_td.innerHTML = "上傳日期：" + date;

    tr.appendChild(empty_td1);
    tr.appendChild(date_td);
    tr.appendChild(empty_td2);
    tbody.appendChild(tr);
}

function append_link(index, array) {
    let tbody = document.getElementById("tbody");
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");

    td1.innerHTML = index;
    td2.innerHTML = array[0];

    td3.style.fontFamily = 'Courier new';
    let a = document.createElement("a");
    a.setAttribute("href", array[1]);
    a.setAttribute("target", "_blank");
    a.innerHTML = array[1];
    td3.appendChild(a);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tbody.appendChild(tr);
}

window.onload = function () {
    let str = document.getElementById("button_row").innerHTML;
    let regex = /[\d-]+(?=" class)/g;
    button_list = str.match(regex);
    show(button_list[0]);
}
