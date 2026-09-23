// Student Object
const student = {
  studentName: "Nafay Abdullah",
  registrationNumber: "2024-CS-014",
  degreeProgram: "BSc Computer Science",
  semester: 5,
  cgpa: 3.82,
  attendance: 94,
  assignmentMarks: 28,
  midtermMarks: 18,
  finalExamMarks: 47
};

// Max marks for each subject
const assignmentMax = 30;
const midtermMax = 20;
const finalExamMax = 50;
const totalMaxMarks = assignmentMax + midtermMax + finalExamMax;

// Academic Calculation
function calculatePerformance(studentData) {
  const totalMarks = studentData.assignmentMarks + studentData.midtermMarks + studentData.finalExamMarks;
  const percentage = (totalMarks / totalMaxMarks) * 100;

  let grade = "F";

  if (percentage >= 80) {
    grade = "A";
  } else if (percentage >= 70) {
    grade = "B";
  } else if (percentage >= 60) {
    grade = "C";
  } else if (percentage >= 50) {
    grade = "D";
  } else {
    grade = "F";
  }

  let passStatus = "Fail";
  if (percentage >= 50) {
    passStatus = "Pass";
  }

  // Scholarship logic using logical operators
  let scholarshipStatus = "Not Eligible";

  if (studentData.cgpa >= 3.8 && studentData.attendance >= 90 && percentage >= 85) {
    scholarshipStatus = "Gold Scholarship";
  } else if (
    (studentData.cgpa >= 3.5 && studentData.attendance >= 80 && percentage >= 75) ||
    (studentData.cgpa >= 3.7 && studentData.attendance >= 85 && percentage >= 70)
  ) {
    scholarshipStatus = "Silver Scholarship";
  }

  // Academic warning logic
  let academicStatus = "Good Standing";

  if (percentage < 50 || studentData.attendance < 60 || studentData.cgpa < 2.2) {
    academicStatus = "Critical";
  } else if (percentage < 65 || studentData.attendance < 75 || studentData.cgpa < 2.8) {
    academicStatus = "Academic Warning";
  }

  return {
    totalMarks: totalMarks,
    percentage: percentage,
    grade: grade,
    passStatus: passStatus,
    scholarshipStatus: scholarshipStatus,
    academicStatus: academicStatus
  };
}

// Operator demonstration using real student data
const totalMarks = student.assignmentMarks + student.midtermMarks + student.finalExamMarks;
const comparisonCheck = student.cgpa >= 3.5 && student.attendance >= 80 && student.semester >= 5;
const logicalCheck = !(student.cgpa < 3.0) && (student.attendance >= 75 || totalMarks >= 80);

// Show student information in the webpage
function showStudentProfile() {
  const performance = calculatePerformance(student);

  document.getElementById("student-profile").innerHTML = `
    <p><strong>Name:</strong> ${student.studentName}</p>
    <p><strong>Registration No:</strong> ${student.registrationNumber}</p>
    <p><strong>Program:</strong> ${student.degreeProgram}</p>
    <p><strong>Semester:</strong> ${student.semester}</p>
    <p><strong>CGPA:</strong> ${student.cgpa}</p>
    <p><strong>Attendance:</strong> ${student.attendance}%</p>
  `;

  document.getElementById("student-metrics").innerHTML = `
    <p><strong>Assignment Marks:</strong> ${student.assignmentMarks}/${assignmentMax}</p>
    <p><strong>Midterm Marks:</strong> ${student.midtermMarks}/${midtermMax}</p>
    <p><strong>Final Exam Marks:</strong> ${student.finalExamMarks}/${finalExamMax}</p>
    <p><strong>Total Marks:</strong> ${performance.totalMarks}/${totalMaxMarks}</p>
    <p><strong>Percentage:</strong> ${performance.percentage.toFixed(2)}%</p>
    <p><strong>Grade:</strong> ${performance.grade}</p>
    <p><strong>Pass/Fail:</strong> ${performance.passStatus}</p>
    <p><strong>Scholarship Status:</strong> ${performance.scholarshipStatus}</p>
    <p><strong>Academic Status:</strong> ${performance.academicStatus}</p>
  `;
}

// Final report output
function showAcademicReport() {
  const performance = calculatePerformance(student);

  document.getElementById("academic-report").textContent = `
================================
STUDENT ACADEMIC REPORT
================================

Student Name: ${student.studentName}
Registration No: ${student.registrationNumber}
Program: ${student.degreeProgram}
Semester: ${student.semester}

CGPA: ${student.cgpa}
Attendance: ${student.attendance}%

Assignment Marks: ${student.assignmentMarks}/${assignmentMax}
Midterm Marks: ${student.midtermMarks}/${midtermMax}
Final Exam Marks: ${student.finalExamMarks}/${finalExamMax}

Total Marks: ${performance.totalMarks}/${totalMaxMarks}
Percentage: ${performance.percentage.toFixed(2)}%
Grade: ${performance.grade}
Pass/Fail: ${performance.passStatus}
Academic Status: ${performance.academicStatus}
Scholarship Status: ${performance.scholarshipStatus}
`;
}

// Four test scenarios
function showScenarioResults() {
  const scenarios = [
    {
      title: "Scenario 1 - High Performing Student",
      data: { studentName: "Sara Ali", cgpa: 3.95, attendance: 96, assignmentMarks: 29, midtermMarks: 19, finalExamMarks: 49 }
    },
    {
      title: "Scenario 2 - Average Student",
      data: { studentName: "Hamza Noor", cgpa: 3.28, attendance: 82, assignmentMarks: 24, midtermMarks: 15, finalExamMarks: 35 }
    },
    {
      title: "Scenario 3 - Low Attendance",
      data: { studentName: "Mina Iqbal", cgpa: 3.74, attendance: 67, assignmentMarks: 27, midtermMarks: 18, finalExamMarks: 48 }
    },
    {
      title: "Scenario 4 - Poor Academic Performance",
      data: { studentName: "Usman Tariq", cgpa: 2.05, attendance: 52, assignmentMarks: 12, midtermMarks: 9, finalExamMarks: 20 }
    }
  ];

  let output = "";

  for (let i = 0; i < scenarios.length; i++) {
    const result = calculatePerformance(scenarios[i].data);
    output += `
      <div class="scenario-card">
        <h4>${scenarios[i].title}</h4>
        <p><strong>Grade:</strong> ${result.grade}</p>
        <p><strong>Pass/Fail:</strong> ${result.passStatus}</p>
        <p><strong>Scholarship:</strong> ${result.scholarshipStatus}</p>
        <p><strong>Academic Status:</strong> ${result.academicStatus}</p>
      </div>
    `;
  }

  document.getElementById("scenario-results").innerHTML = output;
}

// Hoisting demonstration
console.log("Hoisting with var:");
console.log(hoistedExample);
var hoistedExample = "Var is hoisted, so it can be used before assignment.";
console.log("After assignment:", hoistedExample);

console.log("Hoisting with let:");
try {
  console.log(letExample);
} catch (error) {
  console.log("Error found with let before declaration:", error.message);
}
let letExample = "Let is not available before declaration.";
console.log("After declaration:", letExample);

// Run everything when page loads
document.addEventListener("DOMContentLoaded", function () {
  showStudentProfile();
  showAcademicReport();
  showScenarioResults();

  console.log("Arithmetic operators result:", totalMarks);
  console.log("Comparison result:", comparisonCheck);
  console.log("Logical result:", logicalCheck);
});
