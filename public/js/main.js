  'use strict';

  $(document).ready(init);

  var contacts = localStorage.contacts ? JSON.parse(localStorage.contacts) : [];
  updateList();

  function init() {
    $('#add').click(addContact);
    $('#list').on('click', '.remove', removeContact);
    $("#list").on("click", ".edit", editContact);
  }

  function removeContact(e) {
    var $target = $(e.target);
    var $targetRow = $target.closest('tr');

    var index = $targetRow.index();
    contacts.splice(index, 1);

    //updateList();
    saveLocalStorage();
    location.reload();

  }

  function editContact(e){
    var $target = $(e.target);
    var $targetRow = $target.closest('tr').addClass("editor");

    var index = $targetRow.index();
    document.getElementById("editor").addEventListener("input", function() {
      sweetAlert("Click on the input box that you would like to edit.")
    }, false);
  }

  function addContact() {
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var phoneNumber = $('#phoneNumber').val();
    var email = $('#email').val();

    var contact = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
      deleted: false
    };
    contacts.push(contact);
    // updateList();
    // saveLocalStorage();
    location.reload();
  }

  function updateList() {
    console.log('contacts:', contacts);
    //$('#list').empty();

    if(contacts.length){
      $('table.table').show();
    } else {
      $('table.table').hide();
    }
        //location.reload();

    var contactElements = contacts.map(function(contact){
      var $tr = $('#sample').clone();
      $tr.removeAttr('id');
      $tr.children('.firstName').text(contact.firstName);
      $tr.children('.lastName').text(contact.lastName);
      $tr.children('.phoneNumber').text(contact.phoneNumber);
      $tr.children('.email').text(contact.email);
      $tr.find('input').prop('checked', contact.completed);
      $tr.css({
        'text-decoration': contact.completed ? 'line-through' : '',
        'color': contact.completed ? '#aaa' : ''
      });
      $tr.show();
      return $tr;
    });

    $('#list').append(contactElements);
  }

  function saveLocalStorage() {
    localStorage.contacts = JSON.stringify(contacts);
  }


