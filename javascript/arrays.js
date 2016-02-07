//create an array literal (best practice)
var colorList = ["Red", "Black", "White", "Blue", "Ocher", "Yellow", "Pink"];
console.log(colorList[0]); //outputs the first item to console

//sort the colors - alphabetical order
colorList.sort();
console.log(colorList);

//sorts the colors in reverse alpha order
colorList.reverse();
console.log(colorList);

//make a list of scores (numbers)
var scores = [12, 2, 300, 40, 23, 43, 53, 13, 25, 90, 43, 23];
//write in console scores.pop() pops one off the end


colorList.pop(); //removes the end element (and returns the length)

//assign the end element to a result variable
var endElement = colorList.pop();
//console endElement (it's holding yellow from the end of the list)

colorList.shift(); //removes the first element in the array
colorList.unshift("brown"); //add to the front of the list

colorList.splice(0,2); //needs two parameters - start at 0, and then take out 2 items from that position, the default second one is 1

var myThumbDiv = document.getElementById("thumbs");
//variables IN functions (function scope), can see global varibles)
 
var imageListA = [];
imageListA[0] = "images/drawing/thumbs/artwork_1.jpg";
imageListA[1] = "images/drawing/thumbs/artwork_2.jpg";
imageListA[2] = "images/drawing/thumbs/artwork_3.jpg";
imageListA[3] = "images/drawing/thumbs/artwork_4.jpg";
imageListA[4] = "images/drawing/thumbs/artwork_5.jpg";
imageListA[5] = "images/drawing/thumbs/artwork_6.jpg";
imageListA[6] = "images/drawing/thumbs/artwork_7.jpg";
imageListA[7] = "images/drawing/thumbs/artwork_8.jpg";
imageListA[8] = "images/drawing/thumbs/artwork_9.jpg";
imageListA[9] = "images/drawing/thumbs/artwork_10.jpg";
imageListA[10] = "images/drawing/thumbs/artwork_11.jpg";
imageListA[11] = "images/drawing/thumbs/artwork_12.jpg";
imageListA[12] = "images/drawing/thumbs/artwork_13.jpg";
imageListA[13] = "images/drawing/thumbs/artwork_14.jpg";
imageListA[14] = "images/drawing/thumbs/artwork_15.jpg";
imageListA[15] = "images/drawing/thumbs/artwork_16.jpg";
imageListA[16] = "images/drawing/thumbs/artwork_17.jpg";

//Oil color art
var imageListB = [];
imageListB[0] = "images/oil/thumbs/artwork_1.jpg";
imageListB[1] = "images/oil/thumbs/artwork_2.jpg";
imageListB[2] = "images/oil/thumbs/artwork_3.jpg";
imageListB[3] = "images/oil/thumbs/artwork_4.jpg";
imageListB[4] = "images/oil/thumbs/artwork_5.jpg";
imageListB[5] = "images/oil/thumbs/artwork_6.jpg";
imageListB[6] = "images/oil/thumbs/artwork_7.jpg";
imageListB[7] = "images/oil/thumbs/artwork_8.jpg";


//Water color art
var imageListC = [];
imageListC[0] = "images/watercolor/thumbs/artwork_1.jpg";
imageListC[1] = "images/watercolor/thumbs/artwork_2.jpg";
imageListC[2] = "images/watercolor/thumbs/artwork_3.jpg";
imageListC[3] = "images/watercolor/thumbs/artwork_4.jpg";
imageListC[4] = "images/watercolor/thumbs/artwork_5.jpg";
imageListC[5] = "images/watercolor/thumbs/artwork_6.jpg";
imageListC[6] = "images/watercolor/thumbs/artwork_7.jpg";
imageListC[7] = "images/watercolor/thumbs/artwork_8.jpg";
imageListC[8] = "images/watercolor/thumbs/artwork_9.jpg";
imageListC[9] = "images/watercolor/thumbs/artwork_10.jpg";



//create the buildThumbnail function
function buildThumbnails()
{
	//hook onto the thumbs div
	var thumbsDiv = document.getElementById("thumbs");
	
	//create an output variable
	var output = "";
	//first part: counter (we set up 0 to start counting the loop)
	//second part: condition, (the loop will keep looping as long as the condition is true)
	//third part: incrementor - adds one to the counter AFTER the code is executed in the brackets
	output += '<div class="thumbs_block"> ';
    for(var i=0; i < imageListA.length; i++)
	{
		//concatenation assignment operator..
		output += '<img src="' + imageListA[i] + '" />';
	}
    output += '</div>';
	
    output += '<div class="thumbs_block"> ';
	for(var j=0; j < imageListB.length; j++)
	{
		//concatenation assignment operator..
		output += '<img src="' + imageListB[j] + '" />';
	}
    output += '</div>';
// 	
    output += '<div class="thumbs_block"> ';
	for(var k=0; k < imageListC.length; k++)
	{
		//concatenation assignment operator..
		output += '<img src="' + imageListC[k] + '" />';
	}
    output += '</div>';
  
	thumbsDiv.innerHTML = output;
	// thumbsDiv.innerHTML = 
	// '<img src="' + imageList[0] + '" />' + 
	// '<img src="' + imageList[1] + '" />' +
	// '<img src="' + imageList[2] + '" />' +
	// '<img src="' + imageList[3] + '" />' +	
	// '<img src="' + imageList[4] + '" />'
	// ;
}

 



window.onload = function()
{
	buildThumbnails();//use or "fire off" this function
	//or invoke the function
};

//var myThumbDiv = document.getElementById("thumbs"); - reference to above

//create a new array (list) to hold the purchased images
var purchasedImages = [];

//attach a click event to the DIV with thumbs
myThumbDiv.addEventListener("click", onImageClick, false);

//the function handler - evt, incoming event, means event- but you could call it anything, alot of ppl just use e for event
function onImageClick(evt) 
{
  
  
  //step 1
  //we only want the src attribute of the image so we need to get the "src" attribute of the img tag we click on...
  var onlyPath = evt.target.getAttribute("src");
  //onlyPath is the variable (var) evt=event, target=whatever we clicked on, getAttribute(of that image tag)called "src"=source, which is just the path sans the variable "onlyPath"
  //check the variable with a console.log
  console.log(onlyPath);
  
  //step 2
  var imageIndex = imageListA.indexOf(onlyPath);
  //the indexOf array method searches for a match in the array and if it finds the data, it sends back (or returns) the index position in the array
  
  //console.log(imageIndex);
  
  //step 3
  //get the element you clicked on OUT of the imageListA array and save the clicked image path to a variable so we can use it later
  var selectedImage = imageListA.splice(imageIndex, 1);
  //splice command: go to the first element and remove it and assign it to the one the user clicked on.
  console.log(selectedImage);
  
  //step 4
  //add this image path to the purchasedImage array...
  purchasedImages.push(selectedImage); //push adds the element to the new array
  update_shopping_cart();
  buildThumbnails();
  
function update_shopping_cart()
{
  //make a shortcut to the div id="shopping_cart_div"
  var cart = document.getElementById("shopping_cart_div");
  
  //create an output variable so we can build it up over the following lines
  var output = "";
  
  //create a for loop
  for(var i=0; i <= purchasedImages.length -1; i++ )
  //use a -1 after imageList.length so the condition is always one less (to match the index number)
  
    
  {  
    output += '<img src="' + purchasedImages[i] + '" width="70" height="50" />';
  }
  
    cart.innerHTML = output
    //send the imageList array to the console for debugging
    //console.log(imageList.length);
  
  
}
  
  
  
  
  console.log("yes i've been clicked"); 
  console.log(evt.target); //bring back just the element that gets clicked
  evt.target.setAttribute("src", "images/drawing/thumbs/artwork_22.jpg") //changes all the images to that image--pretty cool!
  // evt.target.setAttribute("style", "display: none;");
  evt.target.setAttribute("style", "padding: 1em;");// changes the inline style
  
  var imageIndex = imageListA.indexOf("images/drawing/thumbs/artwork_5.jpg");
  console.log(imageIndex); //in this listA find what index number is artwork 19? which is 4! if you type imageListA[4] then you will get the link to the image.

}