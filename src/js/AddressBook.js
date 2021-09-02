class AddressBook {
  create(data) {
    let contact = []
    contacts.push(data)
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = AddressBook;
}
