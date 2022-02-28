
const carrousel_images = document.querySelectorAll(".carrousel-image");
const carrousel_left = document.querySelector("#carrousel-left");
const carrousel_right = document.querySelector("#carrousel-right");
var images_array = Array.from(carrousel_images);

var visible_img_index = 0;
var total_images_index = images_array.length - 1;
images_array[0].style.display = "block";
const slideRight = ()=>{
	if(visible_img_index < total_images_index){
		images_array[visible_img_index].style.display = "none";
		++visible_img_index;
		images_array[visible_img_index].style.display = "block";
	}
	else{
		images_array[visible_img_index].style.display = "none";
		visible_img_index = 0;
		images_array[visible_img_index].style.display = "block";
	}
}
const slideLeft = ()=>{
	if(visible_img_index === 0){
		images_array[visible_img_index].style.display = "none";
		visible_img_index = total_images_index;
		images_array[visible_img_index].style.display = "block";
	}
	else{
		images_array[visible_img_index].style.display = "none";
		--visible_img_index;
		images_array[visible_img_index].style.display = "block";
	}
}
carrousel_right.addEventListener('click',slideRight);
carrousel_left.addEventListener('click', slideLeft);
setInterval(slideRight,2000);