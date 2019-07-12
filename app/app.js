/*s

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
  $('.container').html('');
  for (var i = 0; i < window.localStorage.length; i++) {
    var item = window.localStorage.key(i);
    var category = localStorage.getItem(localStorage.key(i));
    if (category === "Bakery") {
     $('#bakery').append(`<label class="container">${item}
      <input type="checkbox">
      <span class="checkmark"></span>
      </label>`)
    }
    if (!itemExists() && category === "Canned Goods") {
      $('#canned-goods').append(`<label class="container">${item}
      <input type="checkbox">
      <span class="checkmark"></span>
      </label>`)
    }
    if (!itemExists() && category === "Dairy") {
      $('#dairy').append(`<label class="container">${item}
      <input type="checkbox">
      <span class="checkmark"></span>
      </label>`)
    }
    if (!itemExists() && category === "Dry/Baking Goods") {
      $('#dry-baking-goods').append(`<label class="container">${item}
      <input type="checkbox">
      <span class="checkmark"></span>
      </label>`)
    }
    if (!itemExists() && category === "Frozen Foods") {
      $('#frozen-foods').append(`<label class="container">${item}
      <input type="checkbox">
      <span class="checkmark"></span>
      </label>`)
    }
    if (!itemExists() && category === "Health & Personal Care") {
      $('#health-and-care').append(`<label class="container">${item}
      <input type="checkbox">
      <span class="checkmark"></span>
      </label>`)
    }
    if (!itemExists() && category === "Meat") {
      $('#meat').append(`<label class="container">${item}
      <input type="checkbox">
      <span class="checkmark"></span>
      </label>`)
    }
    if (!itemExists() && category === "Produce") {
      $('#produce').append(`<label class="container">${item}
      <input type="checkbox">
      <span class="checkmark"></span>
      </label>`)
    }
    if (!itemExists() && category === "Other") {
      $('#other').append(`<label class="container">${item}
      <input type="checkbox">
      <span class="checkmark"></span>
      </label>`)
    }
    if (!itemExists() && category === "") {
      $('#other').append(`<label class="container">${item}
      <input type="checkbox">
      <span class="checkmark"></span>
      </label>`)
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
    if (getItemInput() !== '') {
    // if (getItemInput() !== '' && getCategoryInput() !== '') {

      if (itemExists(getItemInput())) {
        if(confirm('Item already exists! Would you like to change the category instead?')) {
          updateItem(getItemInput(), getCategoryInput());
          resetInputs();
          showList();
        }
      } else {
        createItem(getItemInput(), getCategoryInput());
        showList();
        resetInputs();
      }
    } else  {
      alert('Item must not be blank');
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

