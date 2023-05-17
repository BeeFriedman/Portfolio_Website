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
        errors: []
      }
    },
    methods: {
        formSubmission() {
            this.errors = [];
            
            if(this.firstName && this.lastName && this.email && this.message) {
                let contactForm = {
                    Name: this.fullName,
                    email: this.email,
                    message: this.message
                }
                    this.$emit('contact-submitted', contactForm)
                    this.firstName = null,
                    this.lastName = null,
                    this.email =null,
                    this.message= null
            }
            else {
                if(!this.firstName) this.errors.push("Enter First Name.")
                if(!this.lastName) this.errors.push("Enter Last Name.")
                if(!this.email) this.errors.push("Enter Email Address.")
                if(!this.message) this.errors.push("Enter message")
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
    data: {
    },
    methods: {
        sendForm(contactForm) {
            console.log(contactForm)
            //TO-DO acctualy send email to from user.
        }
    }
})