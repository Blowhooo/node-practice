"use strict";

class UserStorage{
  static #users = {
    id : ["test", "test2", "윤준후"],
    password : ["1234", "1234", "123456"],
    name: ["윤준후", "윤팀장", "윤대리"]
  };

  static getUsers(...fields){
    const users = this.#users; 
    const newUsers = fields.reduce((newUsers, field) => {
      if(users.hasOwnProperty(field)){
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
};

module.exports = UserStorage