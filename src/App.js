import logo from './logo.svg';
import './App.css';
import Control from './components/Control';
import ListStudents from './components/ListStudents';
import Form from './components/Form';
import { useEffect, useState } from 'react';
let cnt =0;

function App() {
  cnt++;
  const [students, setStudents] = useState([
    {
      id: "SV001",
      name: "Nguyễn Văn A",
      age: 21,
      gender: true,
      birthDate: "2000/08/28",
      birthPlace: "HN",
      address: "số 1 Cổ Nhuế"
    },
    {
      id: "SV002",
      name: "Nguyễn Thị B",
      age: 16,
      gender: false,
      birthDate: "1998/04/01",
      birthPlace: "HN",
      address: "số 1 Cổ Nhuế"
    },
    {
      id: "SV003",
      name: "Nguyễn Văn C",
      age: 25,
      gender: true,
      birthDate: "1992/05/15",
      birthPlace: "HN",
      address: "số 1 Cổ Nhuế"
    }
  ])
  const [searchData, setSearchData] = useState("")
  const [sortData, setSortData] = useState({
    sortDir: "",
    sortBy: "",
  })
  const recieveSearchData = (searchData) => {
    setSearchData(searchData)
  }

  const [display, setDisplay] = useState([])

  let sort = display
  useEffect(() => {
    if (sortData.sortDir == "name") {
      if (sortData.sortBy == "ASC") {
        sort.sort((a, b) => (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0);
      } else {
        sort.sort((a, b) => (a.name > b.name) ? -1 : (a.name > b.name) ? 1 : 0);
      }
    } else if (sortData.sortDir == "age") {
      if (sortData.sortBy == "ASC") {
        sort.sort((a, b) => a.age - b.age)
      } else {
        sort.sort((a, b) => b.age - a.age)
      }
    }
    
    setDisplay(sort)
    console.log("chayy 1");
  }, [sortData]) 
  // let studentsData = [];
  useEffect(() => {
    if (searchData == "") {
      setDisplay([...students]);
    } else {
      setDisplay(students.filter((student) => student.name.toLowerCase().includes(searchData.toLowerCase())))
    }
  }, [searchData])
  // if (searchData == "") {
  //   studentsData = [...students];
  // } else {
  //   studentsData = students.filter((student) => student.name.toLowerCase().includes(searchData.toLowerCase()))
  // }

  const recieveSortData = (sortDir, sortBy) => {
    console.log("in");
    setSortData({
      sortDir: sortDir,
      sortBy: sortBy
    })
  }

   // if (sortData.sortDir == "name") {
  //   if (sortData.sortBy == "ASC") {
  //     studentsData.sort((a, b) => (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0);
  //   } else {
  //     studentsData.sort((a, b) => (a.name < b.name) ? 1 : (a.name < b.name) ? -1 : 0);
  //   }
  // } else if (sortData.sortDir == "age") {
  //   if (sortData.sortBy == "ASC") {
  //     studentsData.sort((a, b) => a.age - b.age)
  //   } else {
  //     studentsData.sort((b, a) => b.age - a.age)
  //   }
  // }
console.log(display);
  return (
    <div className="App">
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            {/* START CONTROL */}
            <Control recieveSortData={recieveSortData} recieveSearchData={recieveSearchData} />
            {/* END CONTROL */}
            {/* START LIST STUDENT */}
            <ListStudents students={sort} />
            {console.log("chay 2")}
            {/* END LIST STUDENT */}
            {/* Modal */}
            {/* <Modal /> */}
            {/* Modal */}
          </div>
        </div>
        {/* START FORM SINH VIEN */}
        <Form />
        {/* END FORM SINH VIÊN */}
      </div>
    </div>
  );
}

export default App;
