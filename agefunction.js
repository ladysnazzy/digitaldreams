var btn = document.getElementById('btn').addEventListener('click', function(){
    var input = document.getElementById('inp')


    var inputt = input.value 
    if(inputt == ''){
        input.style.border = '1px solid red'
        document.getElementById('inp_err').innerHTML = 'please enter age'
        return false
    }else{
        var d = new Date()
        var dd = d.getFullYear()
        var result = dd - Number(inputt)
        document.getElementById('output').innerHTML = result
        document.getElementById('inp_err').innerHTML = ''
    }
})