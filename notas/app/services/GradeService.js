let grades = [
    {subject : "Matemáticas", grade: 9.5},
    {subject : "Física", grade: 8.8}
]

export const saveGrade = (grade) =>{
    grades.push(grade);
    // console.log("Arreglo", grades);

}

export const getGrades = () =>{
    return grades;
    
}

export const updateGrade = (nota) =>{

    let gradeRetrieved = find(nota.subject);

    if (gradeRetrieved) {
        gradeRetrieved.grade = nota.grade;
    }
}

const find =(subject) =>{
    return grades.find(item => item.subject==subject);
} 

export const deleteGrade = (subject) =>{


    let index = grades.findIndex(item => item.subject == subject);

    grades.splice(index, 1);

    // console.log(` SUbject ${subject}  Index delete ${index}`);

}
