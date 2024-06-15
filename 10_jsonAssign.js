const employeeJSON = `{
    "name": "Alexis Melon",
    "id": "E00245",
    "role":["Dev","DBA"],
    "age": 23,
    "doj":"11-12-2019",
    "married": false,
    "address":
    {
        "street": "32, Laham St.",
        "city": "Innsbruck",
        "country": "Austria"
    },
    "referred-by" : "E0012"

}`
const employee = JSON.parse(employeeJSON);
console.log(`Employee role - ${employee.role[0]}`);
const nameParts = employee.name.split(" ");
const lastName = nameParts[nameParts.length - 1];
console.log(`Employee Last Name - ${lastName}`);

const joiningYearOnly = employee.doj.split("-")[2];
console.log(`Employee joining year - ${joiningYearOnly}`);