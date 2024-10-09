import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { Link, useNavigate } from "react-router-dom";

function Edit() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState("");
  const [image, setImage] = useState(null);

  let history = useNavigate();

  let index = array
    .map(function (e) {
      return e.id;
    })
    .indexOf(id);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

    let a = array[index];

    a.Name = name;
    a.Age = age;
    a.Email = email;
    a.Gender = gender;
    a.Address = address;
    a.Phone = phone;
    a.Zip = zip;
    if (image) {
      a.Image = image;
    }

    localStorage.setItem("userData", JSON.stringify(array));

    history("/");
  };

  useEffect(() => {
    const storedName = localStorage.getItem("Name");
    const storedAge = localStorage.getItem("Age");
    const storedEmail = localStorage.getItem("Email");
    const storedGender = localStorage.getItem("Gender");
    const storedAddress = localStorage.getItem("Address");
    const storedPhone = localStorage.getItem("Phone");
    const storedZip = localStorage.getItem("Zip");
    const storedId = localStorage.getItem("id");
    const storedImage = localStorage.getItem("Image");

    if (storedName) setName(storedName);
    if (storedAge) setAge(storedAge);
    if (storedEmail) setEmail(storedEmail);
    if (storedGender) setGender(storedGender);
    if (storedAddress) setAddress(storedAddress);
    if (storedPhone) setPhone(storedPhone);
    if (storedZip) setZip(storedZip);
    if (storedId) setId(storedId);
    if (storedImage) setImage(storedImage);
  }, []);

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "5rem" }}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Control
            value={age}
            onChange={(e) => setAge(e.target.value)}
            type="number"
            placeholder="Age"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
        </Form.Group>

        {/* Radio buttons for Gender */}
        <Form.Group className="mb-3">
          <Form.Check
            inline
            label="Male"
            name="gender"
            type="radio"
            value="Male"
            checked={gender === "Male"}
            onChange={(e) => setGender(e.target.value)}
          />
          <Form.Check
            inline
            label="Female"
            name="gender"
            type="radio"
            value="Female"
            checked={gender === "Female"}
            onChange={(e) => setGender(e.target.value)}
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

        {/* Image upload field */}
        <Form.Group className="mb-3" controlId="formBasicImage">
          <Form.Control
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {/* Show the current image if available */}
          {image && <img src={image} alt="Selected" width="100" />}
        </Form.Group>

        <Button
          onClick={(e) => handleSubmit(e)}
          variant="primary"
          type="submit"
        >
          Update
        </Button>

        <Link className="d-grid gap-2" to="/">
          <Button variant="warning" size="lg">
            Home
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Edit;

// Filename - Edit.js
// import React, { useEffect, useState } from "react";
// import { Button, Form } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import array from "./array";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// function Edit() {
//   // State for form inputs
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [id, setId] = useState("");
//   const [email, setEmail] = useState("");
//   const [gender, setGender] = useState("");
//   const [address, setAddress] = useState("");
//   const [phone, setPhone] = useState("");
//   const [zip, setZip] = useState("");
//   const [image, setImage] = useState(null); // State to store the image file

//   let history = useNavigate();

//   // Getting an index of an entry with an id
//   let index = array
//     .map(function (e) {
//       return e.id;
//     })
//     .indexOf(id);

//   // Handle image change
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(URL.createObjectURL(file)); // Create a URL for the selected image
//     }
//   };

//   // Function for handling the edit and updating changes
//   const handleSubmit = (e) => {
//     e.preventDefault();
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

//     // Getting the entry from the array
//     let a = array[index];

//     // Updating the entry with new values
//     a.Name = name;
//     a.Age = age;
//     a.Email = email;
//     a.Gender = gender;
//     a.Address = address;
//     a.Phone = phone;
//     a.Zip = zip;
//     if (image) {
//       a.Image = image; // Update image if a new one is selected
//     }

//     // Save updated array to localStorage
//     localStorage.setItem("userData", JSON.stringify(array));

//     // Redirecting to main page
//     history("/");
//   };

//   // useEffect to set the values from localStorage on load
//   useEffect(() => {
//     setName(localStorage.getItem("Name"));
//     setAge(localStorage.getItem("Age"));
//     setEmail(localStorage.getItem("Email"));
//     setGender(localStorage.getItem("Gender"));
//     setAddress(localStorage.getItem("Address"));
//     setPhone(localStorage.getItem("Phone"));
//     setZip(localStorage.getItem("Zip"));
//     setId(localStorage.getItem("id"));
//     setImage(localStorage.getItem("Image"));
//   }, []);

//   return (
//     <div>
//       <Form className="d-grid gap-2" style={{ margin: "5rem" }}>
//         <Form.Group className="mb-3" controlId="formBasicName">
//           <Form.Control
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             type="text"
//             placeholder="Enter Name"
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicAge">
//           <Form.Control
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//             type="number"
//             placeholder="Age"
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Control
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             placeholder="Email"
//           />
//         </Form.Group>

//         {/* Radio buttons for Gender */}
//         <Form.Group className="mb-3">
//           <Form.Check
//             inline
//             label="Male"
//             name="gender"
//             type="radio"
//             value="Male"
//             checked={gender === "Male"}
//             onChange={(e) => setGender(e.target.value)}
//           />
//           <Form.Check
//             inline
//             label="Female"
//             name="gender"
//             type="radio"
//             value="Female"
//             checked={gender === "Female"}
//             onChange={(e) => setGender(e.target.value)}
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
//             type="text"
//             placeholder="Zip Code"
//           />
//         </Form.Group>

//         {/* Image upload field */}
//         <Form.Group className="mb-3" controlId="formBasicImage">
//           <Form.Control
//             type="file"
//             accept="image/*"
//             onChange={handleImageChange}
//           />
//         </Form.Group>

//         <Button
//           onClick={(e) => handleSubmit(e)}
//           variant="primary"
//           type="submit"
//         >
//           Update
//         </Button>

//         <Link className="d-grid gap-2" to="/">
//           <Button variant="warning" size="lg">
//             Home
//           </Button>
//         </Link>
//       </Form>
//     </div>
//   );
// }

// export default Edit;

// import React, { useEffect, useState } from "react";
// import { Button, Form } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import array from "./array";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// function Edit() {
//   const [name, setname] = useState("");
//   const [age, setage] = useState("");
//   const [id, setid] = useState("");
//   const [email, setEmail] = useState("");
//   const [gender, setGender] = useState("");
//   const [address, setAddress] = useState("");
//   const [phone, setPhone] = useState("");
//   const [zip, setZip] = useState("");

//   let history = useNavigate();

//   let index = array
//     .map(function (e) {
//       return e.id;
//     })
//     .indexOf(id);

//   const handelSubmit = (e) => {
//     e.preventDefault();
//     if (
//       name === "" ||
//       age === "" ||
//       email === "" ||
//       gender === "" ||
//       address === "" ||
//       phone === "" ||
//       zip === ""
//     ) {
//       alert("invalid input");
//       return;
//     }

//     let a = array[index];

//     a.Name = name;
//     a.Age = age;
//     a.Email = email;
//     a.Gender = gender;
//     a.Address = address;
//     a.Phone = phone;
//     a.Zip = zip;

//     history("/");
//   };

//   useEffect(() => {
//     setname(localStorage.getItem("Name"));
//     setage(localStorage.getItem("Age"));
//     setEmail(localStorage.getItem("Email"));
//     setGender(localStorage.getItem("Gender"));
//     setAddress(localStorage.getItem("Address"));
//     setPhone(localStorage.getItem("Phone"));
//     setZip(localStorage.getItem("Zip"));
//     setid(localStorage.getItem("id"));
//   }, []);

//   return (
//     <div>
//       <Form className="d-grid gap-2" style={{ margin: "5rem" }}>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Control
//             value={name}
//             onChange={(e) => setname(e.target.value)}
//             type="text"
//             placeholder="Enter Name"
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Control
//             value={age}
//             onChange={(e) => setage(e.target.value)}
//             type="number"
//             placeholder="Age"
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Control
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             placeholder="Email"
//           />
//         </Form.Group>

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
//             type="number"
//             placeholder="Zip Code"
//           />
//         </Form.Group>

//         <Button
//           onClick={(e) => handelSubmit(e)}
//           variant="primary"
//           type="submit"
//           size="lg"
//         >
//           Update
//         </Button>

//         <Link className="d-grid gap-2" to="/">
//           <Button variant="warning" size="lg">
//             Home
//           </Button>
//         </Link>
//       </Form>
//     </div>
//   );
// }

// export default Edit;
