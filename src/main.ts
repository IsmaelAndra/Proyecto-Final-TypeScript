import { GradeBookSetup } from "./entities/grade-book-setup";
import { Activity } from "./entities/activity";
import { Student } from "./entities/student";
import { Teacher } from "./entities/teacher";
import { Summary } from "./entities/summary-of-qualifications";
import { Course } from "./entities/course";

let students: Student[] = [];
let teachers: Teacher[] = [];
let gradesBookSetup: GradeBookSetup[] = [];
let activity: Activity[] = [];
let summary: Summary[] = [];
let course: Course[] = [];

enum Area {
    Desarrollo = "Desarrollo de Software",
    Marketing = "Marketing",
    Turismo = "Turismo",
}

function addStudent(): void {
    let currentStudent: Student = {
        fullName: readFormHtml("fullName"),
        identification: parseInt(readFormHtml("identification")),
        mail: readFormHtml("mail"),
        direction: readFormHtml("direction"),
        enrollment: parseInt(readFormHtml("enrollment")),
        level: readFormHtml("level"),
    }
    students.push(currentStudent);
    console.table(students);
    initSelect();
}

function addTeacher(): void {
    let currentTeacher: Teacher = {
        fullName: readFormHtml("fullName-teacher"),
        identification: parseInt(readFormHtml("identification-teacher")),
        mail: readFormHtml("mail-teacher"),
        direction: readFormHtml("direction-teacher"),
        title: readFormHtml("title-teacher"),
        area: readFormHtml("area-teacher")
    }
    teachers.push(currentTeacher);
    console.table(teachers);
    initSelect();
}

function addActivity(): void {
    let currentActivity: Activity = {
        name: readFormHtml("name-activity")
    }
    activity.push(currentActivity);
    console.table(activity);
    initSelect();
}

function addCourse(): void {
    let currentCourse: Course = {
        course: readFormHtml("course"),
    }
    course.push(currentCourse);
    console.table(course);
    initSelect();
}

function addGradeBookSetup(): void {
    let currentGradeBookSetup: GradeBookSetup = {
        value: readFormHtml("value-gradebook"),
        course: readFormHtml("course-gradebook"),
        activity: readFormHtml("activity"),
        maximunGrade: parseInt(readFormHtml("maximungrade-gradebook")),
    }
    gradesBookSetup.push(currentGradeBookSetup);
    console.table(gradesBookSetup);
    initSelect();
}

function addSummary(): void {
    let currentSummary: Summary = {
        detailStudent: readFormHtml("detail-student"),
        detailCourse: readFormHtml("detail-course"),
        detailTeacher: readFormHtml("detail-teacher"),
        note: parseInt(readFormHtml("detail-note"))
    }
    summary.push(currentSummary);
    console.table(summary);

    if (currentSummary.note >= 70 && currentSummary.note <= 100) {
        let estado = document.getElementById("estado") as HTMLDivElement;
        estado.innerHTML = "<label id='estado' style='color: green; font-weight: bold'><img src='./img/visto.png' width='20px' height='20px'> Aprovado</label>";
    } else if (currentSummary.note >= 0 && currentSummary.note < 70) {
        let estado = document.getElementById("estado") as HTMLDivElement;
        estado.innerHTML = "<label id='estado' style='color: red; font-weight: bold'><img src='./img/x.png' width='20px' height='20px'> Reprovado</label>";
    } else {
        let estado = document.getElementById("estado") as HTMLDivElement;
        estado.innerHTML = "<label id='estado' style='color: blue; font-weight: bold'><img src='./img/info.png' width='20px' height='20px'> Nota no permitida</label>";
    }
    TABLE();
};


function initSelect(): void {
    let area = document.getElementById("area-teacher") as HTMLSelectElement;
    let areas = Object.values(Area);
    area.innerHTML = ""
    areas.forEach(
        (value) => {
            let option = document.createElement("option");
            option.value = value;
            option.text = value,
                area.add(option);
        }
    );

    let activities = document.getElementById("activity") as HTMLSelectElement;
    document.querySelectorAll("#activity option").forEach(option => option.remove());
    activity.forEach(
        (value) => {
            let option = document.createElement("option");
            option.value = value.name;
            option.text = value.name;
            activities.add(option)
        }
    );

    let name_Student = document.getElementById("detail-student") as HTMLSelectElement;
    document.querySelectorAll("#detail-student option").forEach(option => option.remove());
    students.forEach(
        (value) => {
            let option = document.createElement("option");
            option.value = value.fullName;
            option.text = value.fullName,
                name_Student.add(option);
        }
    );

    let detail_Course = document.getElementById("detail-course") as HTMLSelectElement;
    document.querySelectorAll("#detail-course option").forEach(option => option.remove());
    course.forEach(
        (value) => {
            let option = document.createElement("option");
            option.value = value.course;
            option.text = value.course,
                detail_Course.add(option);
        }
    );

    let course_gradebook = document.getElementById("course-gradebook") as HTMLSelectElement;
    document.querySelectorAll("#course-gradebook option").forEach(option => option.remove());
    course.forEach(
        (value) => {
            let option = document.createElement("option");
            option.value = value.course;
            option.text = value.course,
                course_gradebook.add(option);
        }
    );

    let name_Teacher = document.getElementById("detail-teacher") as HTMLSelectElement;
    document.querySelectorAll("#detail-teacher option").forEach(option => option.remove());
    teachers.forEach(
        (value) => {
            let option = document.createElement("option");
            option.value = value.fullName;
            option.text = value.fullName,
                name_Teacher.add(option);
        }
    );

}
initSelect();

function TABLE(): void {
    let nombre = document.getElementById("detail-student") as HTMLElement;
    let identificacion = document.getElementById("identification") as HTMLElement;
    let nivel = document.getElementById("level") as HTMLElement;
    let curso = document.getElementById("detail-course") as HTMLSelectElement;
    let docente = document.getElementById("detail-teacher") as HTMLElement;
    let nota = document.getElementById("detail-note") as HTMLElement;
    let estado = document.getElementById("estado") as HTMLElement;
    let table = document.getElementById("table") as HTMLElement;
    let td = document.createElement("td");
    let td0 = document.createElement("td");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let tr = document.createElement("tr");
    let textnombre = `${nombre.innerText}`;
    let textidentificacion = `${identificacion.innerText}`;
    let textnivel = `${nivel.innerText}`;
    let textcurso = `${curso.innerText}`;
    let textdocente = `${docente.innerText}`;
    let textnota = `${nota.innerText}`;
    let textestado = `${estado.innerText}`;
    tr.classList.add("text-center", "text-white", "border", "border-4", "border-dark");
    td.classList.add("text-center", "text-white", "border", "border-4", "border-dark");
    td0.classList.add("text-center", "text-white", "border", "border-4", "border-dark");
    td1.classList.add("text-center", "text-white", "border", "border-4", "border-dark");
    td2.classList.add("text-center", "text-white", "border", "border-4", "border-dark");
    td3.classList.add("text-center", "text-white", "border", "border-4", "border-dark");
    td4.classList.add("text-center", "text-white", "border", "border-4", "border-dark");
    td5.classList.add("text-center", "text-white", "border", "border-4", "border-dark");
    td6.classList.add("text-center", "text-white", "border", "border-4", "border-dark");
    td0.append(textnombre);
    td1.append(textidentificacion);
    td2.append(textnivel);
    td3.append(textcurso);
    td4.append(textdocente);
    td5.append(textnota);
    td6.append(textestado);
    tr.append(td, td0, td1, td2, td3, td4, td5, td6);
    table.append(tr);
}

function readFormHtml(id: string): string {
    return (<HTMLInputElement>document.getElementById(id))!.value;
}