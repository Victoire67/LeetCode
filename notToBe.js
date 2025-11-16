
let expect = function (val) {
    return {
        toBe: (val2) => {
            if (val2 === val) return true
            else throw new Error("Not Equal")
        },
        notToBe: (val3) => {
            if (val3 !== val) return true
            else throw new Error("Equal")
        }
    }
};
console.log(expect(12).toBe(12))
