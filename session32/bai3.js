let students = [];
function inputStudentInfo() {
    let id = prompt("Nhập ID của sinh viên:");
    let name = prompt("Nhập tên của sinh viên:");

    let student = { id: id, name: name };
    students.push(student);
}

function inputNumberOfStudents() {
    let numberOfStudents = parseInt(prompt("Nhập số lượng sinh viên:"));

    if (isNaN(numberOfStudents) || numberOfStudents <= 0) {
        alert("Vui lòng nhập một số nguyên dương.");
        return;
    }

    for (let i = 0; i < numberOfStudents; i++) {
        inputStudentInfo();
    }

    console.log("Danh sách sinh viên:");
    console.log(students);
}
inputNumberOfStudents();
