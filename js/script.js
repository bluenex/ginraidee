// -- script for dropdown to work
// group dropdown
const groupButton = document.querySelector('#group-button');
const groupDropdown = document.querySelector('#group-dropdown');

groupButton.addEventListener('click', (e) => {
  groupDropdown.classList.toggle('is-active');
  e.stopPropagation();
}, true);

// items dropdown
const itemsButton = document.querySelector('#items-button');
const itemsDropdown = document.querySelector('#items-dropdown');

itemsButton.addEventListener('click', (e) => {
  itemsDropdown.classList.toggle('is-active');
  e.stopPropagation();
}, true);

// auto-collapse dropdown when user click wherever
// stopPropagation() must be used in each dropdown to prevent 
// event triggering this auto-collapse right after expanding
document.addEventListener('click', () => {
  const tmps = document.querySelectorAll('.is-active')

  Array.prototype.forEach.call(tmps, (tmp, i) => {
    tmps.item(i).classList.remove('is-active');
  });
}, false);

window.onload = function(){
  const title1 = document.getElementsByClassName('dropdown-trigger');
  // this is title
  title1[0].childNodes[1].childNodes[1].innerHTML = "ที่ไหนก็ได้"

  const items = document.getElementsByClassName('dropdown-content');
  // console.log(title1[0].childNodes[1].childNodes[1].innerHTML);

  // items[0].children.forEach(function(element) {
  //   console.log(element)
  // }, this);

  for (i = 0; i< items[0].childNodes.length; i++) {
    tmp = items[0].childNodes[i]
    // console.log(tmp)
    
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
    const textNode = document.createElement("p");
    textNode.innerHTML = foodshopList.infront[i]
  
    const divNode = document.createElement("div")
  
    divNode.className = "dropdown-item";
  
    divNode.appendChild(textNode)

    // append node to items
    items[0].appendChild(divNode)
    if (i < foodshopList.infront.length - 1) {
      const hrNode = document.createElement("hr")
      hrNode.className = "dropdown-divider"

      items[0].appendChild(hrNode)
    }

  //   <div class="dropdown-item">
  //   <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
  // </div>
  }

  


  // console.log(items[0].childNodes);

  // try getting data
  // console.log(foodshopList.infront)
};

