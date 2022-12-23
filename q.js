function fun()
{  
    document.getElementById("myid").reset();  
}   


function copyText1()
{
      
    var Text = document.getElementById("v");

    Text.select();

    navigator.clipboard.writeText(Text.value);

    document.getElementById("clipboard")
        .innerHTML = Text.value;
} 



function copyText2()
{
      
    var Text = document.getElementById("t");

    Text.select();

    navigator.clipboard.writeText(Text.value);

    document.getElementById("clipboard")
        .innerHTML = Text.value;
}
