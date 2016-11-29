describe('Address Book', function() {

  var addressBook;
  var thisContact;

  // run before each of the test suites
  beforeEach(function() {
    addressBook = new AddressBook();
    thisContact = new Contact();
  });

  it('should be able to add a contact', function() {
    addressBook.addContact(thisContact);

    expect(addressBook.getContact(0)).toBe(thisContact);
  });

  it('should be able to delete contact', function() {
    addressBook.addContact(thisContact);
    addressBook.deleteContact(0);

    expect(addressBook.getContact(0)).not.toBeDefined();
  })
});

describe('Async Address Book', function() {
  var addressBook = new AddressBook();

  beforeEach(function(done) {
    addressBook.getInitialContacts(function() {
      done();  // let test suite knows when async func is done running and can continue testing
    })
  })

  it('should get initial contacts', function(done) {  // done indicates which test rely on the async execution

    expect(addressBook.initialComplete).toBe(true);
    done();

  });
});