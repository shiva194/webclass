//global variable
 var names="king";
 var ages=90;
 var weight="80kg";



function clickme() {
    console.log("global variable");
    console.log(names);
    console.log(ages);
    console.log(weight);
    
    //local variavble
    console.log("local variable");
    var name1="shiva";
    var age=24;
    var weight1="65kg";
    console.log(name1);
    console.log(age);
    console.log(weight1);

    
   
}

function getName(){
    
    let marks={'sub1':80,"sub2":85,"sub3":75,"sub4":100,"sub5":95};
   
    console.log("sub1: ",marks.sub1);
    console.log("sub2: ",marks.sub2);
    console.log("sub3: ",marks.sub3);
    console.log("sub4: ",marks.sub4);
    console.log("sub5: ",marks.sub5);


   let array1=["shri venkateshwara primary school","msramaiah high school","acharya iti college","shri kalabhyraveshwara polytechnic","sapthagiri college of engineering"];
   array1.forEach(item =>console.log(item));

}