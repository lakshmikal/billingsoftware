let productaddbtn = document.getElementById("productaddbtn");
productaddbtn.addEventListener("click", ()=>{
    let productnameadd = document.getElementById("exampleInputUsername1");
    let productpriceadd = document.getElementById("exampleInputPassword1");

    console.log(productnameadd.value);
    console.log(productpriceadd.value);


    let entereddata = document.getElementById("entereddata")
    console.log(datapass.rows.length);

    let rowCreate = entereddata.insertRow(entereddata.rows.length)
    console.log(rowCreate);

    let productnameadddata = rowCreate.insertCell(0)
    let productpriceadddata = rowCreate.insertCell(1)
    

    productnameadddata.innerHTML = productnameadd.value
    productpriceadddata.innerHTML = productpriceadd.value
    
})