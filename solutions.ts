const multiplyValue = ( value : number , multiplier? : number ) : number => {
    if(multiplier == 0){
        return 0
    }
    if(multiplier){
        return value * multiplier
    }else{
        return value * 2
    }
    
}


type myType = string | number | boolean


const processInput = (value:myType) =>{
 if(typeof value =="string"){
    return value.trim().toLowerCase()
 }
 if(typeof value == "number"){
    return value * 10
 }
 if(typeof value =="boolean"){
    if(value){
        return "Active"
    }else{
        return "Inactive"
    }
 }
}



type myTuple = readonly[latitude:number, longitude:number, locationName:string] 

const formatCoordinate = (coordinate : myTuple): string =>{
return `Location: ${coordinate[2]} (${coordinate[0]}, ${coordinate[1]})`;
}




const concatenateArrays = <T>(...arrays: T[][]): T[] => {

    let result: T[] = [];

    for (let i = 0; i < arrays.length; i++) {
        result = result.concat(arrays[i]);
    }

    return result;

};



interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

const getPopularCourses = (course: Course[], minStudents: number): Course[] => {

    let result: Course[] = [];

    for (let i = 0; i < course.length; i++) {

        if (course[i].isPublished === true && course[i].students >= minStudents) {

            result.push(course[i]);

        }

    }

    return result;
};



const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {

    let result: T[K][] = [];

    for (let i = 0; i < items.length; i++) {

        result.push(items[i][key]);

    }

    return result;
};



class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}




const validateAgeAsync = (age: number): Promise<string> => {
    return new Promise((res, rej) => {

        if (age < 18) {
            rej(new Error("Access Denied: Must be 18 or older"));
        }
        else {
            setTimeout(() => {
                res("Access Granted");
            }, 1000);
        }

    });
};
