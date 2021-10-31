const icone = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];


const iconCont = document.getElementById("icon_container");
const iconSelector = document.getElementById('icon_selector');



icone.forEach ((element) => {
	//iconCont.innerHTML += `<div class="icona"><i class="${element.family} ${element.prefix}${element.name}"></i><p>${element.name}</p></div>`
	if(element.type == 'animal'){
		iconCont.innerHTML += `<div class="icona" ><i style="color:blue" class="${element.family} ${element.prefix}${element.name}"></i><p>${element.name}</p></div>`
	} else if (element.type == 'vegetable'){
		iconCont.innerHTML += `<div class="icona" ><i style="color:yellow" class="${element.family} ${element.prefix}${element.name}"></i><p>${element.name}</p></div>`

	} else if (element.type == 'user'){
		iconCont.innerHTML += `<div class="icona" ><i style="color:purple" class="${element.family} ${element.prefix}${element.name}"></i><p>${element.name}</p></div>`
	} 
}); 
 
iconSelector.addEventListener('change', function(){
	const sel = this.value;
	const all = 'All';
	const animal = 'Animal';
	const vegetables = 'Vegetables';
	const user = 'User';
	
	if(sel == all){
		icon_container.innerHTML= "";
		icone.forEach ((element) => {
			if(element.type == 'animal'){
				iconCont.innerHTML += `<div class="icona" ><i style="color:blue" class="${element.family} ${element.prefix}${element.name}"></i><p>${element.name}</p></div>`
			} else if (element.type == 'vegetable'){
				iconCont.innerHTML += `<div class="icona" ><i style="color:yellow" class="${element.family} ${element.prefix}${element.name}"></i><p>${element.name}</p></div>`
		
			} else if (element.type == 'user'){
				iconCont.innerHTML += `<div class="icona" ><i style="color:purple" class="${element.family} ${element.prefix}${element.name}"></i><p>${element.name}</p></div>`
			} 
		}); 
		
	} else if(sel == animal){
		icon_container.innerHTML= "";
		icone.forEach ((element) => {
			if(element.type == 'animal'){
				iconCont.innerHTML += `<div class="icona" ><i style="color:blue" class="${element.family} ${element.prefix}${element.name}"></i><p>${element.name}</p></div>`
			} 
		}); 
		
	} else if(sel == vegetables){
		icon_container.innerHTML= "";
		icone.forEach ((element) => {
			if (element.type == 'vegetable'){
				iconCont.innerHTML += `<div class="icona" ><i style="color:yellow" class="${element.family} ${element.prefix}${element.name}"></i><p>${element.name}</p></div>`
			} 
		}); 
		
	} else if(sel == user){
		icon_container.innerHTML= "";
		icone.forEach ((element) => {
			if (element.type == 'user'){
				iconCont.innerHTML += `<div class="icona" ><i style="color:purple" class="${element.family} ${element.prefix}${element.name}"></i><p>${element.name}</p></div>`
			} 
		}); 
		
	};
});