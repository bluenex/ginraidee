const button = document.querySelector('.button');
const dropdown = document.querySelector('.dropdown');

button.addEventListener('click', () => {
  dropdown.classList.toggle('is-active');
});



window.onload = function(){
  const title1 = document.getElementsByClassName('dropdown-trigger');
  // this is title
  title1[0].childNodes[1].childNodes[1].innerHTML = "ทดสอบการเปลี่ยน"

  const items = document.getElementsByClassName('dropdown-content');
  // console.log(title1[0].childNodes[1].childNodes[1].innerHTML);

  // items[0].children.forEach(function(element) {
  //   console.log(element)
  // }, this);

  for (i = 0; i< items[0].childNodes.length; i++) {
    tmp = items[0].childNodes[i]
    console.log(tmp)
    
    // to change innerHTML of dropdown item
    // if (tmp.className == 'dropdown-item') {
    //   // console.log(tmp.childNodes[1].innerHTML = "ทดสอบ " + i);
    // }

    if (tmp.className == 'dropdown-item' || tmp.className == 'dropdown-divider') {
      items[0].removeChild(tmp)
    }

    // to remove child of dropdown content (all of dropdown items)
    // items[0].removeChild(tmp)

  }

  for (i = 0; i < foodshopList.infront.length; i++) {
    // create node first
    items[0].appendChild()

    <div class="dropdown-item">
    <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
  </div>
  }
  // console.log(items[0].childNodes);

  // try getting data
  console.log(foodshopList.infront)
};
