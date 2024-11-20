const imagine = document.getElementById('imageToMove');
let topPosition = 50;
let leftPosition = 50;

window.addEventListener('keydown', function(evemt)  {
    const step = 10;


switch(Event.key)   {
    case 'ArrowUp' :
        topPosition -= step;
        break;
    case 'ArrowDown'
         topPosition += step;
        break;
        
    }
}
}