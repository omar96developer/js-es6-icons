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

//INVOCO LA FUNZIONE PER LISTARE LE ICONE
iconListing()

iconSelector.addEventListener('change', function(){
	//SELEZIONE OPZIONE SELEZIONATA/CAMBIATA
	const sel = this.value;
	//CREO I CASI POSSIBILI CON QUI AFFERAMERE IL VALUE SELEZIONATO
	const all = 'All';
	const animal = 'Animal';
	const vegetables = 'Vegetables';
	const user = 'User';
	
	if(sel == all){
		//CANCELLO HTML
		icon_container.innerHTML= "";
		//STAMPO LA FUNZIONI ICONLISTING CHE MI LISTA TUTTE LE ICONE
		iconListing()	
	} else if(sel == animal){
		icon_container.innerHTML= "";
		//CICLO SUL ARRAY ICONE E LISTO LE ICONE DI TIPO ANIMAL
		icone.forEach ((element) => {
			if(element.type == 'animal'){
				iconCont.innerHTML += `<div class="icona" ><i style="color:blue" class="${element.family} ${element.prefix}${element.name}"></i><p>${element.name}</p></div>`
			} 
		}); 
	} else if(sel == vegetables){
		icon_container.innerHTML= "";
		//CICLO SUL ARRAY ICONE E LISTO LE ICONE DI TIPO VEGETABLE
		icone.forEach ((element) => {
			if (element.type == 'vegetable'){
				iconCont.innerHTML += `<div class="icona" ><i style="color:yellow" class="${element.family} ${element.prefix}${element.name}"></i><p>${element.name}</p></div>`
			} 
		}); 
	} else if(sel == user){
		icon_container.innerHTML= "";
		//CICLO SUL ARRAY ICONE E LISTO LE ICONE DI TIPO USER
		icone.forEach ((element) => {
			if (element.type == 'user'){
				iconCont.innerHTML += `<div class="icona" ><i style="color:purple" class="${element.family} ${element.prefix}${element.name}"></i><p>${element.name}</p></div>`
			} 
		}); 
	};
});

//FUNZIONI

function iconListing (){
	icone.forEach ((element) => {
		
		if(element.type == 'animal'){
			iconCont.innerHTML += `<div class="icona" ><i style="color:blue" class="${element.family} ${element.prefix}${element.name}"></i><p>${element.name}</p></div>`
		} else if (element.type == 'vegetable'){
			iconCont.innerHTML += `<div class="icona" ><i style="color:yellow" class="${element.family} ${element.prefix}${element.name}"></i><p>${element.name}</p></div>`
	
		} else if (element.type == 'user'){
			iconCont.innerHTML += `<div class="icona" ><i style="color:purple" class="${element.family} ${element.prefix}${element.name}"></i><p>${element.name}</p></div>`
		} 
	});
}