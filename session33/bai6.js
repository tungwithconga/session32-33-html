class Job {
    constructor(id, title, description, completed) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
}

let jobs = [];

function addJob() {
    const id = prompt("Nhập ID của công việc:");
    const title = prompt("Nhập tiêu đề công việc:");
    const description = prompt("Nhập mô tả công việc:");
    const completed = prompt("Công việc đã hoàn thành (true/false):").toLowerCase() === 'true';

    const newJob = new Job(id, title, description, completed);
    jobs.push(newJob);
    console.log("Công việc đã được thêm mới thành công!");
}

function displayJobs() {
    console.log("Danh sách công việc:");
    jobs.forEach(job => {
        console.log(`ID: ${job.id}, Title: ${job.title}, Description: ${job.description}, Completed: ${job.completed}`);
    });
}

function findJobById() {
    const searchId = prompt("Nhập ID của công việc cần tìm:");
    const foundJob = jobs.find(job => job.id === searchId);

    if (foundJob) {
        console.log("Thông tin công việc:");
        console.log(`ID: ${foundJob.id}, Title: ${foundJob.title}, Description: ${foundJob.description}, Completed: ${foundJob.completed}`);
    } else {
        console.log("Không tìm thấy công việc có ID này.");
    }
}

function main() {
    let choice;
    do {
        console.log("\n*** Quản lý Công việc ***");
        console.log("1. Thêm mới công việc");
        console.log("2. Hiển thị danh sách công việc");
        console.log("3. Tìm kiếm công việc theo ID");
        console.log("4. Thoát chương trình");

        choice = prompt("Nhập lựa chọn:");

        switch (choice) {
            case '1':
                addJob();
                break;
            case '2':
                displayJobs();
                break;
            case '3':
                findJobById();
                break;
            case '4':
                console.log("Chương trình đã kết thúc.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
        }
    } while (choice !== '4');
}

main();
