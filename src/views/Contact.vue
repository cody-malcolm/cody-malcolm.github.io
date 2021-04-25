<template lang="html">
<div class="outer-container">
    <div class="inner-container" :class="$mq">
        <div class="contact-info">
            <p class="p" :class="$mq">Thank you for your interest!</p>
            <p class="p" :class="$mq">
                To get in touch,<br />please use the form below<br /> or connect on
                <a  href="https://www.linkedin.com/in/cody-malcolm/"
                    class="a" :class="$mq"
                    target="_blank">
                    LinkedIn</a>.
            </p>
        </div>
        <mq-layout mq="desktop">
            <form id="form" class="form" action="https://formspree.io/f/xqkwajjr" method="POST" @submit.prevent="handleSubmit">
                <div class="form-inputs">
                    <div class="form-column labels">
                        <label class="label" :class="$mq" for="name">Name:</label>
                        <label class="label" :class="$mq" for="company">Company:</label>
                        <label class="label" :class="$mq" for="_replyto">Email:</label>
                        <label class="label" :class="$mq" for="message">Message:</label>
                    </div>
                    <div class="form-column inputs">
                        <input @input="handleInput" v-model="form.name" class="input" type="text" name="name" required />
                        <input @input="handleInput" v-model="form.company" class="input" type="text" name="company" />
                        <input @input="handleInput" v-model="form._replyto" class="input" type="email" name="_replyto" required />
                        <textarea @input="handleInput" v-model="form.message" class="input textarea" name="message" required />
                        <button class="button" id="submit" type="submit">{{ submitText }}</button>
                    </div>
                    <div class="form-column required">
                        <p class="tiny">*required</p>
                        <p class="tiny">*optional</p>
                        <p class="tiny">*required</p>
                        <p class="tiny">*required</p>
                    </div>
                </div>
            </form>
        </mq-layout>
        <mq-layout mq="mobile">
            <form id="form" class="form" action="https://formspree.io/f/xqkwajjr" method="POST" @submit.prevent="handleSubmit">
                <div class="form-inputs" :class="$mq">
                    <label class="label" :class="$mq" for="name">Name*</label>
                    <input @input="handleInput" v-model="form.name" class="input mobile" type="text" name="name" required />
                    <label class="label" :class="$mq" for="company">Company</label>
                    <input @input="handleInput" v-model="form.company" class="input mobile" type="text" name="company" />
                    <label class="label" :class="$mq" for="_replyto">Email*</label>
                    <input @input="handleInput" v-model="form._replyto" class="input mobile" type="email" name="_replyto" required />
                    <label class="label" :class="$mq" for="message">Message*</label>
                    <textarea @input="handleInput" v-model="form.message" class="input textarea" name="message" required />
                    <button class="button" id="submit" type="submit">{{ submitText }}</button>
                </div>
            </form>
        </mq-layout>
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
/* .outer-container {
    width: 100%;
    display: flex;
    justify-content: center;
}

.inner-container {
    width: 60%;
    display: flex;
    flex-direction: column;
} */

.inner-container.desktop {
    padding-top: 2rem;
}

.inner-container.mobile {
    padding-top: 0.5rem;
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

.form-inputs.mobile {
    flex-direction: column;
    align-items: center;
}

.form-column {
    display: flex;
    flex-direction: column;
}

.label.desktop {
    border: 1px solid hsla(0, 0%, 0%, 0);
    margin: 0.5rem;
    padding: 0.25rem;
    font-size: 1.25rem;
    height: 1.25rem;
    vertical-align: middle;
}

.label.mobile {
    font-size: 1rem;
}

.labels {
    align-items: flex-end;
}

.input {
    height: 1.25rem;
    padding: 0.25rem;
    border: 1px solid hsl(0, 0%, 0%);
    margin: 0.5rem 0;
    background-color: hsl(0, 0%, 77%);
}

.input.mobile {
    width: 100%;
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
}

.p {
    /* was 0.5rem spacing */
    text-align: center;
}

.p.desktop {
    font-size: 1.75rem;
    margin: 0 0 2rem;
}

.p.mobile {
    font-size: 1.25rem;
    margin: 0 0 1rem;
}
/*
.a {
    color: hsl(0, 0%, 55%);
    text-decoration: none;
} */

.tiny {
    color: hsl(0, 0%, 70%);
    font-family: "Manifold Extended";
    height: 1.25rem;
    border: 1px solid hsla(0, 0%, 0%, 0);
    margin: 0.5rem;
    padding: 0.25rem;
    font-size: 0.75rem;
    vertical-align: middle;
}

</style>
