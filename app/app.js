/*

 ### Basic Reqs
- [ ] Where to store data? (localstorage)
- [ ] How to modify data? (update action, delete action)

*/

var categories = ["Bakery", 
   "Beverages",
   "Canned Goods",
   "Dairy",
   "Dry/Baking Goods",
   "Frozen Foods",
   "Health & Personal Care",
   "Meat",
   "Produce",
   "Other"]

//localStorage functions
var createItem = function(item, category) {
  return window.localStorage.setcategory(item, category);
}

var updateItem = function(item, category) {
  return window.localStorage.setcategory(item, category);
}

var deleteItem = function(item) {
  return window.localStorage.removecategory(item);
}

var clearList = function() {
  return window.localStorage.clear();
}

var showList = function() {
  $('tbody').html('');

  for (var i = 0; i < window.localStorage.length; i++) {
    var item = window.localStorage.item(i);
    $('tbody').append(`<tr><td>${item}</td><td>${window.localStorage.getcategory(item)}</td></tr>`)
  }
}

var itemExists = function(item) {
  return window.localStorage.getcategory(item) !== null
}

var getitemInput = function() {
  return $('.item').val();
}

var getcategoryInput = function() {
  return $('.category').val();
}

var resetInputs = function() {
  $('.item').val('');
  $('.category').val('');
}

$(document).ready(function() {
  showList();

  $('.create').click(function() {
    if (getitemInput() !== '' && getcategoryInput() !== '') {
      if (itemExists(getitemInput())) {
        if(confirm('Item already exists! Would you like to update instead?')) {
          updateItem(getitemInput(), getcategoryInput());
          showList();
        }
      } else {
        createItem(getitemInput(), getcategoryInput());
        showList();
        resetInputs();
      }
    // } else  {
    //   alert('item and category must not be blank');
    }
  });

  $('.update').click(function() {
    if (getitemInput() !== '' && getcategoryInput() !== '') {
      if (itemExists(getitemInput())) {
        updateItem(getitemInput(), getcategoryInput());
        showList();
        resetInputs();
      } else {
        alert('Item does not exist');
      }
    // } else {
    //   alert('item and category must not be blank');
    }
  });

  $('.delete').click(function() {
     if (getitemInput() !== '') {
      if (itemExists(getitemInput())) {
        deleteItem(getitemInput());
        showList();
        resetInputs();
      } else {
        alert('Item does not exist');
      }
    // } else {
    //   alert('item must not be blank');
    }
  });

  $('.reset').click(function() {
    resetInputs();
  })

  $('.clear').click(function() {
    if (confirm('Done shopping? This action will clear your list')) {
      clearList();
      showList();
    }
  })
})

