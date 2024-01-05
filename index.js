const form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#results");
    const sugg = document.querySelector("#suggestion");

    if (height === '' || height < 0 || isNaN(height)){
        alert("Please provide a valid height");
    }else if (weight === '' || weight < 0 || isNaN(weight)){
        alert("Please provide a valid weight");
    }else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`
        if(bmi < 18.6){
            sugg.innerHTML = "You are Under Weight";
        }else if(bmi > 18.6 && bmi < 24.9){
            sugg.innerHTML = "You are in Normal Range";
        }else if(bmi > 24.9){
            sugg.innerHTML = "You are Over Weight";
        }
    }
});