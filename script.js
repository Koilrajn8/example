document.body.innerHTML=
`<div class="headingcontainer">
<h1>Makeup Products</h1>
<img src="http://makeup-api.herokuapp.com/assets/brushes-6d2ab84631ecd47ced4fa07c47eb37521eb61c5a525965dafaf308f21338aa44.png" alt="products" class="icon" width="50px" height="50px"/>
</div>
<div id="maincontainer" class="maincontainer"></div>
`;

const getData = async () => {
    try{
        const data=await fetch("http://makeup-api.herokuapp.com/api/v1/products.json");
        const products=await data.json();
        maincontainer.innerHTML="";
        products.forEach((product)=>{
            displayData(product);
        });
    }
    catch(err) {
        console.log(err);
    }
};
getData();

const displayData=(obj) => {
    maincontainer.innerHTML+=`
    <div class="container">
    <h3 class="blue">BRAND: <span>${obj.brand}</span></h3>
    <h4 class="green">PRODUCT: <span>${obj.name}</span><h4>
    <h4 class="yellow">Price: <span>${obj.price}</span></h4>
    <a href=${obj.product_link} target="_blank">Product Link</a></br>
    <a href=${obj.image_link} target="_blank">Image Link</a>
    <h4 class="white">Description: <span>${obj.description}</span></h4>
    </div>`;
};
