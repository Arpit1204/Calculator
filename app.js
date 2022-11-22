const output = document.querySelector(".output");
const result = document.querySelector(".result");
const keys = document.querySelectorAll("button");




keys.forEach(key=>{
    key.addEventListener("click",calculate);
});

function calculate(){
    let buttonText = this.innerText;


    if(buttonText == "CLR"){
        output.innerText = "";
        result.innerText = "0";
        
        
    }

     else if(buttonText === "DEL"){
        output.textContent = output.textContent.slice(0,-1);
        
    }

    else if(buttonText === "="){
        result.innerText = eval(output.innerText);
        
    }

    else{
        output.textContent += buttonText;
        
    }

  
}
