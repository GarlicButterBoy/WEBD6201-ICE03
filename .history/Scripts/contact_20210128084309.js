"use strict";

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
    /**
     * A Constructor for any Contact objects being instantiated
     * @param {string} fullName 
     * @param {string} contactNumber 
     * @param {string} emailAddress 
     */
    constructor(fullName = "", contactNumber = "", emailAddress = "") 
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

    /**
     * This method returns a JSON Object
     * @returns {Object}
     */
    toJSON()
    {
        return {
            "fullName":this.m_fullName,
            "contactNumber":this.m_conactNumber,
            "emailAddress":this.m_emailAddress
        }
    }

    serialize()
    {
        return   `${this.m_fullName},${this.m_conactNumber},${this.m_emailAddress}`;
    }

    deserialize(data)
    {

    }

}

