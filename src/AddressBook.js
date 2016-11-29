function AddressBook() {

  this.contacts = [];

  this.addContact = function(contact) {
    // this.push(contact);
    this.contacts.push(contact);
  };

  this.getContact = function(index) {
    return this.contacts[index];
  };

  this.deleteContact = function(index) {
    delete this.contacts.splice(index, 1);
  }
};