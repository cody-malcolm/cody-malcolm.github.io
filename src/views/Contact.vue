<template lang="html">
<div class="outer-container">
    <div class="inner-container">
        <div class="contact-info">
            <p class="p">Thank you for your interest!</p>
            <p class="p">
                To get in touch,<br />please use the form below<br /> or connect on
                <a  href="https://www.linkedin.com/in/cody-malcolm/"
                    class="a"
                    target="_blank">
                    LinkedIn</a>.
            </p>
        </div>
        <form id="form" class="form" action="https://formspree.io/f/xqkwajjr" method="POST" @submit.prevent="handleSubmit">
            <div class="form-inputs">
                <div class="form-column labels">
                    <label class="label" for="name">Name:</label>
                    <label class="label" for="company">Company:</label>
                    <label class="label" for="_replyto">Email:</label>
                    <label class="label" for="message">Message:</label>
                </div>
                <div class="form-column inputs">
                    <input @input="handleInput" v-model="form.name" class="input" type="text" name="name" required />
                    <input @input="handleInput" v-model="form.company" class="input" type="text" name="company" />
                    <input @input="handleInput" v-model="form._replyto" class="input" type="email" name="_replyto" required />
                    <textarea @input="handleInput" v-model="form.message" class="input textarea" name="message" required />
                    <button class="button" id="submit" type="submit">{{ submitText }}</button>
                </div>
                <div class="form-column required">
                    <p class="small">*required</p>
                    <p class="small">*optional</p>
                    <p class="small">*required</p>
                    <p class="small">*required</p>
                </div>
            </div>
        </form>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            form: {
                name: '',
                company: '',
                _replyto: '',
                message: ''
            },
            submitText: 'Send'
        }
    },
    methods: {
        handleSubmit() {
            axios   .post('https://formspree.io/f/xqkwajjr', this.form)
                    .then(function() {

                    })
                    .catch(function(err) {
                        console.error(err);
                    });

            this.form.name = '';
            this.form.company = '';
            this.form._replyto = '';
            this.form.message = '';
            this.submitText = 'Sent!';
        },
        handleInput() {
            this.submitText = 'Send';
        }
    }
}

</script>

<style lang="css" scoped>
.outer-container {
    width: 100%;
    display: flex;
    justify-content: center;
}

.inner-container {
    width: 60%;
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
}

.form, .contact-info {
    display: flex;
    flex-direction: column;
    align-items: center;
}


.form-inputs {
    display: flex;
    justify-content: center;
}

.form-column {
    display: flex;
    flex-direction: column;
}

.label {
    color: hsl(0, 0%, 70%);
    font-family: "Manifold Extended";
    height: 1.75rem;
    border: 1px solid hsla(0, 0%, 0%, 0);
    margin: 0.5rem;
    padding: 0.25rem;
    font-size: 1.25rem;
    vertical-align: middle;
}

.labels {
    align-items: flex-end;
}

.input {
    height: 1.75rem;
    padding: 0.25rem;
    border: 1px solid hsl(0, 0%, 0%);
    margin: 0.5rem 0;
    outline: none;
    font-family: "Manifold Extended";
    background-color: hsl(0, 0%, 77%);
}

.textarea {
    height: 6rem;
    width: 20rem;
    word-spacing: 0.25rem;
}

.button {
    width: 10.5rem;
    height: 1.75rem;
    padding: 0.25rem;
    align-self: center;
    font-family: "Manifold Extended";
    background-color: hsl(0, 0%, 77%);
    outline: none;
}

.button:hover {
    background-color: hsl(0, 0%, 67%);
}

.p {
    color: hsl(0, 0%, 70%);
    font-family: "Manifold Extended";
    font-size: 1.75rem;
    margin: 0 0 2rem;
    word-spacing: 0.5rem;
    text-align: center;
}

.a {
    color: hsl(0, 0%, 55%);
    text-decoration: none;
}

.small {
    color: hsl(0, 0%, 70%);
    font-family: "Manifold Extended";
    height: 1.75rem;
    border: 1px solid hsla(0, 0%, 0%, 0);
    margin: 0.5rem;
    padding: 0.25rem;
    font-size: 0.75rem;
    vertical-align: middle;
}

</style>
