var inp1 = document.getElementById("firstName")
var inp2 = document.getElementById("lastName")
var inp3 = document.getElementById("email")
var inp4 = document.getElementById("contact")
var inp5 = document.getElementById("dateofbirth")
var ts = document.getElementById("TS")
var btn = document.getElementById("btn")
var student = [
    {
        firstName: "hammad",
        fatherName: "asghar",
        // email: "Hammad5533@gmail.com",
        // contact: "76563878156",
        // dateofbirth: "2004-05-6",
        id: Math.ceil(Math.random()*100),
    },

    {
        firstName: "furqan",
        fatherName: "Kareem",
        // email: "kareemX2323@gmail.com",
        // contact: "76563878156",
        // dateofbirth: "2004-05-6",
        id: Math.ceil(Math.random()*100),
    },
    {
        firstName: "MD Furqan",
        fatherName: "MD Nisar",
        // email: "mdfurqan123@gmail.com",
        // contact: "76563878156",
        // dateofbirth: "2004-05-6",
        id: Math.ceil(Math.random()*100),
    },
    {
        firstName: "usman",
        fatherName: "shahbuddin",
        // email: "khan2323@gmail.com",
        // contact: "76563878156",
        // dateofbirth: "2004-05-6",
        id: Math.ceil(Math.random()*100),
    }
]
var TDVAL = document.getElementById("TDVAL");
var main3 = document.getElementById("main03");
var main4 = document.getElementById("main04");
var mainlast = document.getElementById("mainlast");
function data() {
    ts.innerHTML = student.length;
    for (var i = 0; i < student.length; i++) {
        var a = i;
        TDVAL.innerHTML += `<td>${i + 1}</td>
<td>${student[i].firstName}</td>
<td>${student[i].fatherName}</td>
<td>${student[i].id}</td>
<td  onclick="del(${a})"><i class="fa-solid fa-trash"></i></td>`
    }
}
data()

function clickk() {
    if (inp1.value == "") {
        alert("Please fill  out the 1st Input");
        inp1.style.backgroundColor = "red";
        return false;
    } else if (inp2.value == "") {
        alert("Please fill  out the 2nd Input");
        inp2.style.backgroundColor = "red";
        return false;
    }else {
        inp1.style.backgroundColor = "white";
        inp2.style.backgroundColor = "white";
    } 
    var edit = {
        firstName: inp1.value,
        fatherName: inp2.value,
        // email: inp3.value,
        // contact: inp4.value,
        // dateofbirth: inp5.value,
        id: Math.ceil(Math.random()*100),
        
    }
    student.push(edit)
    TDVAL.innerHTML = ""
    data()
    inp1.value = "";
    inp2.value = "";
    // inp3.value = "";
    // inp4.value = "";
    // inp5.value = "";

    main3.style.display = "block";
    main4.style.display = "block";
    mainlast.style.display = "block";
}

function cancle() {
    main3.style.display = "none";
    main4.style.display = "none";
    mainlast.style.display = "none";
};

function del(a){
    student.splice(a,1);
    TDVAL.innerHTML = "";
    data();
}


// <td>${student[i].email}</td>
// <td>${student[i].contact}</td>
// <td>${student[i].dateofbirth}</td>