// clear list of areas
$('#area-list').empty();

// get area list from data file
areas = getAreaList();
// console.log(areas);

// put area names to the list
for (i = 0; i < areas.length; i++) {
  // append one by one
  $('#area-list').append('<a class="dropdown-item area-item" href="#">' + areas[i] + '</a>');
  // if not the last one, also append divider
  if (i < areas.length - 1) {
    $('#area-list').append('<div class="dropdown-divider"></div>');
  }
}

// clear list of shops
$('#shop-list').empty();

// get shop list from data file
shops = getShopsList('ที่ไหนก็ได้');

// put shop names to the list
for (i = 0; i < shops.length; i++) {
  // append to the list
  $('#shop-list').append('<div class="dropdown-item">' + shops[i] + '</div>');
}

// click listeners
// click on area item
$('.area-item').click((e) => {
  // clear last result
  $('.rand-result').text('-');
  $('.result-area').removeClass('rand-final-result');

  // get area being selected
  area = $(e.target).text();
  // set button label as area name
  $('#area-button').html(area);
  // console.log(area)


  // clear shops list
  $('#shop-list').empty();
  // get shops list of this area
  shops = getShopsList(area)

  // append shop names to its list
  for (i = 0; i < shops.length; i++) {
    $('#shop-list').append('<div class="dropdown-item">' + shops[i] + '</div>');
  }

});

// click on random button
$('#rand-button').click((e) => {
  // randomly show text 15 times, the last one is result
  for (var i = 1; i <= 15; ++i) {
    (function () {
      // change text
      setTimeout(function () {
        $('.rand-result').text(shops[randRange(shops)]);
      }, i * 125);

      // change decoration
      setTimeout(() => {
        $('.result-area').addClass('rand-final-result');
      }, 16*125);
    })(i);
  }
});


// helper function
function randRange(arr) {
  return Math.floor(Math.random() * arr.length);
} 