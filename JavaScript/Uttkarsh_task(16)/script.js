let students = [
    {
        name: "Uttkarsh",
        marks: 78,
        class: "10th",
        address: "Nagpur"
    },
    {
        name: "Poorva",
        marks: 79,
        class: "10th",
        address: "Mumbai"
    },
    {
        name: "Anadhi",
        marks: 81,
        class: "10th",
        address: "Pune"
    },
    {
        name: "Mayank",
        marks: 85,
        class: "10th",
        address: "Delhi"
    },
    {
        name: "Anshika",
        marks: 92,
        class: "10th",
        address: "Nashik"
    },
    {
        name: "tanisha",
        marks: 74,
        class: "10th",
        address: "Bangalore"
    },
    {
        name: "Raghav",
        marks: 88,
        class: "10th",
        address: "Hyderabad"
    },
    {
        name: "Rohan",
        marks: 69,
        class: "10th",
        address: "Pune"
    },
    {
        name: "Ishita",
        marks: 95,
        class: "10th",
        address: "Mumbai"
    },
    {
        name: "Aditya",
        marks: 82,
        class: "10th",
        address: "Nagpur"
    }
];
let studentCards = document.getElementById("studentCards");
let searchInput = document.getElementById("searchInput");
function displayStudents(list) {
    studentCards.innerHTML = "";
    list.map(function(student) {
    studentCards.innerHTML += `
        <div class="card">
            <p>Name: ${student.name}</p>
            <p>Marks: ${student.marks}</p>
            <p>Class: ${student.class}</p>
            <p>Address: ${student.address}</p>
        </div>
        `;
    });
}
displayStudents(students);
searchInput.addEventListener("input", function() {
    let searchText = searchInput.value.toLowerCase()
    let result = students.filter(function(student) {
        return student.name.toLowerCase().includes(searchText);
    });
    displayStudents(result);
});