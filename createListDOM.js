const other = document.querySelector('.other');
const otherFruits = document.querySelector('.other-fruits');
other.addEventListener('keypress',function(e){
  // console.log(e);
  if(e.keyCode == 13){
    console.log(this.value);
    const newItem = document.createElement('li');
    newItem.innerText = `${this.value}`;
    otherFruits.appendChild(newItem);
    this.value = "";  //this line resets the value of the input field to empty.
  }
});
function tableInputKeyPress(e){
  // e=e||window.event;
  var key = e.keyCode;
  if(key==13) //Enter
  {
     //do you task here...
     return false; //return true to submit, false to do nothing
  }
}

/////*********HTML************//////
/*
<div class="form">
    <form onkeypress="return tableInputKeyPress(event)">
      
        <select title="Favourite Fruit" name="Favourite Fruit">
            <option value="Apple">Apple</option>
            <option value="Orange">Orange</option>
            <option value="Banana">Banana</option>
            <option value="Lemon">Lemon</option>
        </select>
        <input type="text" placeholder="other" class="other"></input>
        <!-- <button type="submit" aria-placeholder="submit" class="button">submit</button> -->
        <ul class="other-fruits">
            
        </ul>
    </form>
</div>
*/
