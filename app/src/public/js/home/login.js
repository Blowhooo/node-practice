"use strict";

const id = document.querySelector("#id"),
      password = document.querySelector("#password"),
      loginBtn = document.querySelector("#button");

      console.log(id);
      console.log("Hello");

      loginBtn.addEventListener('click', login)

      function login(){
        const req = {
          id : id.value,
          password : password.value,
        }
      }