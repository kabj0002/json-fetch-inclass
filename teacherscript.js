//JSON er et array af objekter

window.addEventListener("DOMContentLoaded", init);
//Når DOM på siden er loaded kommer der en funktion

const teacherURI = "teacher.json";

let teacherList;
let teacherTemplate;

function init() {
  teacherList = document.querySelector("#teacher_list");
  console.log("teacherList", teacherList);

  teacherTemplate = document.querySelector("template").content;
  console.log("template", teacherTemplate);

  fetch(teacherURI)
    .then((response) => {
      console.log("response", response);
      return response.json();
    })
    .then(logJSON);
}

function logJSON(json) {
  console.log("json", json);
  json.forEach(showTeacher);
}

function showTeacher(teacher) {
  const clone = teacherTemplate.cloneNode(true);
  clone.querySelector("h3").textContent = teacher.name + " " + teacher.surname;
  clone.querySelector("p").textContent = teacher.topics[0];
  teacherList.appendChild(clone);
}
