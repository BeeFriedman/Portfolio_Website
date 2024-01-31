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
            if(!this.message) {
                this.errors.push("Enter message")
                this.isValid = false;
            }
            
            let contactForm = {
                Name: this.fullName,
                email: this.email,
                message: this.message
            }
            if(this.isValid) {

                const formData = new FormData();
                formData.append('firstName', this.firstName);
                formData.append('lastName', this.lastName);
                formData.append('email', this.email);
                formData.append('message', this.message);
                
                fetch('https://formspree.io/f/xqkrpzln', {
                    method: 'POST',
                    body: formData,
                    headers: {
                    'Accept': 'application/json'
                    }
                })
                .then(response => {
                    if (response.ok) {
                        sendForm(contactForm)
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            }
            this.$emit('contact-submitted', contactForm)
            this.firstName = null,
            this.lastName = null,
            this.email = null,
            this.message= null
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
    },
    mounted() {
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