function operationCreator(serial, objectName, result) {
  const createTr = document.createElement("tr");
  createTr.innerHTML = `
    <td>${serial}. </td>
    <td>${objectName}</td>
    <td>${result}cm<sup>2</sup></td>
    <td><button class="bg-violet-500 hover:bg-violet-700 transition-all p-1 my-2 rounded-lg 
     text-white">Convert To m<sup>2</sup></button></td>
    <td><button><img id='btn_delete' src="./img/delete.png" alt="" /></button></td>`;
  document.querySelector("tbody").appendChild(createTr);
}
// serial Number incrementor
let serialNum = 0;

/*This operation for Three common functionalism Object-
-----------------------------------------------------
 1.Triangle, 
 2.Rhombus,
 3.Pentagon 
 */
// select all common operational button by querySelector
const btn_TripleCommon = document.querySelectorAll(
  "#btn_triangle-rhombus-pentagon"
);
//get value and operation each object
for (let btn of btn_TripleCommon) {
  btn.addEventListener("click", function (e) {
    const name = e.target.parentNode.childNodes[3].innerText;
    const value1 =
      e.target.parentNode.childNodes[7].childNodes[1].childNodes[1].value;
    const value2 =
      e.target.parentNode.childNodes[7].childNodes[3].childNodes[1].value;
    if (value1 == "" || value2 == "") {
      Swal.fire("Please Fill Two Fields");
    } else {
      const result = parseFloat((0.5 * value1 * value2).toFixed(2));
      serialNum++;
      operationCreator(serialNum, name, result);
    }
  });
}
/*This operation for Two common functionalism Object-
-----------------------------------------------------
 1.Rectangle, 
 2.Parallelogram,
 */
// select all common operational button by querySelector
const btn_DualCommon = document.querySelectorAll(
  "#btn-rectangle_parallelogram"
);
//get value and operation each object
for (let btn of btn_DualCommon) {
  btn.addEventListener("click", function (e) {
    const name = e.target.parentNode.childNodes[3].innerText;
    const value1 =
      e.target.parentNode.childNodes[7].childNodes[1].childNodes[1].value;
    const value2 =
      e.target.parentNode.childNodes[7].childNodes[3].childNodes[1].value;
    if (value1 == "" || value2 == "") {
      Swal.fire("Please Fill Two Fields");
    } else {
      const result = parseFloat((value1 * value2).toFixed(2));
      serialNum++;
      operationCreator(serialNum, name, result);
    }
  });
}
// Ellipse Operation
document.getElementById("btn-ellipse").addEventListener("click", function (e) {
  const name = e.target.parentNode.childNodes[3].innerText;
  const value1 =
    e.target.parentNode.childNodes[7].childNodes[1].childNodes[1].innerText;
  const value2 =
    e.target.parentNode.childNodes[7].childNodes[1].childNodes[3].innerText;
  if (value1 == "" || value2 == "") {
    Swal.fire("Please Fill Two Fields");
  } else {
    const result = parseFloat((Math.PI * value1 * value2).toFixed(2));
    serialNum++;
    operationCreator(serialNum, name, result);
  }
});
// Ellipse Value edit operation
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
document.getElementById("btn_edit").addEventListener("click", function (e) {
  const editArea = e.target.parentNode.parentNode.nextElementSibling;
  editArea.style.display = "flex";
});
document
  .getElementById("set_edit_value")
  .addEventListener("click", function (e) {
    const value1 = e.target.parentNode.childNodes[1].childNodes[1].value;
    const value2 = e.target.parentNode.childNodes[3].childNodes[1].value;
    setInnerText("value1", value1);
    setInnerText("value2", value2);
    e.target.parentNode.style.display = "none";
  });

// setup input validation
let allInput = document.querySelectorAll('input[type="number"]');
for (let input of allInput) {
  input.addEventListener("keyup", function (e) {
    if (e.target.value < 0) {
      Swal.fire({
        title: "Be Positive!",
        text: "Please Enter a Positive Number",
        icon: "error",
        confirmButtonText: "Ok",
      });

      e.target.value = "";
    }
  });
}

// Random Color Generator
function colorGenerator() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
const geometryObjectBody = document.querySelectorAll(".geometry-item");
for (let item of geometryObjectBody) {
  item.addEventListener("mouseenter", function (e) {
    e.target.style.backgroundColor = colorGenerator();
  });
  item.addEventListener("mouseleave", function (e) {
    e.target.style.backgroundColor = "";
  });
}

document.getElementById("btn_blog").addEventListener("click", function (e) {
  location.href = "./blog/blog.html";
});
// --------------------------------------
