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

// var showDatabaseContents = function() {
//   $('tbody').html('');

//   for (var i = 0; i < window.localStorage.length; i++) {
//     var key = window.localStorage.key(i);
//     $('tbody').append(`<tr><td>${key}</td><td>${window.localStorage.getItem(key)}</td></tr>`)
//   }
// }

var showList = function() {
  $('#bakery tbody').html('');
  $('#canned-goods tbody').html('');
  $('#dairy tbody').html('');
  $('#dry-baking-goods tbody').html('');
  $('#frozen-foods tbody').html('');
  $('#health-and-care tbody').html('');
  $('#meat tbody').html('');
  $('#produce tbody').html('');
  $('#other tbody').html('');


  for (var i = 0; i < window.localStorage.length; i++) {
    var item = window.localStorage.key(i);
    var category = localStorage.getItem(localStorage.key(i));
    if (itemExists()===undefined && category === "Bakery") {
     $('#bakery').append(`<label class="container">${item}
      <input type="checkbox">
      <span class="checkmark"></span>
      </label>`)

    }
    if (itemExists()===undefined && category === "Canned Goods") {
      $('#canned-goods').append(`<label class="container">${item}
      <input type="checkbox">
      <span class="checkmark"></span>
      </label>`)
    }
    if (itemExists()===undefined && category === "Dairy") {
      $('#dairy').append(`<label class="container">${item}
      <input type="checkbox">
      <span class="checkmark"></span>
      </label>`)
    }
    if (itemExists()===undefined && category === "Dry/Baking Goods") {
      $('#dry-baking-goods').append(`<label class="container">${item}
      <input type="checkbox">
      <span class="checkmark"></span>
      </label>`)
    }
    if (itemExists()===undefined && category === "Frozen Foods") {
      $('#frozen-foods').append(`<label class="container">${item}
      <input type="checkbox">
      <span class="checkmark"></span>
      </label>`)
    }
    if (itemExists()===undefined && category === "Health & Personal Care") {
      $('#health-and-care').append(`<label class="container">${item}
      <input type="checkbox">
      <span class="checkmark"></span>
      </label>`)
    }
    if (itemExists()===undefined && category === "Meat") {
      $('#meat').append(`<label class="container">${item}
      <input type="checkbox">
      <span class="checkmark"></span>
      </label>`)
    }
    if (itemExists()===undefined && category === "Produce") {
      $('#produce').append(`<label class="container">${item}
      <input type="checkbox">
      <span class="checkmark"></span>
      </label>`)
    }
    if (itemExists()===undefined && category === "Other") {
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

