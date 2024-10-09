import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState("");
  const [image, setImage] = useState(null);

  let history = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uni = ids.slice(0, 20);

    if (
      name === "" ||
      age === "" ||
      email === "" ||
      gender === "" ||
      address === "" ||
      phone === "" ||
      zip === ""
    ) {
      alert("Invalid input");
      return;
    }

    array.push({
      id: uni,
      Name: name,
      Age: age,
      Email: email,
      Gender: gender,
      Address: address,
      Phone: phone,
      Zip: zip,
      Image: image,
    });

    localStorage.setItem("userData", JSON.stringify(array));

    history("/");
  };

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "5rem" }}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Control
            onChange={(e) => setAge(e.target.value)}
            type="number"
            placeholder="Age"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            inline
            label="Male"
            name="gender"
            type="radio"
            value="Male"
            onChange={(e) => setGender(e.target.value)}
            required
          />
          <Form.Check
            inline
            label="Female"
            name="gender"
            type="radio"
            value="Female"
            onChange={(e) => setGender(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Control
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            placeholder="Address"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Control
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            placeholder="Phone"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicZip">
          <Form.Control
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            type="text"
            placeholder="Zip Code"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicImage">
          <Form.Control
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </Form.Group>

        <Button
          onClick={(e) => handleSubmit(e)}
          variant="primary"
          type="submit"
        >
          Submit
        </Button>

        <Link className="d-grid gap-2" to="/">
          <Button variant="info" size="lg">
            Home
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Create;

// import React, { useState } from "react";
// import { Button, Form } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import array from "./array";
// import { v4 as uuid } from "uuid";
// import { Link, useNavigate } from "react-router-dom";

// function Create() {
//   // State for form inputs
//   const [name, setname] = useState("");
//   const [age, setage] = useState("");
//   const [email, setEmail] = useState("");
//   const [gender, setGender] = useState("");
//   const [address, setAddress] = useState("");
//   const [phone, setPhone] = useState("");
//   const [zip, setZip] = useState("");

//   let history = useNavigate();

//   const handelSubmit = (e) => {
//     e.preventDefault(); // Prevent reload

//     const ids = uuid(); // Creating unique id
//     let uni = ids.slice(0, 20);

//     // Using `let` to define all variables
//     let a = name,
//       b = age,
//       c = email,
//       d = gender,
//       h = address,
//       f = phone,
//       g = zip;

//     if (
//       name === "" ||
//       age === "" ||
//       email === "" ||
//       gender === "" ||
//       address === "" ||
//       phone === "" ||
//       zip === ""
//     ) {
//       alert("Invalid input");
//       return;
//     }

//     // Push new user data to the array including gender
//     array.push({
//       id: uni,
//       Name: a,
//       Age: b,
//       Email: c,
//       Gender: d,
//       Address: h,
//       Phone: f,
//       Zip: g,
//     });

//     // Save updated array to localStorage
//     localStorage.setItem("userData", JSON.stringify(array));

//     // Redirecting to home page after creation done
//     history("/");
//   };

//   return (
//     <div>
//       <Form className="d-grid gap-2" style={{ margin: "5rem" }}>
//         <Form.Group className="mb-3" controlId="formBasicName">
//           <Form.Control
//             onChange={(e) => setname(e.target.value)}
//             type="text"
//             placeholder="Enter Name"
//             required
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicAge">
//           <Form.Control
//             onChange={(e) => setage(e.target.value)}
//             type="number"
//             placeholder="Age"
//             required
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Control
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             placeholder="Email"
//             required
//           />
//         </Form.Group>

//         {/* Radio buttons for Gender */}
//         <Form.Group className="mb-3 col-md-2">
//           <Form.Check
//             inline
//             label="Male"
//             name="gender"
//             type="radio"
//             value="Male"
//             onChange={(e) => setGender(e.target.value)}
//             required
//           />
//           <Form.Check
//             inline
//             label="Female"
//             name="gender"
//             type="radio"
//             value="Female"
//             onChange={(e) => setGender(e.target.value)}
//             required
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicAddress">
//           <Form.Control
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             type="text"
//             placeholder="Address"
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPhone">
//           <Form.Control
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             type="tel"
//             placeholder="Phone"
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicZip">
//           <Form.Control
//             value={zip}
//             onChange={(e) => setZip(e.target.value)}
//             type="number"
//             placeholder="Zip Code"
//           />
//         </Form.Group>

//         <Button
//           onClick={(e) => handelSubmit(e)}
//           variant="primary"
//           type="submit"
//         >
//           Submit
//         </Button>

//         <Link className="d-grid gap-2" to="/">
//           <Button variant="info" size="lg">
//             Home
//           </Button>
//         </Link>
//       </Form>
//     </div>
//   );
// }

// export default Create;

// import React, { useState } from "react";
// import { Button, Form } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import array from "./array";
// import { v4 as uuid } from "uuid";
// import { Link, useNavigate } from "react-router-dom";

// function Create() {
//   // State for form inputs
//   const [name, setname] = useState("");
//   const [age, setage] = useState("");
//   const [email, setEmail] = useState("");
//   const [gender, setGender] = useState("");
//   const [address, setAddress] = useState("");
//   const [phone, setPhone] = useState("");
//   const [zip, setZip] = useState("");

//   let history = useNavigate();

//   const handelSubmit = (e) => {
//     e.preventDefault(); // Prevent reload

//     const ids = uuid(); // Creating unique id
//     let uni = ids.slice(0, 20);

//     let a = name,
//       b = age,
//       c = email,
//       d = gender;
//     e = address;
//     f = phone;
//     g = zip;

//     if (
//       name === "" ||
//       age === "" ||
//       email === "" ||
//       gender === "" ||
//       address === "" ||
//       phone === "" ||
//       zip === ""
//     ) {
//       alert("Invalid input");
//       return;
//     }

//     // Push new user data to the array including gender
//     array.push({
//       id: uni,
//       Name: a,
//       Age: b,
//       Email: c,
//       Gender: d,
//       Address: e,
//       Phone: f,
//       Zip: g,
//     });

//     // Save updated array to localStorage
//     localStorage.setItem("userData", JSON.stringify(array));

//     // Redirecting to home page after creation done
//     history("/");
//   };

//   return (
//     <div>
//       <Form className="d-grid gap-2" style={{ margin: "5rem" }}>
//         <Form.Group className="mb-3" controlId="formBasicName">
//           <Form.Control
//             onChange={(e) => setname(e.target.value)}
//             type="text"
//             placeholder="Enter Name"
//             required
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicAge">
//           <Form.Control
//             onChange={(e) => setage(e.target.value)}
//             type="number"
//             placeholder="Age"
//             required
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Control
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             placeholder="Email"
//             required
//           />
//         </Form.Group>
//         {/* <p className="col-md-2">Select Gender</p> */}
//         {/* Radio buttons for Gender */}
//         <Form.Group className="mb-3 col-md-2">
//           <Form.Check
//             inline
//             label="Male"
//             name="gender"
//             type="radio"
//             value="Male"
//             onChange={(e) => setGender(e.target.value)}
//             required
//           />
//           <Form.Check
//             inline
//             label="Female"
//             name="gender"
//             type="radio"
//             value="Female"
//             onChange={(e) => setGender(e.target.value)}
//             required
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Control
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             type="text"
//             placeholder="Address"
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Control
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             type="tell"
//             placeholder="Phone"
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Control
//             value={zip}
//             onChange={(e) => setZip(e.target.value)}
//             type="text"
//             placeholder="Zip Code"
//           />
//         </Form.Group>
//         <Button
//           onClick={(e) => handelSubmit(e)}
//           variant="primary"
//           type="submit"
//         >
//           Submit
//         </Button>

//         <Link className="d-grid gap-2" to="/">
//           <Button variant="info" size="lg">
//             Home
//           </Button>
//         </Link>
//       </Form>
//     </div>
//   );
// }

// export default Create;

// import React, { useState } from "react";
// import { Button, Form } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import array from "./array";
// import { v4 as uuid } from "uuid";
// import { Link, useNavigate } from "react-router-dom";

// function Create() {
//   // Making usestate for setting and
//   // fetching a value in jsx
//   const [name, setname] = useState("");
//   const [age, setage] = useState("");
//   const [email, setEmail] = useState("");

//   // Using useNavigation for redirecting to pages
//   let history = useNavigate();

//   // Function for creating a post/entry
//   const handelSubmit = (e) => {
//     e.preventDefault(); // Prevent reload

//     const ids = uuid(); // Creating unique id
//     let uni = ids.slice(0, 8); // Slicing unique id

//     // Fetching a value from usestate and
//     // pushing to javascript object
//     let a = name,
//       b = age,
//       c = email;
//     if (name === "" || age === "" || email === "") {
//       alert("invalid input");
//       return;
//     }
//     array.push({ id: uni, Name: a, Age: b, Email: c });
//     localStorage.setItem("userData", JSON.stringify(array));
//     // Redirecting to home page after creation done
//     history("/");
//   };

//   return (
//     <div>
//       <Form className="d-grid gap-2" style={{ margin: "5rem" }}>
//         {/* Fetching a value from input textfirld
//                     in a setname using usestate*/}
//         <Form.Group className="mb-3" controlId="formBasicName">
//           <Form.Control
//             onChange={(e) => setname(e.target.value)}
//             type="text"
//             placeholder="Enter Name"
//             required
//           />
//         </Form.Group>

//         {/* Fetching a value from input textfirld in
//                     a setage using usestate*/}
//         <Form.Group className="mb-3" controlId="formBasicAge">
//           <Form.Control
//             onChange={(e) => setage(e.target.value)}
//             type="number"
//             placeholder="Age"
//             required
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Control
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             placeholder="Email"
//             required
//           />
//         </Form.Group>

//         {/* handing a onclick event in button for
//                     firing a function */}
//         <Button
//           onClick={(e) => handelSubmit(e)}
//           variant="primary"
//           type="submit"
//         >
//           Submit
//         </Button>

//         {/* Redirecting back to home page */}
//         <Link className="d-grid gap-2" to="/">
//           <Button variant="info" size="lg">
//             Home
//           </Button>
//         </Link>
//       </Form>
//     </div>
//   );
// }

// export default Create;
