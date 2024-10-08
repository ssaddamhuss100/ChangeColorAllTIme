const color = prompt("Enter a color (name or hex code):");

if(color =='red' || color =='green' || color == 'yellow')
{ 
    document.body.style.backgroundColor = color;     
}
else{
    console.log('no color entered ');
}