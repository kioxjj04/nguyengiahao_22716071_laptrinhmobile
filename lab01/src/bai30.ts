//30. Create a class School with list of Students and Teachers. Add method to display info.
import { Person } from "./bai1";
import { Teacher } from "./bai27";
import { Student } from "./bai2";
export class School {   
    private students: Student[] = [];
    private teachers: Teacher[] = [];

    constructor() {}

    addStudent(student: Student): void {
        this.students.push(student);
    }

    addTeacher(teacher: Teacher): void {
        this.teachers.push(teacher);
    }

    displayInfo(): void {
        console.log("Students:");
        this.students.forEach((student) => student.introduce());

        console.log("Teachers:");
        this.teachers.forEach((teacher) => teacher.introduce());
    }
}