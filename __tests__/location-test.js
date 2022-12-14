const updateRemoteStudents = require("../location")
//arrange
//act
//assert

describe("updateRemoteStudents", () => {
    it("given empty array of objects return array of empty objects", () => {
        expect(updateRemoteStudents([{}])).toEqual([{}])
    });
    it("given array with 1 object with a location property return array with object unchanged", () => {
        expect(updateRemoteStudents([{ name: 'Hypatia', age: 31, location: 'leeds' }])).toEqual([{ name: 'Hypatia', age: 31, location: 'leeds' }])
    });
    it("given array with 1 object without a location property return array with object property location of remote", () => {
        expect(updateRemoteStudents([{ name: 'Ramanujan', age: 22 }])).toEqual([{ name: 'Ramanujan', age: 22, location: "remote" }])
    });
    it("given array with 2 objects 1 without a location property the other with, return array with object property location updated to remote and original location", () => {
        expect(updateRemoteStudents([{ name: 'Ramanujan', age: 22 }, { name: 'Hypatia', age: 31, location: 'leeds' }])).toEqual([{ name: 'Ramanujan', age: 22, location: "remote" }, { name: 'Hypatia', age: 31, location: 'leeds' }])
    });
    it("given array with 3 objects 1 without a location property the other 2 with, return array with object property location updated to remote and original location", () => {
        expect(updateRemoteStudents([{ name: 'Ramanujan', age: 22 }, { name: 'Hypatia', age: 31, location: 'leeds' }, { name: 'Tao', age: 47, location: 'manchester' }])).toEqual([{ name: 'Ramanujan', age: 22, location: "remote" }, { name: 'Hypatia', age: 31, location: 'leeds' }, { name: 'Tao', age: 47, location: 'manchester' }])
    });
    it("objArr argument is not mutated", () => {
        // // arrange
        const inputObjArr = [{ name: 'Ramanujan', age: 22 }, { name: 'Hypatia', age: 31, location: 'leeds' }, { name: 'Tao', age: 47, location: 'manchester' }]
        const copyInputObjArr = [{ name: 'Ramanujan', age: 22 }, { name: 'Hypatia', age: 31, location: 'leeds' }, { name: 'Tao', age: 47, location: 'manchester' }]
        // act
        console.log(inputObjArr)
        updateRemoteStudents(inputObjArr);
        console.log(inputObjArr)
        //assert
        expect(inputObjArr).toEqual(copyInputObjArr);
    });
})