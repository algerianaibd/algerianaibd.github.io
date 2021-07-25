
const $allNamesNodes = document.querySelectorAll("#speakers .speakers-container > div.person > h1")
const $allImagesNodes = document.querySelectorAll("#speakers .speakers-container > div.images img")
const $allDescriptionNodes = document.querySelectorAll("#speakers .speakers-container > div.person > p.desc")
const $bioModal = document.querySelector("#bio-modal")

const $bioModalName = document.querySelector("#bio-modal #person-name")
const $bioModalDesc = document.querySelector("#bio-modal #person-desc")
const $bioModalImg = document.querySelector("#bio-modal #person-img")

const $bioModalBg = document.querySelector("#bio-modal .modal-background")
const $bioModalClose = document.querySelector("#bio-modal .modal-close")



$bioModalBg.addEventListener("click",(evt)=>{
	$bioModal.classList.remove("is-active");
});
$bioModalClose.addEventListener("click",(evt)=>{
	$bioModal.classList.remove("is-active");
});

for (let i = 0; i < $allNamesNodes.length ; i++  ){
	let nameItem = $allNamesNodes[i]
	let desc = $allDescriptionNodes[i]
	let img = $allImagesNodes[i]

	img.addEventListener("click",(evt)=>{
		
		nameItem.click()

		
	});
	nameItem.addEventListener("click",(evt)=>{
		
		
		$bioModal.classList.toggle("is-active");
		
		
		 $bioModalName.innerHTML =  nameItem.innerHTML
		$bioModalDesc.innerHTML = desc.innerText
		$bioModalImg.src = img.src


		
	});
	
	
}
