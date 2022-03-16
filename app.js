const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem") 

const products = [
	{
		id: 1,
		title: "Air Force",
		price: 149,
		colors: [
			{
				code: "ornage",
				img: "./img/nike-1.png",
			},
			{
				code: "darkgreen",
				img: "./img/nike-2.png",
			},
		],
	},
	{
		id: 2,
		title: "New Balance",
		price: 139,
		colors: [
			{
				code: "black",
				img: "./img/newbalance-1.png",
			},
			{
				code: "beige",
				img: "./img/newbalance-2.png",
			},
		],
	},
	{
		id: 3,
		title: "Converse",
		price: 99,
		colors: [
			{
				code: "white",
				img: "./img/converse-1.png",
			},
			{
				code: "black",
				img: "./img/converse-2.png",
			},
		],
	},
	{
		id: 4,
		title: "Vans",
		price: 89,
		colors: [
			{
				code: "yellow",
				img: "./img/vans-1.png",
			},
			{
				code: "black",
				img: "./img/vans-2.png",
			},
		],
	},
	{
		id: 5,
		title: "Puma",
		price: 119,
		colors: [
			{
				code: "rainbow",
				img: "./img/puma-1.png",
			},
			{ 
				code: "black",
				img: "./img/puma-2.png",
			},
		],
	},
];


let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
         wrapper.style.transform = `translateX(${-100 * index}vw)`;

         // change the choosen product
         choosenProduct = products[index]

         //change texts of currentProduct
         currentProductTitle.textContent = choosenProduct.title;
         currentProductPrice.textContent = "€ " + choosenProduct.price;
         currentProductImg.src = choosenProduct.colors[0].img;

        //assigning new colors
       currentProductColors.forEach((color, index) => {
			color.style.backgroundColor = choosenProduct.colors[index].code;
		}); 
    });
});


currentProductColors.forEach((colors, index) => {
    colors.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img
    });
})

currentProductSizes.forEach((size, index) =>{
    size.addEventListener("click", ()=>{
        currentProductSizes.forEach((size) =>{
            size.style.backgroundColor = "white";
			size.style.color = "black";
        });

        size.style.backgroundColor ="black"
        size.style.color = "white"
    });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
	payment.style.display = "flex";
});

close.addEventListener("click", () => {
	payment.style.display = "none";
});



// console.log(wrapper)
// wrapper.style.transform = "translateX(100px)"