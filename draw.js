
function createCanvas()
{
   var side = 100;
   var tbody = document.getElementById( "tablebody" );
  
   for ( var i = 0; i < side; ++i )
   {
      var row = document.createElement( "tr" );
       
      for ( var j = 0; j < side; ++j )
      {
         var cell = document.createElement( "td" );
         row.appendChild( cell );
      } // end for

      tbody.appendChild( row );
   } // end for

   // register mousemove listener for the table
   document.getElementById( "canvas" ).addEventListener( 
      "mousemove", processMouseMove, false );
} // end function createCanvas

// processes the onmousemove event
function processMouseMove( e )
{        
   if ( e.target.tagName.toLowerCase() == "td" )
   {
      // turn the cell blue if the Ctrl key is pressed
      if ( e.ctrlKey )
      {
         e.target.setAttribute( "class", "blue" );
      } // end if

      // turn the cell red if the Shift key is pressed
      if ( e.shiftKey )
      {
         e.target.setAttribute( "class", "red" );
      } // end if
   } // end if
} // end function processMouseMove

window.addEventListener( "load", createCanvas, false );



const canvas = document.getElementById('drawing-board');
const toolbar = document.getElementById('toolbar');
const ctx = canvas.getContext('2d');

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

let isPainting = false;
let lineWidth = 5;
let startX;
let startY;

toolbar.addEventListener('click', e => {
    if (e.target.id === 'clear') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});

toolbar.addEventListener('change', e => {
    if(e.target.id === 'stroke') {
        ctx.strokeStyle = e.target.value;
    }

    if(e.target.id === 'lineWidth') {
        lineWidth = e.target.value;
    }
    
});

const draw = (e) => {
    if(!isPainting) {
        return;
    }

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
    ctx.stroke();
}

canvas.addEventListener('mousedown', (e) => {
    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;
});

canvas.addEventListener('mouseup', e => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});

canvas.addEventListener('mousemove', draw);

function message(){
    let form=document.getElementById('f1');
    if (form.checkValidity()) {
    window.alert('تم ارسال فضفتك بنجاح');
    }
}

function massge(){
    let form1=document.getElementById('f1');
    if (form1.checkValidity()) {
    window.alert('فضفتك بالحفظ و الصون');
     } 
 }




////////////////////////////////////////////////////////////////////////////////////

 function checkCanvas1() {
    var canvas = document.getElementById('drawing-board');
    if (isCanvasEmpty(canvas)){
        alert('من فضلك ارسم');
    } else {
        alert('رسمتك بالحفظ و الصون');
    }
};
function checkCanvas() {
    var canvas = document.getElementById('drawing-board');
    if (isCanvasEmpty(canvas)){
        alert('من فضلك ارسم');
    } else {
        alert('تم ارسال رسمتك بنجاح');
    }
};
function isCanvasEmpty(canvas) {
    const blankCanvas = document.createElement('canvas');
    blankCanvas.width = canvas.width;
    blankCanvas.height = canvas.height;
    return canvas.toDataURL() === blankCanvas.toDataURL();
}





















// function createCanvas(){
//     var side = 100;
//     var tbody = document.getElementById("tablebody");
//     for(var i =0; i<side; ++i){
//         var row = document.createElement("tr");

//         for(var j = 0; j<side; ++j){
//             var cell = document.createElement("td");
//             row.appendChild(cell);
//         }

//         tbody.appendChild(row);
//         document.getElementById("canvas").addEventListener("mousemove", processMouseMove, falsse);
//     }

//     function processMouseMove(e){
//         if(e.ctrlkey){
//             e.target.setAttribute("class", "blue");
//         }
//         if(e.shiftKey){
//             e.target.setAttribute("class", "red");
//         }
//     }

// }
