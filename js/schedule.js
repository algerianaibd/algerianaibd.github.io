const $allWorkshopTitles = document.querySelectorAll(".table-content-container .workshop-title")
const $allDescriptionNodes = document.querySelectorAll(".table-content-container .workshop-bio")
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

for (let i = 0; i < $allWorkshopTitles.length ; i++  ){
	let workshopTitle = $allWorkshopTitles[i]
	let descriptionNode = $allDescriptionNodes[i]
	

	workshopTitle.addEventListener("click",(evt)=>{
		
		
		$bioModal.classList.toggle("is-active");
		
		
		$bioModalName.innerHTML =  workshopTitle.innerText
	
		$bioModalDesc.innerHTML = descriptionNode.innerText

		
		
	});
	
	
}
