import React from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  let history = useNavigate();

  function setID(id, name, age, email, gender, address, phone, zip, image) {
    localStorage.setItem("id", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Age", age);
    localStorage.setItem("Email", email);
    localStorage.setItem("Gender", gender);
    localStorage.setItem("Address", address);
    localStorage.setItem("Phone", phone);
    localStorage.setItem("Zip", zip);
    localStorage.setItem("Image", image);
  }

  function deleted(id) {
    let index = array
      .map(function (e) {
        return e.id;
      })
      .indexOf(id);

    array.splice(index, 1);

    localStorage.setItem("userData", JSON.stringify(array));

    history("/");
  }

  return (
    <div style={{ margin: "2rem" }}>
      <h1 className="text-center mb-4">User Management</h1>
      <Table striped bordered hover responsive className="shadow-sm">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Zip</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {array.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.Name}</td>
                <td>{item.Age}</td>
                <td>{item.Email}</td>
                <td>{item.Gender}</td>
                <td>{item.Address}</td>
                <td>{item.Phone}</td>
                <td>{item.Zip}</td>
                <td>
                  <img
                    src={item.Image}
                    alt={item.Name}
                    style={{ width: "50px", height: "50px" }}
                  />
                </td>
                <td>
                  <Link to={`/edit`}>
                    <Button
                      onClick={() =>
                        setID(
                          item.id,
                          item.Name,
                          item.Age,
                          item.Email,
                          item.Gender,
                          item.Address,
                          item.Phone,
                          item.Zip,
                          item.Image
                        )
                      }
                      variant="info"
                      className="me-2"
                    >
                      Update
                    </Button>
                  </Link>
                  <Button onClick={() => deleted(item.id)} variant="danger">
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="d-grid gap-2 mt-4">
        <Link to="/create">
          <Button variant="success" size="lg">
            Create New User
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

// import React from "react";
// import { Button, Table } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import array from "./array";
// import { Link, useNavigate } from "react-router-dom";

// function Home() {
//   let history = useNavigate();

//   // Function to set the ID, Name, and Age in local storage
//   function setID(id, name, age, email) {
//     localStorage.setItem("id", id);
//     localStorage.setItem("Name", name);
//     localStorage.setItem("Age", age);
//     localStorage.setItem("Email", email);
//   }

//   // Function to delete an entry
//   function deleted(id) {
//     let index = array
//       .map(function (e) {
//         return e.id;
//       })
//       .indexOf(id);

//     // Deleting the entry with the specified index
//     array.splice(index, 1);
//     localStorage.setItem("userData", JSON.stringify(array));
//     // Redirecting to the same page to re-render
//     history("/");
//   }

//   return (
//     <div style={{ margin: "2rem" }}>
//       <h1 className="text-center mb-4">User Management</h1>
//       <Table striped bordered hover responsive className="shadow-sm">
//         <thead className="thead-dark">
//           <tr>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Email</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {array.map((item, index) => {
//             return (
//               <tr key={index}>
//                 <td>{item.Name}</td>
//                 <td>{item.Age}</td>
//                 <td>{item.Email}</td>
//                 <td>
//                   <Link to={`/edit`}>
//                     <Button
//                       onClick={() =>
//                         setID(item.id, item.Name, item.Age, item.Email)
//                       }
//                       variant="info"
//                       className="me-2"
//                     >
//                       Update
//                     </Button>
//                   </Link>
//                   <Button onClick={() => deleted(item.id)} variant="danger">
//                     Delete
//                   </Button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </Table>
//       <div className="d-grid gap-2 mt-4">
//         <Link to="/create">
//           <Button variant="success" size="lg">
//             Create New User
//           </Button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Home;
