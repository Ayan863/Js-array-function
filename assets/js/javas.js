// verilmis arraye uygunn olaraq arrow functiondan isdifade ederek dinamik olaraq
// bir array ve bir simvol("herf") qebul eden funksiya yaradin
// gonderilen herfle uygun olaraq o herfle baslayan adlari secib 
// yeni arrayde ekrana cap elesin
// qeyd: for of dan istifade ede bilersiz

let arrayy = ["Ali", "Ali", "Qabil", "Qalib", "Behlul", "Ali", "Malik", "Kamil"];
let array = []
const search = (word) =>{
    for(let index of arrayy){
        if(word==index.charAt(0)){
            array.push(index)
        }
    }
    
}
search("K")
console.log(array);