  let index=0
  
  function colorchange(){
    let colors=["green", "red","yellow","blue","purple","black"];
    document.getElementsByTagName("body")[0].style.background = colors [index++];

    if(index>colors.length-1){
        index=0;
    }
}