// script for toggle header size
let header = document.querySelector(".header");
let menu_btn_header = document.querySelector(".hamburger_menu");

menu_btn_header.onclick = function() {
	header.classList.toggle("expanded");
}


// main_portfolio_wrapp.forEach(function(e){
// 	let height_of_current_photo_work_wrapp = current_photo_work_wrapp.offsetHeight;

// 	gallery_work_container = function height_for_gallery_portfolio_fun() {
// 		gallery_work_container.style.height = height_of_current_photo_work_wrapp + "px";
// 	}



// 	// let gallery_work_container_All = document.querySelectorAll(".gallery_work_container");
// 	// gallery_work_container_All.style.height = height_of_current_photo_work_wrapp + "px";
// });

// Step 1: Select all the elements you want to set the same height for

// Step 2: Iterate over the elements
// script for equality the photo current about work and the gallery
	let main_portfolio_wrapp = document.querySelectorAll(".main_portfolio_wrapp");


	let big_photo_current = document.querySelector(".current_photo_work_wrapp").offsetHeight;
	let mini_photo_list_gallery = document.querySelector(".gallery_work_container");

main_portfolio_wrapp.forEach(function() {

	
	mini_photo_list_gallery.style.height = big_photo_current + "px";
	


	// scritp for toggle more details about work portfolio
	let details_about_work_btn = document.getElementById("details_about_work_btn_id");
	let details_about_work_wrapp = document.querySelector(".details_about_work_wrapp_main");

	details_about_work_btn.onclick = function() {
		details_about_work_wrapp.classList.toggle("active");
			
		if (details_about_work_btn.innerHTML === "+ More +") {
			details_about_work_btn.innerHTML = "- Less -";
		} else {
			details_about_work_btn.innerHTML = "+ More +";
		}
		
	}
});






// js course

// var labelNum = document.getElementById("aLbl");
// let dec = document.getElementById("dec").onclick = function() {
// 	count -= 1;
// 	labelNum.innerHTML = count;
// }
// let del = document.getElementById("del").onclick = function() {
// 	count = 0;
// 	labelNum.innerHTML = count;
// }
// let inc = document.getElementById("inc").onclick = function() {
// 	count += 1;
// 	labelNum.innerHTML = count;
// } 

// let count = 0;
// let x = Math.floor(Math.random() * 6) + 1;

// console.log(x );





// aurora === DOMContentLoaded