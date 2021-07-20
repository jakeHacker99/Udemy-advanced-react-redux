const obj ={
    fName: "jake",
    lName: "yaro",
    phone: "222-222-2222",
    age: 23,
    gender: false
}

const obj2: {
    fName: string
    lName: string
    phone: string
    age: number
    gender: boolean
} = {
    fName: "",
    lName: "",
    phone: "",
    age: 23,
    gender: true
}


// arr
const arrOfString = ["string 1","string 2", "string 3"]
arrOfString.push("string 4")

const arrOfBool:boolean[] =[true, false, false, true]
arrOfBool.push("shu")

const arrOfNum=[12,2,124]

let arrOfObj: {
    name: string,
    age: number,
    isWomen: boolean
}[]=[]

arrOfObj.push({
    name: "",
    age: 2,
    isWomen: true 
})


const rrOfArr = [ [["", '', "", ], ["", ""]]]
const arrOfArrOfArr: string[][][] = [[["shu", "bre", "124"]]]



const 