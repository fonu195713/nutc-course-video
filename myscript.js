let button_list = [];
let videos = {
    "110-1": {
        "20211014": [
            ["logic1013P1", "https://reurl.cc/Mk4Lav"],
            ["logic1013P2", "https://reurl.cc/q1r4Qg"],
            ["logic1013P3", "https://reurl.cc/YjVRyD"],
            ["logic1013P4", "https://reurl.cc/oxrAbj"],
            ["logic1014P1", "https://reurl.cc/Mk4Lrv"],
            ["logic1014P2", "https://reurl.cc/YjVRLa"],
            ["logic1014P3", "https://reurl.cc/8208AX"],
        ],
        "20211021": [
            ["ES1018P1", "https://reurl.cc/0x4W5l"],
            ["ES1018P2", "https://reurl.cc/6DjqrM"],
            ["ES1018P3", "https://reurl.cc/52DRen"],
            ["logic1018P1", "https://reurl.cc/XlZaDR"],
            ["logic1018P2", "https://reurl.cc/jgQmdD"],
            ["logic1020P1", "https://reurl.cc/vgpKDk"],
            ["logic1020P3", "https://reurl.cc/Q65VdM"],
            ["logic1020P2", "https://reurl.cc/oxVKdq"],
            ["logic1021P1", "https://reurl.cc/aNZM5Z"],
            ["logic1021P2", "https://reurl.cc/Gb5GmZ"],
            ["logic1021P3", "https://reurl.cc/Ok5RkX"],
        ],
        "20211028": [
            ["ES1025P1", "https://youtu.be/GVuD3ibNNQo"],
            ["ES1025P2", "https://youtu.be/2fdQ2PED0sk"],
            ["ES1025P3", "https://youtu.be/_3bWaApHUcY"],
            ["logic1025P1", "https://youtu.be/pqcfE1djqK8"],
            ["logic1025P2", "https://youtu.be/V1ALyLBUbF4"],
            ["logic1025P3", "https://youtu.be/iWM0nlEQ4Iw"],
            ["logic1027P1", "https://youtu.be/KEz72-lg9pk"],
            ["logic1027P2", "https://youtu.be/iChw4uDG_Ys"],
            ["logic1027P3", "https://youtu.be/YoSccYzJrwE"],
            ["logic1028P1", "https://youtu.be/fwGZqxzaPzc"],
            ["logic1028P2", "https://youtu.be/qTsCthYU03E"],
            ["logic1028P3", "https://youtu.be/96daDN7xTdM"],
        ],
        "20211101": [
            ["ES1101P1", "https://youtu.be/EcpOKxzybU4"],
            ["ES1101P2", "https://youtu.be/CaM2f5mlaHI"],
            ["ES1101P3", "https://youtu.be/qHNOaeHyq5c"],
            ["logic1101P1", "https://youtu.be/5l1XWhG8xXQ"],
            ["logic1103P1", "https://youtu.be/2-f2Mw7jDQI"],
            ["logic1104P1", "https://youtu.be/PvWN2V-4cjw"],
        ],
        "20211118": [
            ["ES1115P1", "https://youtu.be/i9H-rTL6oL0"],
            ["ES1115P2", "https://youtu.be/3qdmq3GI4oc"],
            ["ES1115P3", "https://youtu.be/9frWmk76puo"],
            ["logic1117P1", "https://youtu.be/jtAE66ma-YI"],
            ["logic1118P1", "https://youtu.be/oRWZ-a36268"],
        ],
        "20211125": [
            ["ES1122P1", "https://youtu.be/2QOdzAqFOZc"],
            ["ES1122P2", "https://youtu.be/BgLPrBNc5-Y"],
            ["logic1122P1", "https://youtu.be/KZ5NqroLF24"],
            ["logic1122P2", "https://youtu.be/_zWHKBJa9nM"],
            ["logic1122P3", "https://youtu.be/Qz5LxPu9hhM"],
            ["logic1124P1", "https://youtu.be/Jt9rfcp-5to"],
            ["logic1124P2", "https://youtu.be/1AygY-xeIAE"],
            ["logic1124P3", "https://youtu.be/wQNGDuJ8eSI"],
            ["logic1124P4", "https://youtu.be/ZUUa_iqiMVU"],
            ["logic1125P1", "https://youtu.be/IwzlNqwegic"],
            ["logic1125P2", "https://youtu.be/ivSjvs82yDY"],
            ["logic1125P3", "https://youtu.be/019dgmy5JSc"],
        ],
        "20211202": [
            ["ES1129P1", "https://youtu.be/lWvJ_v7ISDE"],
            ["ES1129P2", "https://youtu.be/E48DvY0Favs"],
            ["ES1129P3", "https://youtu.be/4mEfHXs6vNM"],
            ["logic1129P1", "https://youtu.be/jWuAbrJfwm0"],
            ["logic1129P2", "https://youtu.be/rx0PexuzM6c"],
            ["logic1201P1", "https://youtu.be/SS93kAXnpHU"],
            ["logic1201P2", "https://youtu.be/gPNjLwfuzFc"],
            ["logic1201P3", "https://youtu.be/ZrVquhAn0SY"],
            ["logic1202P1", "https://youtu.be/zydyBPcKyTs"],
            ["logic1202P2", "https://youtu.be/A9RLrFG1_hE"],
            ["logic1202P3", "https://youtu.be/uCj0OVaRP1s"],
            ["logic1202P4", "https://youtu.be/FLUsmKmKtsA"],
        ],
        "20211206": [
            ["ES1206P1", "https://youtu.be/xcf9elDxi10"],
            ["ES1206P2", "https://youtu.be/cWOl2bfLUAo"],
            ["ES1206P3", "https://youtu.be/TWJ-HV5g_OY"],
            ["logic1206P1", "https://youtu.be/NLlwyXmPD1A"],
            ["logic1206P2", "https://youtu.be/6ejwcFYGzCk"],
        ],
        "20211216": [
            ["logic1216P1", "https://youtu.be/6_7z98k5R1U"],
            ["logic1216P2", "https://youtu.be/EL5P1TR6NPs"],
            ["logic1216P3", "https://youtu.be/eqgcAIdWNdw"],
            ["logic1216P4", "https://youtu.be/QtH_ugD7j2E"],
            ["logic1216P5", "https://youtu.be/PY_zGlS_too"],
        ],
        "20211224": [
            ["ES1220P1", "https://youtu.be/VmgKaxyq0F8"],
            ["ES1220P2", "https://youtu.be/Bv4q37aQiXk"],
            ["ES1220P3", "https://youtu.be/9u7rb-ChLv8"],
            ["ES1220P4", "https://youtu.be/lYWT5lA8-GE"],
            ["logic1220P1", "https://youtu.be/K2P8En-zilY"],
            ["logic1220P2", "https://youtu.be/3oTn3EVqhTU"],
            ["logic1220P3", "https://youtu.be/yTiWfl_0i-I"],
            ["logic1222P1", "https://youtu.be/0SZFjQBMVdw"],
            ["logic1222P2", "https://youtu.be/3uA7R1_KDhs"],
            ["logic1223P1", "https://youtu.be/H2-Hwrn1TdE"],
            ["logic1223P2", "https://youtu.be/Lla47RzkUG4"],
            ["logic1223P3", "https://youtu.be/SbFNn7kj4FA"],
        ],
        "20220101": [
            ["ES1227P1", "https://youtu.be/8cubTftj1J4"],
            ["ES1227P2", "https://youtu.be/RgJfJJQF-7Q"],
            ["logic1227P1", "https://youtu.be/Qphb1VK1Kxo"],
            ["logic1227P2", "https://youtu.be/-YN6UAwUu8w"],
            ["logic1227P3", "https://youtu.be/gDwJAIsYXdk"],
            ["logic1229P1", "https://youtu.be/uZVm0cdqFWw"],
            ["logic1229P2", "https://youtu.be/4OQasixl3MQ"],
            ["logic1229P3", "https://youtu.be/YinVDB7D87M"],
            ["logic1230P1", "https://youtu.be/K6eaxqWoPIs"],
            ["logic1230P2", "https://youtu.be/__XuDajNMqQ"],
            ["logic1230P3", "https://youtu.be/lA1qBp2XdKE"],
            ["logic1230P4", "https://youtu.be/_OT5TV-qoPw"],
        ],
        "20220106": [
            ["logic0103P1", "https://youtu.be/BL_OrjOzR8A"],
            ["logic0103P2", "https://youtu.be/r6a02OiRXfE"],
            ["logic0103P3", "https://youtu.be/F7tgHrZ5cCI"],
            ["logic0105P1", "https://youtu.be/vZJiGPWiGnk"],
            ["logic0105P2", "https://youtu.be/4rh8dH2lXTM"],
            ["logic0105P3", "https://youtu.be/gyQEnZy-y5Q"],
            ["logic0105P4", "https://youtu.be/7xCKgZMey3c"],
            ["logic0106P1", "https://youtu.be/H5k6XcJfnKc"],
            ["logic0106P2", "https://youtu.be/ncQOTR9NAp4"],
            ["logic0106P3", "https://youtu.be/D-WBrmG9y5g"],
            ["logic0106P4", "https://youtu.be/1DXsbnj2irQ"],
        ],
    },
    "110-2": {
        "20220303": [
            ["algo0302P1", "https://youtu.be/jWlAJf-GfFU"],
            ["algo0302P2", "https://youtu.be/NvCLaa2frGo"],
            ["algo0302P3", "https://youtu.be/cCkUdnOJRsQ"],
            ["algo0303P1", "https://youtu.be/jhV28yPu0EQ"],
            ["algo0303P2", "https://youtu.be/12ye2mQUPNc"],
            ["algo0303P3", "https://youtu.be/R8ZMmmu0CC4"],
        ],
        "20220310": [
            ["algo0309P1", "https://youtu.be/ifp8-aUKewU"],
            ["algo0309P2", "https://youtu.be/6beS0HcV3eg"],
            ["algo0309P3", "https://youtu.be/h8cehGsejCk"],
            ["algo0310P1", "https://youtu.be/BC0eEE9WE-M"],
            ["algo0310P2", "https://youtu.be/Mk0-ZBbb3co"],
            ["algo0310P3", "https://youtu.be/QdllVY8qAOc"],
        ],
        "20220317": [
            ["algo0316P1", "https://youtu.be/UhvXz48HX0I"],
            ["algo0316P2", "https://youtu.be/3Q-J4RWzwos"],
            ["algo0316P3", "https://youtu.be/hdmW4GVjYQE"],
            ["algo0317P1", "https://youtu.be/50yYjsst7Y4"],
            ["algo0317P2", "https://youtu.be/HG-H5tN7MOc"],
            ["algo0317P3", "https://youtu.be/lwUkRtiG38g"],
        ],
        "20220324": [
            ["algo0323P1", "https://youtu.be/9ol2IXvAELM"],
            ["algo0323P2", "https://youtu.be/_739LQjYP1U"],
            ["algo0324P1", "https://youtu.be/UxMs2ORRetY"],
            ["algo0324P2", "https://youtu.be/pV_zZS2pvow"],
        ],
        "20220331": [
            ["algo0330P1", "https://youtu.be/TxplEJ6qlfw"],
            ["algo0330P2", "https://youtu.be/bX38tqEzicA"],
            ["algo0330P3", "https://youtu.be/zvwbxfWvgfk"],
            ["algo0331P1", "https://youtu.be/JoG1f8IxJwA"],
            ["algo0331P2", "https://youtu.be/bFy2HgMzyAc"],
            ["algo0331P3", "https://youtu.be/QxCJx7Xtx9Q"],
        ],
        "20220408": [
            ["algo0406P1", "https://youtu.be/W6lXVv4RdnY"],
            ["algo0406P2", "https://youtu.be/WW5CGngwXsY"],
            ["algo0406P3", "https://youtu.be/ebOiX2FNESw"],
            ["algo0407P1", "https://youtu.be/KSJLtRLfOS8"],
            ["algo0407P2", "https://youtu.be/cFTGUl-WB3E"],
            ["algo0407P3", "https://youtu.be/aRV4QM5jmjQ"],
        ],
        "20220428": [
            ["logic0425", "https://youtu.be/iUybyQQCGQs"],
            ["algo0428P1", "https://youtu.be/FEFJxNCAJKY"],
            ["algo0428P2", "https://youtu.be/jszg41pE-q0"],
        ],
        "20220505": [
            ["algo0504P1", "https://youtu.be/Klo-64m2hR0"],
            ["algo0504P2", "https://youtu.be/jNlfeOjm8fs"],
            ["algo0504P3", "https://youtu.be/bJeMS3jv37Q"],
            ["algo0505P1", "https://youtu.be/UgNz8XEujIc"],
            ["algo0505P2", "https://youtu.be/mldG8ONmt14"],
            ["algo0505P3", "https://youtu.be/MiOjzF7ttbE"],
        ],
    },
    "111-1": {
        "20220924": [
            ["EC0912P1", "https://youtu.be/vLUIyx8uTv0"],
            ["EC0912P2", "https://youtu.be/7TMGx6DKK0U"],
            ["2logic0914P1", "https://youtu.be/c1-p7TpgE5c"],
            ["2logic0914P2", "https://youtu.be/Udv1D0FZR5Q"],
            ["1logic0915P1", "https://youtu.be/l_V7q8bcQbM"],
            ["1logic0915P2", "https://youtu.be/XFmV-uaCSqs"],
            ["1logic0915P3", "https://youtu.be/ht8oPa-u0Xc"],
            ["EC0919P1", "https://youtu.be/mS59gT4SxVU"],
            ["EC0919P2", "https://youtu.be/PemQyEH7-dE"],
            ["EC0919P3", "https://youtu.be/DuwMuC0toMU"],
            ["2logic0921P1", "https://youtu.be/V0s6VupK5H8"],
            ["2logic0921P2", "https://youtu.be/YHLct1fnsl0"],
            ["2logic0921P3", "https://youtu.be/PUYR1ewWO94"],
            ["1logic0922P1", "https://youtu.be/5io039Sm19k"],
            ["1logic0922P2", "https://youtu.be/ztC-qnO71N4"],
            ["1logic0922P3", "https://youtu.be/QRsNaxGCv5s"],
        ],
        "20220929": [
            ["EC0926P1", "https://youtu.be/DGm3oJ6OTA4"],
            ["EC0926P2", "https://youtu.be/aeBFQVJgxQY"],
            ["EC0926P3", "https://youtu.be/s6eDnCestwY"],
            ["2logic0928P1", "https://youtu.be/2vzrynxVO6k"],
            ["2logic0928P2", "https://youtu.be/Ip1DEg8dHRo"],
            ["2logic0928P3", "https://youtu.be/zvsM8x4vux4"],
            ["1logic0929P1", "https://youtu.be/FYUDvbIFwFw"],
            ["1logic0929P2", "https://youtu.be/iR-K5r4w2WQ"],
            ["1logic0929P3", "https://youtu.be/aIF5_-qOKjM"],
            ["1logic0929P4", "https://youtu.be/2vzrynxVO6k"],
        ],
        "20221006": [
            ["EC1003P1", "https://youtu.be/rXZlz4Yc5Fk"],
            ["EC1003P2", "https://youtu.be/wAktW53DJ34"],
            ["EC1003P3", "https://youtu.be/NS7-Q6fYYEo"],
            ["2logic1005P1", "https://youtu.be/zMr5bHQ0Zs4"],
            ["2logic1005P2", "https://youtu.be/Ymd1aSRmTQg"],
            ["2logic1005P3", "https://youtu.be/5ZuT9Xj1PYI"],
            ["1logic1006P1", "https://youtu.be/DPqRH8g_mAw"],
            ["1logic1006P2", "https://youtu.be/6EuyxKfB5Zs"],
            ["1logic1006P3", "https://youtu.be/V_cpk4GowX0"],
        ],
        "20221013": [
            ["2logic1012P1", "https://youtu.be/CZahn3BFPXo"],
            ["2logic1012P2", "https://youtu.be/3HvL2E9gIsw"],
            ["2logic1012P3", "https://youtu.be/fXIty4--E-k"],
            ["1logic1013P1", "https://youtu.be/G9KPzbadGnY"],
            ["1logic1013P2", "https://youtu.be/o9WTsZkWUmk"],
            ["1logic1013P3", "https://youtu.be/lD8iG5ofr_c"],
        ],
        "20221020": [
            ["EC1017P1", "https://youtu.be/HBJ7yaQNie0"],
            ["EC1017P2", "https://youtu.be/Lb7zitgdPlQ"],
            ["EC1017P3", "https://youtu.be/pIXwQ5AwDA8"],
            ["2logic1019P1", "https://youtu.be/LgeV6ftfkas"],
            ["2logic1019P2", "https://youtu.be/jPV1Y6hYvAk"],
            ["1logic1020P1", "https://youtu.be/-Bw4W5_ZAgw"],
            ["1logic1020P2", "https://youtu.be/-d1lxgzEIN4"],
            ["1logic1020P3", "https://youtu.be/3t4iO-uMzJs"],
        ],
        "20221027": [
            ["EC1024P1", "https://youtu.be/xFS4AlcEp0s"],
            ["EC1024P2", "https://youtu.be/Lt_LiZ9amQI"],
            ["EC1024P3", "https://youtu.be/2Xw6-ynKC5g"],
            ["2logic1026P1", "https://youtu.be/oo4ruXbxSZg"],
            ["2logic1026P2", "https://youtu.be/O9kIfFSlgjw"],
            ["2logic1026P3", "https://youtu.be/DECmBuL76vo"],
            ["1logic1027P1", "https://youtu.be/X6od7LgPadk"],
            ["1logic1027P2", "https://youtu.be/mSQHSx33aCM"],
            ["1logic1027P3", "https://youtu.be/D_LtzzQM3TE"],
        ],
        "20221103": [
            ["EC1031P1", "https://youtu.be/rsCcOEiEi9U"],
            ["EC1031P2", "https://youtu.be/--HeElq_XXY"],
            ["EC1031P3", "https://youtu.be/Ms6npYEfJBM"],
            ["2logic1102P1", "https://youtu.be/_xs-6XoXb4k"],
            ["1logic1103P1", "https://youtu.be/VVnkB_Q6r4Y"],
        ],
        "20221114": [
            ["EC1114P1", "https://youtu.be/ZJh3GsgRiPE"],
            ["EC1114P2", "https://youtu.be/uoDJzhs2aRU"],
            ["EC1114P3", "https://youtu.be/tg2LcQMjmHk"],
            ["2logic1116P1", "https://youtu.be/ZDptgUu3XMs"],
            ["1logic1117P1", "https://youtu.be/X9Wt6aiyZtc"],
        ],
        "20221124": [
            ["EC1121P1","https://youtu.be/ggXXUthf11A"],
            ["EC1121P2","https://youtu.be/dEEqCD1AysQ"],
            ["EC1121P3","https://youtu.be/qPEGPrt4wOA"],
            ["EC1121P4","https://youtu.be/7w0ze8oCUiE"],
            ["2logic1123P1","https://youtu.be/Vw52Rb9Sphk"],
            ["2logic1123P2","https://youtu.be/NV12joV5NG8"],
            ["2logic1123P3","https://youtu.be/2XY1UWlziuc"],
            ["1logic1124P1","https://youtu.be/dxYNcxZEhx8"],
            ["1logic1124P2","https://youtu.be/Te8T3qj1KYc"],
            ["1logic1124P3","https://youtu.be/8U3fqs6ECJ8"],
        ],
        "20221201": [
            ["EC1128P1","https://youtu.be/okw8zCfdXfw"],
            ["EC1128P2","https://youtu.be/Uo6g3tWm8L4"],
            ["EC1128P3","https://youtu.be/3bzRj1UVCzg"],
            ["2logic1130P1","https://youtu.be/4wDoqJF1ytw"],
            ["2logic1130P2","https://youtu.be/TDxXOro9uwo"],
            ["2logic1130P3","https://youtu.be/S_4i9fDrcnM"],
            ["1logic1201P1","https://youtu.be/OXmaXNwcqgQ"],
            ["1logic1201P2","https://youtu.be/R4rTFU2cYnU"],
            ["1logic1201P3","https://youtu.be/jj-9VUN5B7Q"],
        ],
        "20221208": [
            ["EC1205P1", "https://youtu.be/dHm0_8ts8x4"],
            ["EC1205P2", "https://youtu.be/yCbshbn-_HA"],
            ["EC1205P3", "https://youtu.be/XojVcCrvSUY"],
            ["1logic1208P1", "https://youtu.be/uE4Brf1iPVA"],
            ["1logic1208P2", "https://youtu.be/bvNRHLTywK0"],
        ],
        "20221215": [
            ["EC1212P1", "https://youtu.be/2gAQVpID-D0"],
            ["EC1212P2", "https://youtu.be/_huoOr2Bvec"],
            ["EC1212P3", "https://youtu.be/SycSI9x8kf8"],
            ["2logic1214P1", "https://youtu.be/yFfKmZk3USQ"],
            ["2logic1214P2", "https://youtu.be/ACpCKuqMU5w"],
            ["2logic1214P3", "https://youtu.be/hGQAbwdJ7-s"],
            ["1logic1215P1", "https://youtu.be/j1lWGbAjjOI"],
            ["1logic1215P2", "https://youtu.be/to7yJJCYgYM"],
            ["1logic1215P3", "https://youtu.be/yB8m4HOWQ78"],
        ],
    },
    "111-2": {},
};
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
