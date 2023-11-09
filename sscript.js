const calculateTemp = () => {
    const inputTemp = document.getElementById("temp").value;    
    const tempselected = document.getElementById("temp_diff");
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    
    //celsius to Fahrenheit 
    const celToFah = (cel) => {
        let fahrenheit =((cel * 9 / 5) + 32).toFixed(1); 
        return fahrenheit;
    }
    
    // Fahrenheit to Celsius
    const fahToCel =(fah) => {
        let celsius =((fah-32)* 5/9).toFixed(1);
        return celsius;
    }
    
    
    if (valueTamp == "cel"){
        document.getElementById("result").innerHTML = celTofah (inputTemp)+"&#176; Fahrenheit";
    }
    else {
        document.getElementById("result").innerHTML = fahToCel(inputTemp) + "&#176; Celsius";
    }
}