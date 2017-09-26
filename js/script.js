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

// dropdown trigger 
const dropdownContents = document.getElementsByClassName('dropdown-content');
const groupDropdownContent = dropdownContents[0];
const itemsDropdownContent = dropdownContents[1];

// -- functions
function init() {
  const title1 = document.getElementsByClassName('dropdown-trigger');
  // this is title (dropdown parent)
  title1[0].childNodes[1].childNodes[1].innerHTML = "ที่ไหนก็ได้"

  // this is items part
  // const items = document.getElementsByClassName('dropdown-content');
  // console.log(title1[0].childNodes[1].childNodes[1].innerHTML);
  
  // remove default values
  removeItems(groupDropdownContent);

  // add items to dropdown
  // since this is default, we will concat all list together as ALL
  // get all keys
  allAreaKeys = Object.keys(foodshopList);
  tmp = [];

  // mix all shops in list
  for (i=0; i< allAreaKeys.length; i++) {
    tmp.push(foodshopList[allAreaKeys[i]]);
    console.log(tmp);
  }

  // add list to dropdown
  addGroups(groupDropdownContent, allAreaKeys)
}

// -- helper functions
function removeItems(dropdownParent) {
  for (i = 0; i< dropdownParent.childNodes.length; i++) {
    tmp1 = dropdownParent.childNodes[i]
    // console.log(tmp)
    
    // to change innerHTML of dropdown item
    // if (tmp.className == 'dropdown-item') {
    //   // console.log(tmp.childNodes[1].innerHTML = "ทดสอบ " + i);
    // }

    if (tmp1.className == 'dropdown-item' || tmp1.className == 'dropdown-divider') {
      dropdownParent.removeChild(tmp1)
    }

    // to remove child of dropdown content (all of dropdown items)
    // items[0].removeChild(tmp)

  }
}

function addGroups(dropdownParent, arrayToAdd) {
  for (i = 0; i < arrayToAdd.length; i++) {
    // create node first
    // start from innermost <p>
    const textNode = document.createElement("p");
    // add text get from array
    textNode.innerHTML = arrayToAdd[i]
    // create <div> to wrap <p>
    const divNode = document.createElement("a")
    // set class name for <div>
    divNode.className = "dropdown-item";
    divNode.onclick = ()=>{
      // call select group function
      selectingGroup(textNode.innerHTML);
    }
    // put <p> into <div>
    divNode.appendChild(textNode)

    // append node to items
    dropdownParent.appendChild(divNode)

    // if this is not last element of array, put line as separator
    if (i < arrayToAdd.length - 1) {
      const hrNode = document.createElement("hr")
      hrNode.className = "dropdown-divider"

      dropdownParent.appendChild(hrNode)
    }

  //   <div class="dropdown-item">
  //   <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
  // </div>
  }
}

function selectingGroup(groupSelected) {
  removeItems(itemsDropdownContent);
  addItems(itemsDropdownContent, foodshopList[groupSelected]);
  console.log(foodshopList[groupSelected]);

}

function addItems(dropdownParent, arrayToAdd) {
  for (i = 0; i < arrayToAdd.length; i++) {
    // create node first
    // start from innermost <p>
    const textNode = document.createElement("p");
    // add text get from array
    textNode.innerHTML = arrayToAdd[i]
    // create <div> to wrap <p>
    const divNode = document.createElement("div")
    // set class name for <div>
    divNode.className = "dropdown-item";
    // put <p> into <div>
    divNode.appendChild(textNode)

    // append node to items
    dropdownParent.appendChild(divNode)

    // if this is not last element of array, put line as separator
    if (i < arrayToAdd.length - 1) {
      const hrNode = document.createElement("hr")
      hrNode.className = "dropdown-divider"

      dropdownParent.appendChild(hrNode)
    }

  //   <div class="dropdown-item">
  //   <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
  // </div>
  }
}




// after window is loaded
window.onload = function(){
  init();

  

  // items[0].children.forEach(function(element) {
  //   console.log(element)
  // }, this);

  

  

  


  // console.log(items[0].childNodes);

  // try getting data
  // console.log(foodshopList.infront)
};

