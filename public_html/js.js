var receptek = [];
var hozzavalok = [];
var text = "";
var szoveg1 = "";
$(function () {

    $.ajax(
            {url: "etelek.json",
                success: function (result) {
                    receptek = result.receptkonyv;
                    console.log("ajax hivasban");
                    megjelenit();
                }
            }
    );
});
/*console.log("recepten kivul");
 $("article").append(receptek[0].nev);*/

function megjelenit() {/*adatok megjelenitese*/
    $("article").append("<table></table>");
    var szoveg = "<tr id='fejléc'><th>NEV</th><th>ELKIDO</th><th>KEP</th><th>LEIRAS</th><th>HOZZAVALOK</th></tr>";
    for (var index = 0; index < receptek.length; index++) {

        szoveg += "<tr id='" + index + "'>";
        hatter();
        for (var item in receptek[index]) {
//                console.log(index+"index");
            if (item === "hozzavalok") {
                szoveg += "<td id='" + index + "'>";
                for (var i = 0; i < receptek[index].hozzavalok.length; i++) {
//                    console.log(receptek[index].hozzavalok[i]); Ezzel kiiratjuk az indexedik elemet a receptek tömbböl ,majd a hozzavalókból az i edik elemet; index=0,1,2 ;i=0,1,2.0,1.0,1,2,3,4 lehetséges
                    for (const x in receptek[index].hozzavalok[i]) {
                        text = x;
                        console.log(text);
                        szoveg += text + ": " + receptek[index].hozzavalok[i][text] + ", ";
                    }
                }
                szoveg += "</td>";
            } else if (item === "kep") {
                var seged=0;
                szoveg += "<td id='" + "kepkep"+index + "'></td>";
//                $("article table").append(szoveg);
//                    szoveg1="#kepek"+ index+" img";
                    
                    var x1 = document.createElement("IMG");
                    x1.setAttribute("src", receptek[seged]["kep"]);
                    x1.setAttribute("height","200");
                    x1.setAttribute("alt", "3");
                    seged++;
                    var x2 = document.createElement("IMG");
                    x2.setAttribute("src", receptek[seged]["kep"]);
                    x2.setAttribute("height","200");
                    x2.setAttribute("alt", "3");
                    seged++;
                    var x3 = document.createElement("IMG");
                    x3.setAttribute("src", receptek[seged]["kep"]);
                    x3.setAttribute("height","200");
                    x3.setAttribute("alt", "3");
//                    ('<img src="asdasd">');
//                $("#kepek" + index + " img").attr("src", receptek[index]["kep"]);
//                $(szoveg1).attr("src", receptek[index]["kep"]);
//                $("#0").attr("src", receptek[index]["kep"]);
//                for (var i = 0; i < szoveg.length; i++) {
//                    console.log(szoveg[i].src);
//                }

//                <img src="kepek/_DSC7025.jpg" alt=""/>
                
                console.log(item);
            } else {
                szoveg += "<td id='" + index + "'>" + receptek[index][item] + "</td>";
            }
//            console.log(item);
//            if(receptek[index][item]==="[object Object],[object Object],[object Object]"){
//                szoveg += "<td id1='" + index + "'>" + text + ": " + receptek[index].hozzavalok[1][text] + "</td>";
//            }else{

//            }
//            $("#kep div").append("<ul><li>" + text + ": " + receptek[index].hozzavalok[item][text] + "</li></ul>");
        }
//        console.log(index);
//            console.log(receptek);
        szoveg += "</tr>";
        /*       $("article").append("<tr><td>"+receptek[index]["nev"]+"</td><td>"+receptek[index]["elkIdo"]+"</td><td>"+receptek[index]["kep"]+"</td><td>"+receptek[index]["leiras"]+"</td><td>"+receptek[index]["hozzavalok"]+"</td></tr>");
         */
    }

    $("article table").append(szoveg);
    $("#kepkep0").append(x1);
    $("#kepkep1").append(x2);
    $("#kepkep2").append(x3);
    $("article table tr").hover(hatter);
    $("tr").on("click", etelKivalasztas);

}
function hatter() {
    var id = $(this).attr("id");
    if (id === "fejléc") {
    } else {
        $(this).toggleClass("hatterszin");
    }

    /*   console.log($(this).attr("id"));
     */
    /*  $("kep").style.color = "blue";*/
}

function etelKivalasztas() {

    if ($(this).attr("id") !== "fejléc") {
        sorID = Number($(this).attr("id"));
        $("#kep img").attr("src", receptek[sorID]["kep"]);
        $("#kep img").attr("alt", receptek[sorID].nev);
        $("#kep div").html("<h2>" + receptek[sorID]["nev"] + "</h2>");
        $("#kep div").append("<h3>" + "Hozzávalók" + "</h3>");

//        for (var i = 0; i < receptek[sorID].hozzavalok.length; i++) {
//            console.log(receptek[sorID].hozzavalok[i]);
//            $("#kep div").append("<ul><li>" + receptek[sorID].hozzavalok[i] + "</li></ul>");
//        }

        for (var y = 0; y < receptek[sorID].hozzavalok.length; y++) {
            for (const x in receptek[sorID].hozzavalok[y]) {
                text = x;
            }
            $("#kep div").append("<ul><li>" + text + ": " + receptek[sorID].hozzavalok[y][text] + "</li></ul>");
        }


        $("#kep div").append("<h3>" + "Étel ekészítése" + "</h3>");
        $("#kep div").append("<p>" + receptek[sorID]["leiras"] + "</p>");

    }

}

