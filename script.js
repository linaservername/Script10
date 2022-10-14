const data1 = ['Michael','Smith', 'Development', 'Softwaredeveloper', 2000]
function func(emp) {
    let[name, surname, department] = emp
    console.log(name, surname, department);
}

func(data1);

const data2 = ['Ivan', 'Ivanov', 'Development department'];
function func(emp) {
    let position;
    if (emp[3] !== undefined) {
        position = emp[3]
    } else {
        position = 'Junior'
    }

    let [name, surname, department] = emp
    console.log(name, surname, department, position);
}
func(data2);

const data3 = {
    color : 'red',
    width : 400,
    height : 500
}
let{color, width, height} = data3
console.log(color, width, height);


