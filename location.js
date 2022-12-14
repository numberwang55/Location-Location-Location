/*
js
updateRemoteStudents([
  { name: 'Hypatia', age: 31, location: 'leeds' },
  { name: 'Ramanujan', age: 22 },
  { name: 'Tao', age: 47, location: 'manchester' }
]);

// should return

[
  { name: 'Hypatia', age: 31, location: 'leeds' },
  { name: 'Ramanujan', age: 22, location: 'remote' },
  { name: 'Tao', age: 47, location: 'manchester' }
];
*/

function updateRemoteStudents(objArr) {
  if (Object.keys(objArr[0]).length > 0) {
    return objArr.map(person => {
      const copyObjArr = { ...person }
      copyObjArr.hasOwnProperty("location") ? person : copyObjArr.location = "remote"
      return copyObjArr
    })
  }
  return objArr;
}

module.exports = updateRemoteStudents