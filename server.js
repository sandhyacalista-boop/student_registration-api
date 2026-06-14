const express = require("express");

const app = express();

app.use(express.json());

let students = [];

// GET API
app.get("/students", (req, res) => {
    res.json(students);
});

// POST API
app.post("/students", (req, res) => {

    const { name, age } = req.body;

    // Validation
    if (!name || !age) {
        return res.status(400).json({
            message: "Name and Age are required"
        });
    }

    const student = {
        id: students.length + 1,
        name,
        age
    };

    students.push(student);

    res.status(201).json({
        message: "Student Added Successfully",
        student
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});