// LOGIN COMPONENT

'use strict';


Vue.component('login', {
  template: `
              <form class="login-form middle">
                <h2>WELCOME</h2>
                <input v-on:click="focus" type="text" id="username" placeholder="Username">
                <input v-on:click="scream" type="password" id="password" placeholder="Password">
                <input v-on:click="checkpass" type="submit" value="SIGN IN" class="btn success">
                <a v-on:click="showpass" href="#" class="forgot-link">Forgot Password?</a>
              </form>
            `,
  methods: {
    checkpass: function() {
      event.preventDefault();

      var pass = document.getElementById('password').value; 
      var user = document.getElementById('username').value; 

      if(user === 'andrew' && pass === '123456') {
        alert('Username and password correct!');

        window.location = "./dashboard.html";
        
      } else {
        alert(' INCORRECT || username = andrew / password = 123456');
      }
    },
    
    focus: function() {
      var input = document.getElementById('username');
      
      input.style.borderColor = "rgb(143,117,44)";
      
    },
    scream: function() {
        alert("please enter password");
      
    },
    showpass: function(){
      alert('username = andrew / password = 123456');
    }
  }
});



var login = new Vue({
  el: '#login'
});
