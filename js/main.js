/*
    Project Name = Geometry Genius
    Author Name = Mahamudul Hasan
    Date Created = 2023-02-18
    ---------------------------
    Description = In this project the area of various geometry objects are calculated
                and after the calculation is stored in the calculation area.
 */

// Serial Number Container
let serialNum = 0;

// After Calculation This element append in Calculation area
function operationCreator(serial, objectName, result) {
  const createTr = document.createElement("tr");
  createTr.innerHTML = `
    <td>${serial}. </td>
    <td>${objectName}</td>
    <td>${result}cm<sup>2</sup></td>
    <td><button class="bg-violet-500 hover:bg-violet-700 transition-all p-1 my-2 rounded-lg 
     text-white">Convert To m<sup>2</sup></button></td>
    <td><button id='btn_delete'><img src="./img/delete.png" alt="" /></button></td>`;
  document.querySelector("tbody").appendChild(createTr);
  // select all delete button
  const allDeleteBtn = document.querySelectorAll("#btn_delete");
  for (let btn of allDeleteBtn) {
    btn.addEventListener("click", function (e) {
      e.target.parentElement.parentElement.parentElement.remove();
    });
  }
}

/*This operation for Three common functionalism Object-
-----------------------------------------------------
 1.Triangle, 
 2.Rhombus,
 3.Pentagon 
 */
function geometryCalculationWith0_5(geometryObjectName) {
  document
    .getElementById(geometryObjectName)
    .addEventListener("click", function (e) {
      const name = e.target.parentNode.childNodes[3].innerText;
      const value1 =
        e.target.parentNode.childNodes[7].childNodes[1].childNodes[1].value;
      const value2 =
        e.target.parentNode.childNodes[7].childNodes[3].childNodes[1].value;
      // check validation
      if (value1 == "" || value2 == "") {
        Swal.fire("Please Fill Two Fields");
      } else {
        // if valid this operation will execute
        const result = parseFloat((0.5 * value1 * value2).toFixed(2));
        serialNum++;
        operationCreator(serialNum, name, result);
      }
    });
}
// 1.Triangle
geometryCalculationWith0_5("btn_triangle");
// 2.Rhombus
geometryCalculationWith0_5("btn_rhombus");
// 3.Pentagon
geometryCalculationWith0_5("btn_pentagon");

/*This operation for Two common functionalism Object-
-----------------------------------------------------
 1.Rectangle, 
 2.Parallelogram,
 */
function geometryCalculationWithouts0_5(geometryObjectName) {
  document
    .getElementById(geometryObjectName)
    .addEventListener("click", function (e) {
      const name = e.target.parentNode.childNodes[3].innerText;
      const value1 =
        e.target.parentNode.childNodes[7].childNodes[1].childNodes[1].value;
      const value2 =
        e.target.parentNode.childNodes[7].childNodes[3].childNodes[1].value;
      // check validation
      if (value1 == "" || value2 == "") {
        Swal.fire("Please Fill Two Fields");
      } else {
        // if valid this operation will execute
        const result = parseFloat((value1 * value2).toFixed(2));
        serialNum++;
        operationCreator(serialNum, name, result);
      }
    });
}
// 1.Rectangle
geometryCalculationWithouts0_5("btn_rectangle");
// 2.Parallelogram
geometryCalculationWithouts0_5("btn_parallelogram");

// Ellipse Operation
document.getElementById("btn_ellipse").addEventListener("click", function (e) {
  const name = e.target.parentNode.childNodes[3].innerText;
  const value1 =
    e.target.parentNode.childNodes[7].childNodes[1].childNodes[1].innerText;
  const value2 =
    e.target.parentNode.childNodes[7].childNodes[1].childNodes[3].innerText;

  // check validation
  if (value1 == "" || value2 == "") {
    Swal.fire("Please Fill Two Fields");
  } else {
    // if valid this operation will execute
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
    if (value1 == "" || value2 == "") {
      Swal.fire("Please Fill Two Fields");
    } else {
      setInnerText("value1", value1);
      setInnerText("value2", value2);
      e.target.parentNode.style.display = "none";
    }
  });

// check all input validation
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
