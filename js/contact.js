Vue.component('contact-form', {
    template: `
        <form :class="errors.length > 0 ? 'error' : 'contactForm'" @submit.prevent="formSubmission">
        <p>
            <label for="firstName">First Name:</label>
            <input id="firstName" v-model="firstName">
        </p>
        <p>
            <label for="lastName">Last Name:</label>
            <input id="lastName" v-model="lastName">
        </p>  

        <p>
            <label for="email">Email Address:</label>
            <input id="email" v-model="email">
        </p>  
        
        <p>
            <label for="age">Age:</label>
            <input id="age" v-model="age">
        </p>  

        <p>
            <label>Date Of Birth</label>
            <input type="text" id="datepicker">
        </p>
        
        <p>
            <label for="message">Message:</label>      
            <textarea id="message" v-model="message"></textarea>
        </p>
            
        <p>
            <input id="send" type="submit" value="Send">  
        </p>    
        <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
                <li v-for="error in errors">{{ error }}</li>
            </ul>
        </p>        
        </form>
    `,
    data() {
      return {
        firstName: null,
        lastName: null,
        email: null,
        age: null,
        message: null,
        errors: [],
        isValid : true
      }
    },
    methods: {
        formSubmission() {
            this.errors = [];

            if(!this.firstName) {
                this.errors.push("Enter First Name.")
                this.isValid = false;
            } else if(!/^[A-Za-z\s]+$/.test(this.firstName)) {
                this.errors.push("Enter a valid first name.")
                this.isValid = false;
            }
            if(!this.lastName) {
                this.errors.push("Enter Last Name.")
                this.isValid = false;
            } else if(!/^[A-Za-z\s]+$/.test(this.lastName)) {
                this.errors.push("Enter a valid last name.")
                this.isValid = false;
            }
            if(!this.email) {
                this.errors.push("Enter Email Address.")
                this.isValid = false;
            } else if(!/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/.test(this.email)) {
                this.errors.push("Enter a vaild email address.")
                this.isValid = false;
            }
            if(!this.age) {
                this.errors.push("Enter age.")
                this.isValid = false;
            } else if(!/^[0-9]+$/.test(this.age)) {
                this.errors.push("Enter a numberic value.")
                this.isValid = false;
            }
            if(!this.message) {
                this.errors.push("Enter message")
                this.isValid = false;
            }
            
            if(this.isValid) {
                let contactForm = {
                    Name: this.fullName,
                    email: this.email,
                    age: this.age,
                    message: this.message
                }
                    this.$emit('contact-submitted', contactForm)
                    this.firstName = null,
                    this.lastName = null,
                    this.email =null,
                    this.age = null,
                    this.message= null
            }
        }
    },
    computed: {
        fullName() {
            return this.firstName + " " + this.lastName;
        }
    }
  })

var app = new Vue({
    el: '#app',
    methods: {
        sendForm(contactForm) {
            alert("Successfully submitted, please make sure that contact info is right." + "\n" +
            contactForm.Name + "\n" + contactForm.email + "\n" + contactForm.age);
        },
        dateSetup() {
            $("#datepicker").datepicker();
        }
    },
    mounted() {
        this.dateSetup();
          // Get the current page URL
        var currentURL = window.location.href;

        // Iterate over each navigation link
        $('.navbar-nav .nav-link').each(function() {
            // Get the link's URL
            var linkURL = $(this).attr('href');

            // Check if the link's URL matches the current page URL
			if (currentURL === 'https://beefriedman.com/' && linkURL === 'index.html') {
				$(this).addClass('active');
			}			
			else if (currentURL.includes(linkURL)) {
            // Add the 'active' class to the link
            $(this).addClass('active');
            }
        });
    }
})