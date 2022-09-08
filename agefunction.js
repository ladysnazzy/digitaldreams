function ageFunction() {
    var inputt = document.getElementById('dob').value
    var d = new Date(inputt)

    var mont_dif = Date.now() - d.getTime()
    var curnt_age = new Date(mont_dif)
    var year = curnt_age.getFullYear()
    var age = Math.abs(year - 1970)

    alert(document.getElementById('output').innerHTML =  "YOU ARE " + age + " YEARS OLD" )
   return true
}


 // document.getElementById('output').addEventListener ('click', function(){
    //     alert(document.getElementById('output').innerHTML = age)
    
    // })     


// function ageFunction(){
//     var inp = document.getElementById('dob').value
//     var d = new Date(inp)

//     var moth_diff = Date.now() - d.getTime()
//     var curnt_age = new Date(moth_diff)
//     var year = curnt_age.getFullYear
//     var age = Math.abs(year - 1970)

//     alert(document.getElementById('output').innerHTML =  "YOU ARE: " + age + " YEARS OLD" )
//    return true

// }



// // console.log(ageFunction())