let sliderCount = 0;
document.addEventListener('DOMContentLoaded', function() {
    let arr = [
       'http://wp.widewallpapers.ru/2k/nature/forest/1920x1200/forest-wallpaper-1920x1200-004.jpg', 
       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgaXSvtj8UU8g9hgzGD_GHC4Tt2h4Oe5XHcCkyFtUUUlbdlIkR',
       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRacanAuYcXdWVe84485TRzujLBAtKIovZcx9J-cIg8OlRKMT-dEw',
       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1_0wsk_0ZBu6NvGN0h9lvvwIlplc_XMScIYaY_-rmhMR4x7PO',
       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0gdzcGCGUV1vAOFADqVjbQFuGndc0-MhEiaZV1CYR1sP8tGh'
    ];
    let slider = document.getElementsByClassName('slider-wrapper');
    console.log(slider);
    let rightButton = document.getElementById('right-button');
    rightButton.addEventListener ('click', function() {
    	if (sliderCount==arr.length-1) {
    		sliderCount=0;
    	} else {
    		sliderCount++;
    	};
    	
    	let img = document.getElementById('img');
    	img.src = arr[sliderCount];
    	
    });
    
  
   let leftButton = document.getElementById('left-button');
   leftButton.addEventListener ('click', function() {
   	   if (sliderCount==0) {
   		  sliderCount=arr.length-1;
   	   } else {
   		  sliderCount--;
   	   };
   
   	   let img = document.getElementById('img');
       img.src = arr[sliderCount];
   });

   
} )	