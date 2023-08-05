import React from "react";
import Semester from "../components/semester/Semester";

export default function Home() {
  const semesters = [
    // Semester 1
    [
        { Physics: ['physics_book1', 'physics_book2'] },
        { Chemistry: ['chemistry_book1.pdf', 'chemistry_book2.pdf'] },
        { Math: ['math_book1.pdf', 'math_book2.pdf'] },
        // Add more subjects and books as needed
    ],

    // Semester 2
    [
        { ComputerScience: ['computer_Science.pdf', 'physics_book2.pdf'] },
        { Biology: ['physics_book1.pdf', 'physics_book2.pdf'] },
        { English: ['physics_book1.pdf', 'physics_book2.pdf'] },
        // Add more subjects and books as needed
    ],

    // Semester 3
    [
        { History: ['physics_book1.pdf', 'physics_book2.pdf'] },
        { Geography: ['physics_book1.pdf', 'physics_book2.pdf'] },
        { Economics: ['physics_book1.pdf', 'physics_book2.pdf'] },
        // Add more subjects and books as needed
    ],

    // Semester 4
    [
        { Psychology: ['physics_book1.pdf', 'physics_book2.pdf'] },
        { Sociology: ['physics_book1.pdf', 'physics_book2.pdf'] },
        { Anthropology: ['physics_book1.pdf', 'physics_book2.pdf'] },
        // Add more subjects and books as needed
    ],

    // Semester 5
    [
        { PoliticalScience: ['physics_book1.pdf', 'physics_book2.pdf'] },
        { Philosophy: ['physics_book1.pdf', 'physics_book2.pdf'] },
        { Literature: ['physics_book1.pdf', 'physics_book2.pdf'] },
        // Add more subjects and books as needed
    ],

    // Semester 6
    [
        { ArtHistory: ['physics_book1.pdf', 'physics_book2.pdf'] },
        { Music: ['physics_book1.pdf', 'physics_book2.pdf'] },
        { Dance: ['physics_book1.pdf', 'physics_book2.pdf'] },
        // Add more subjects and books as needed
    ],

    // Semester 7
    [
        { Statistics: ['physics_book1.pdf', 'physics_book2.pdf'] },
        { Accounting: ['physics_book1.pdf', 'physics_book2.pdf'] },
        { Finance: ['physics_book1.pdf', 'physics_book2.pdf'] },
        // Add more subjects and books as needed
    ],

    // Semester 8
    [
        { Marketing: ['physics_book1.pdf', 'physics_book2.pdf'] },
        { Management: ['physics_book1.pdf', 'physics_book2.pdf'] },
        { BusinessEthics: ['physics_book1.pdf', 'physics_book2.pdf'] },
        // Add more subjects and books as needed
    ],
];



  return (
    <>
      <div className="container-fluid main-contact p-5">
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
