// let arrayy = ["Ali", "Qabil", "Qabil", "Qabil", "Malik", "Kamil"];
// task 1
// arrow functiondan isdifade ederek ele bir function itifade edinki parametr olaraq array ve silinecek datani
// gonderdiyinizde o function hemen datani silsin ve consolede silindiyi barede melumat cixsin eger data yoxdursa
// oda ekranda cap olunsunki  data movcud deyil. meselen deleteFunc(arrayy,"Ali")

// let arrayy = ["Ali", "Qabil", "Qabil", "Qabil", "Malik", "Kamil"];
// let count=0
// const deleteFunc=(array,data)=>{
//     let index=array.indexOf(data)
//     if(index!=-1){
//         while(index!=-1){
//             array.splice(index,1)
//             index=array.indexOf(data)
//             count++
//         }
//         console.log(array)
//         // console.log(data,"silindi");
//         console.log(count,"defe qeyde alinmish",data,"adli data silindi");
//     }
//     else{
//         let k=data ?? "boshdur"
        
//         if(k!="boshdur" && data!="" && data!=" "){
//             console.log("qeyd olunan datani elave etmek olmadi");
//         }
//         else{
//             console.log("yeniden sorgu gonderin");
//         }
//     }
// }
// // deleteFunc(arrayy,"Qabil")
// deleteFunc(arrayy," ")


// task 2
//  bunun eynisini elave etmek ucunde isdifade edin yani arrow functiondan isdifade ederek array ve yeni deyeri
// parametr olaraq vererek arraya elave olunsun ve  elave olunanda logda elave oldugu barede melumat cixsin
// arraya data elave edende eyni elementin tekrar elave olundugunda logda bu datanin artiq var oldugunu  bildirsin
// meselen addedFunc(arrayy,10)
// let arraya = ["Ali", "Qabil", "Qabil", "Qabil", "Malik", "Kamil"];
// const add=(array,data)=>{
//     indexa=array.indexOf(data)
//     if(indexa==-1){
//         let k=data ?? "boshdur"
        
//         if(k!="boshdur" && data!="" && data!=" "){
//             array.push(data)
//             console.log(array);
//             console.log(data+" elave olundu");
//         }
//         else{
//             console.log("qeyd olunan datani elave etmek olmadi");
//         }
        
//     }
//     else{
//         console.log(data+" adli data movcuddur");
//     }
// }
// add(arraya,"")


// QEYD : her iki functionda let in den isdifade etmeyiniz teleb olunur ! ve bos deyer ( bosluq veya null olaraq)
// deyerin gonderilmesinide nezere alin yeni null ve bos deyer undefined gonderildiyinde logda gonderilen deyerin bos
// olundugunu bildirilsin