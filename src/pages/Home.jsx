import React from "react";
import Semester from "../components/semester/Semester";

export default function Home() {
  const semesters = [
    // Semester 1
    [
      { subject: "Mathematics", grade: "A" },
      { subject: "Physics", grade: "B+" },
      { subject: "Chemistry", grade: "A-" },
      // Add more subjects and grades as needed
    ],
  
    // Semester 2
    [
      { subject: "Computer Science", grade: "A+" },
      { subject: "Biology", grade: "B" },
      { subject: "English", grade: "B" },
      // Add more subjects and grades as needed
    ],
  
    // Semester 3
    [
      { subject: "History", grade: "A-" },
      { subject: "Geography", grade: "B+" },
      { subject: "Economics", grade: "A" },
      // Add more subjects and grades as needed
    ],
  
    // Semester 4
    [
      { subject: "Psychology", grade: "B+" },
      { subject: "Sociology", grade: "B-" },
      { subject: "Anthropology", grade: "A-" },
      // Add more subjects and grades as needed
    ],
  
    // Semester 5
    [
      { subject: "Political Science", grade: "A" },
      { subject: "Philosophy", grade: "A+" },
      { subject: "Literature", grade: "B+" },
      // Add more subjects and grades as needed
    ],
  
    // Semester 6
    [
      { subject: "Art History", grade: "A-" },
      { subject: "Music", grade: "A" },
      { subject: "Dance", grade: "A+" },
      // Add more subjects and grades as needed
    ],
  
    // Semester 7
    [
      { subject: "Statistics", grade: "B" },
      { subject: "Accounting", grade: "A-" },
      { subject: "Finance", grade: "B+" },
      // Add more subjects and grades as needed
    ],
  
    // Semester 8
    [
      { subject: "Marketing", grade: "B+" },
      { subject: "Management", grade: "A" },
      { subject: "Business Ethics", grade: "A+" },
      // Add more subjects and grades as needed
    ],
  ];
 

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center ">
          {semesters.map((item, i) => {
            return (
              <div key={i} className="col-md-3 m-2">
                <Semester num={i} data={item} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
