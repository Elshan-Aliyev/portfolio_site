// controllers/contactController.js
const Contact = require('../models/contact.models');

// GET api/contacts - get all contacts
exports.getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    next(err);
  }
};

// GET api/contacts/:id - get contact by id
exports.getContactById = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ message: 'Contact not found' });
    res.json(contact);
  } catch (err) {
    next(err);
  }
};

// POST api/contacts - add new contact
exports.createContact = async (req, res, next) => {
  try {
    const { firstname, lastname, email } = req.body;
    if (!firstname || !lastname || !email) {
      return res.status(400).json({ message: 'firstname, lastname and email are required' });
    }
    const contact = new Contact({ firstname, lastname, email });
    await contact.save();
    res.status(201).json(contact);
  } catch (err) {
    next(err);
  }
};

// PUT api/contacts/:id - update contact by id
exports.updateContact = async (req, res, next) => {
  try {
    const { firstname, lastname, email } = req.body;
    const updated = await Contact.findByIdAndUpdate(
      req.params.id,
      { firstname, lastname, email },
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ message: 'Contact not found' });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

// DELETE api/contacts/:id - remove contact by id
exports.deleteContact = async (req, res, next) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Contact not found' });
    res.json({ message: 'Contact deleted' });
  } catch (err) {
    next(err);
  }
};

// DELETE api/contacts - remove all contacts
exports.deleteAllContacts = async (req, res, next) => {
  try {
    await Contact.deleteMany({});
    res.json({ message: 'All contacts removed' });
  } catch (err) {
    next(err);
  }
};