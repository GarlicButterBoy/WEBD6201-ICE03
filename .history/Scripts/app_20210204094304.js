/* custom JavaScript goes here */

//IIFE - Immediately Invoked Function Expression
//AKA - Anonymous Self-Executing Function
//Closure - limits scope leak

"use strict";
/* Example of a class being created with brand new functions
let myContact = 
{
  "firstName":"Nick SF",
  "contactNumber":"905-123-4567",
  "emailAddress":"email@test.com",
  "saysHello":function() { console.log(`${fullName} says Hello!`); },
  "someOtherObject":{  "friendsList":["Tony", "Stephen", "Peter"]  }

};*/

((core) =>
{
    function displayHome()
    {
/*
      $("button").on("mouseover", function(){
        console.log("JQuery Click");
      });

      let myButton = document.querySelectorAll("button")[1];
      myButton.addEventListener("click", () => {
        console.log("Button Clicked!");
      });
*/
      //console.log(myButton);

        let paragraphOneText =
          "This is a simple site to demonstrate DOM Manipulation for ICE 1";

        let paragraphOneElement = document.getElementById("paragraphOne");

        paragraphOneElement.textContent = paragraphOneText;
        paragraphOneElement.className = "fs-5";

        // Step 1. document.createElement
        let newParagraph = document.createElement("p");
        // Step 2. configure the element
        newParagraph.setAttribute("id", "paragraphTwo");
        newParagraph.textContent = "...And this is paragraph two";
        // Step 3. select the parent element
        let mainContent = document.getElementsByTagName("main")[0];
        // Step 4. Add / Insert the element
        mainContent.appendChild(newParagraph);

        newParagraph.className = "fs-6";

        // another way of injecting content
        let paragraphDiv = document.createElement("div");
        let paragraphThree = `<p id="paragraphThree" class="fs-7 fw-bold">And this is the Third Paragraph</p>`;
        paragraphDiv.innerHTML = paragraphThree;

        // insertions

        // example of inserting before a node
        //newParagraph.before(paragraphDiv);

        // example of inserting after a node
        newParagraph.after(paragraphDiv);

        // deletions

        // example of removing a single element
        //paragraphOneElement.remove();

        // example of removeChild
        mainContent.removeChild(paragraphOneElement);

        // update / modification
        //mainContent.firstElementChild.textContent = "Welcome Home!";

        mainContent.innerHTML = `<h1 id="firstHeading">Welcome to WEBD6201 - Lab 1</h1>
         <p id="paragraphOne" class="fs-3 fw-bold">This is my first Paragraph</p>
        `;
        
    }

    function displayAbout()
    {

    }

    function displayProjects()
    {

    }

    function displayServices()
    {

    }

    function displayContact()
    {
        //This is the same as below
        let messageArea = $("#messageArea").hide();
        //Same as this
        //let messageArea = document.getElementById("messageArea");
        //messageArea.hidden = true;
      
        // form validation
        $("#fullName").on("blur", function() 
        {
          if($(this).val().length < 2)
            {
                //JQuery example of the lines below
                $(this).trigger("focus").trigger("select");
                messageArea.show().addClass("alert alert-danger").text("Please enter an appropriate name");
                //fullName.focus();
                //fullName.select();
                //messageArea.hidden = false;
                //messageArea.className = "alert alert-danger";
                //messageArea.textContent = "Please enter an appropriate Name";
            }
            else
            {
                //JQuery example of the line below
                messageArea.removeAttr("class").hide();
                //messageArea.hidden = true;
                //messageArea.removeAttribute("class");
            }
        });
        //let fullName = document.getElementById("fullName");
        //fullName.addEventListener("blur", function() {});

        $("#sendButton").on("click", ()=>
        {
          if ($("#subscribeCheckbox")[0].checked)
          {
            let contact = new core.Contact(fullName.value, contactNumber.value, emailAddress.value);
            if(contact.serialize()) //checking if the serialized object exists
            {
              localStorage.setItem((localStorage.length + 1).toString(), contact.serialize());
            }
          }
        });

        //let sendButton = document.getElementById("sendButton");
        //sendButton.addEventListener("click", function(event){
            
            //event.preventDefault();
            //console.log(contact.serialize());
            //fullName.value = "";
            //contactNumber.value = "";
            //emailAddress.value = "";
        //});
    }
    function displayContactList()
    {

      if(localStorage.length > 0)
      {
        let contactList = document.getElementById("contactList");

        let data = "";

        for (let index = 0; index < localStorage.length; index++)
        {
          let contactData = localStorage.getItem((index + 1).toString());

          console.log(contactData);

          let contact = new core.Contact();
          contact.deserialize(contactData);

          data += `<tr>
                  <th scope="row">${index + 1}</th>
                  <td>${contact.FullName}</td>
                  <td>${contact.ContactNumber}</td>
                  <td>${contact.EmailAddress}</td>
                  <td><button class="text-center btn btn-primary btn-sm" id=""><i class="fas fa-sm fa-edit"></i> Edit</button></td>
                  <td><button class="text-center btn btn-warning btn-sm"><i class="fas fa-sm fa-trash-alt"></i> Delete</button></td>
                  </tr>`;
        }

        contactList.innerHTML = data;
      }


    }

    function Start()
    {
        console.log("App Started...");

        switch (document.title) 
        {
          case "Home":
              displayHome();
            break;
          case "About":
              displayAbout();
            break;
          case "Projects":
              displayProjects();
            break;
          case "Services":
              displayServices();
            break;
          case "Contact":
              displayContact();
            break;
          case "Contact-List":
              displayContactList();
            break;
        }
        
    }

    window.addEventListener("load", Start);

    core.Start = Start;


})  (core || (core={}));