 /*let a1 = 10

function one() {

    let b = 20

    function two() {

        let c = 30

        console.log(a1)
        console.log(b)
        console.log(c)
    }
    console.log(a1);
    console.log(b);
    //console.log(c)
    

    two()
}

one() 
*/





/*let username = "Umar"

function one() {
    let age = 21

    function two() {
        let city = "Pune"

        console.log(username)
        console.log(age)
        console.log(city)
    }

    console.log(username)
    console.log(age)
    //console.log(city) isme error ayega

    two()
}

one() */





/*let name = "Global"

function one() {
    let name = "Umar"

    function two() {
        
          //console.log(name); yaha error fekega initialization se pehle declare hua na
          
        let name = "Hitesh"

        console.log(name)
    }

    console.log(name)
    two()
}

one()//pehle one execute then two
//yaha pehle umar then error. Kyuki when we called two()
//let variable declaration se pehle initialize hua. Pehle js
//js child ke pass dekhta hai lekin yaha initialization hui hi nahi
*/




let country = "India"

function one() {
    let city = "Pune"

    function two() {
        let college = "GHRCEM"

        console.log(country)
        console.log(city)

        function three() {
            console.log(college)
            console.log(city)
        }

        three()
    }
    console.log(country)
    two()
}

one()
//pehle one execute then two then three
//one () two() three()..one() shuru hua fir two() pe ane se pehle
//usko uske variable ka declaration dikha wo print hua fir two () shuru
//fir three()




let x = 10

function one() {
    let x = 20

    function two() {   
       // console.log(x)  //yaha error fekega cannot access before initialization

        let x = 30

        console.log(x)
    }

    console.log(x)
    two()
}

one() 


