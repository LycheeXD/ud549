function AddressBook() {

  this.contacts = [];
  this.initialComplete = false;

  this.addContact = function(contact) {
    // this.push(contact);
    this.contacts.push(contact);
  };

  this.getContact = function(index) {
    return this.contacts[index];
  };

  this.deleteContact = function(index) {
    delete this.contacts.splice(index, 1);
  };

  this.getInitialContacts = function(callback) {
    var self = this;

    setTimeout(function() {
      self.initialComplete = true;
      if(callback) {
        return callback();
      }
    }, 3);
  }
};