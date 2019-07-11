/*

 ### Basic Reqs
- [ ] Where to store data? (localstorage)
- [ ] How to modify data? (update action, delete action)

*/

// var categories = ["Bakery", 
//    "Beverages",
//    "Canned Goods",
//    "Dairy",
//    "Dry/Baking Goods",
//    "Frozen Foods",
//    "Health & Personal Care",
//    "Meat",
//    "Produce",
//    "Other"]

//localStorage functions
var createItem = function(item, category) {
  return window.localStorage.setItem(item, category);
}

var updateItem = function(item, category) {
  return window.localStorage.setItem(item, category);
}

var deleteItem = function(item) {
  return window.localStorage.removeItem(item);
}

var clearList = function() {
  return window.localStorage.clear();
}

var showList = function() {
  $('tbody').html('');

  for (var i = 0; i < window.localStorage.length; i++) {
    var item = window.localStorage.key(i);
    var category = localStorage.getItem(localStorage.key(i));
    if (category === "Bakery") {
     $('#bakery').append(`<tr><td><input type="checkbox"><span class="container" class="checkmark"></span>${item}</td></tr>`)

    }
    if (category === "Canned Goods") {
      $('#canned-goods').append(`<tr><td><input type="checkbox" />&ensp;${item}</td></tr>`)
    }
    if (category === "Dairy") {
      $('#dairy').append(`<tr><td><input type="checkbox" />&ensp;${item}</td></tr>`)
    }
    if (category === "Dry/Baking Goods") {
      $('#dry-baking-goods').append(`<tr><td><input type="checkbox" />&ensp;${item}</td></tr>`)
    }
    if (category === "Frozen Foods") {
      $('#frozen-foods').append(`<tr><td><input type="checkbox" />&ensp;${item}</td></tr>`)
    }
    if (category === "Health & Personal Care") {
      $('#health-and-care').append(`<tr><td><input type="checkbox" />&ensp;${item}</td></tr>`)
    }
    if (category === "Meat") {
      $('#meat').append(`<tr><td><input type="checkbox" />&ensp;${item}</td></tr>`)
    }
    if (category === "Produce") {
      $('#produce').append(`<tr><td><input type="checkbox" />&ensp;${item}</td></tr>`)
    }
    if (category === "Other") {
      $('#other').append(`<tr><td><input type="checkbox" />&ensp;${item}</td></tr>`)
    }
  }
}

var itemExists = function(item) {
  return window.localStorage.getItem(item) !== null
}

var getItemInput = function() {
  return $('.item').val();
}

var getCategoryInput = function() {
  return $('.category').val();
}

var resetInputs = function() {
  $('.item').val('');
  $('.category').val('');
}

$(document).ready(function() {
  showList();

  $('.create').click(function() {
    if (getItemInput() !== '' && getCategoryInput() !== '') {
      if (itemExists(getItemInput())) {
        if(confirm('Item already exists! Would you like to change instead?')) {
          updateItem(getItemInput(), getCategoryInput());
          showList();
        }
      } else {
        createItem(getItemInput(), getCategoryInput());
        showList();
        resetInputs();
      }
    } else  {
      alert('Item and category must not be blank');
    }
  });

  $('.update').click(function() {
    if (getItemInput() !== '' && getCategoryInput() !== '') {
      if (itemExists(getItemInput())) {
        updateItem(getItemInput(), getCategoryInput());
        showList();
        resetInputs();
      } else {
        alert('Item does not exist');
      }
    } else {
      alert('Item and category must not be blank');
    }
  });

  $('.delete').click(function() {
     if (getItemInput() !== '') {
      if (itemExists(getItemInput())) {
        deleteItem(getItemInput());
        showList();
        resetInputs();
      } else {
        alert('Item does not exist');
      }
    } else {
      alert('Item must not be blank');
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

