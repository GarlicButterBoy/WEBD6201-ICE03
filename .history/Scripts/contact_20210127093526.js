

//Contact Class
class Contact {

    //getters and setters
  get FullName() 
  {
      return this.m_fullName;
  }
  get ContactNumber() 
  {
      return this.m_conactNumber;
  }
  get EmailAddress() 
  {
      return this.m_emailAddress;
  }
  set FullName(value) 
  {
      this.m_fullName = value;
  }
  set ContactNumber(value) 
  {
      this.m_conactNumber = value;
  }
  set EmailAddress(value) 
  {
      this.m_emailAddress = value;
  }

    //Constructor
    constructor(fullName, contactNumber, emailAddress) 
    {
        this.m_conactNumber = contactNumber;
        this.m_emailAddress = emailAddress;
        this.m_fullName = fullName;
    }
    
    //Methods
    toString() 
    {
        return `Full Name: ${this.m_fullName}\nPhone: ${this.m_conactNumber}\nEmail: ${this.m_emailAddress}`;
    }
}

/*
var Contact = /** @class *//* (function () {
    //Constructor
    function Contact(fullName, contactNumber, emailAddress) {
        this.m_conactNumber = contactNumber;
        this.m_emailAddress = emailAddress;
        this.m_fullName = fullName;
    }
    //Methods
    Contact.prototype.toString = function () {
        return this.m_fullName + ":\n--------------------\nPhone: " + this.m_conactNumber + "\nEmail: " + this.m_emailAddress + "\n";
    };
    return Contact;
}());
*/