const defaultArray = [
  {
    id: "1",
    Name: "Asadullah",
    Age: "23",
    Email: "asadkhushab@gmail.com",
    Gender: "Male",
    Address: "Address",
    Phone: "Phone",
    Zip: "Zip",
    Image: "https://via.placeholder.com/150",
  },
  //   {
  //     id: "2",
  //     Name: "Adeeb",
  //     Age: "22",
  //     Email: "adeeb@gmail.com",
  //     Gender: "Male",
  //     Address: "Address",
  //     Phone: "Phone",
  //     Zip: "Zip",
  //   },
  //   {
  //     id: "3",
  //     Name: "Uzair",
  //     Age: "23",
  //     Email: "Uzair@gmail.com",
  //     Gender: "Male",
  //     Address: "Address",
  //     Phone: "Phone",
  //     Zip: "Zip",
  //   },
];

const array = JSON.parse(localStorage.getItem("userData")) || defaultArray;

export default array;

// const defaultArray = [
//   {
//     id: "1",
//     Name: "Asadullah",
//     Age: "23",
//     Email: "asadkhushab@gmail.com",
//   },
//   {
//     id: "2",
//     Name: "Adeeb",
//     Age: "22",
//     Email: "adeeb@gmail.com",
//   },
//   {
//     id: "3",
//     Name: "Uzair",
//     Age: "23",
//     Email: "Uzair@gmail.com",
//   },
// ];

// const array = JSON.parse(localStorage.getItem("userData")) || defaultArray;
// export default array;
