<template lang="html">
<div class="outer-container">
    <div class="inner-container" :class="$mq">
        <!-- content -->
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
        <!-- form -->
        <form id="form" class="form" action="https://formspree.io/f/xqkwajjr" method="POST" @submit.prevent="handleSubmit">
            <div class="form-inputs">
                <div class="form-input" :class="$mq">
                    <label class="label" :class="$mq" for="name">Name*</label>
                    <input @input="handleInput" v-model="form.name" class="input" :class="$mq" type="text" name="name" required />
                    <p class="p tiny" v-if="$mq === 'desktop'">*required</p>
                </div>
                <div class="form-input" :class="$mq">
                    <label class="label" :class="$mq" for="company">Company</label>
                    <input @input="handleInput" v-model="form.company" class="input" :class="$mq" type="text" name="company" />
                    <p class="p tiny" v-if="$mq === 'desktop'">*optional</p>
                </div>
                <div class="form-input" :class="$mq">
                    <label class="label" :class="$mq" for="_replyto">Email*</label>
                    <input @input="handleInput" v-model="form._replyto" class="input" :class="$mq" type="email" name="_replyto" required />
                    <p class="p tiny" v-if="$mq === 'desktop'">*required</p>
                </div>
                <div class="form-input" :class="$mq">
                    <label class="label" :class="$mq" for="message">Message*</label>
                    <textarea @input="handleInput" v-model="form.message" class="textarea" :class="$mq" name="message" required />
                    <p class="p tiny" v-if="$mq === 'desktop'">*required</p>
                </div>
                <button class="button" id="submit" type="submit">{{ submitText }}</button>
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
                        // do nothing
                    })
                    .catch(function(err) {
                        console.error(err);
                    });
            // reset form fields
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
/* positioning of form items */
.form-inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form-input {
    display: flex;
    align-items: center;
}

.form-input.mobile {
    flex-direction: column;
}

/* position container & children - display: flex applied in global scope */
.inner-container {
    align-items: center;
}

.inner-container.desktop {
    margin-top: 2rem;
}

.inner-container.mobile {
    margin-top: 1rem;
}

/* style and position inputs and labels */
.input, .textarea {
    padding: 0.25rem;
    border: 1px solid hsl(0, 0%, 0%);
    margin: 0.5rem;
    background-color: hsl(0, 0%, 77%);
    width: 20rem;
    word-spacing: 0.25rem;
}

.input {
    height: 1.25rem;
}

.textarea {
    height: 6rem;
}

.label.desktop {
    width: 10rem;
    text-align: right;
}

.p.tiny {
    width: 10rem;
    text-align: left;
    height: 1.25rem;
    border: 1px solid hsla(0, 0%, 0%, 0);
    margin: 0.5rem;
    padding: 0.25rem;
    font-size: 0.75rem;
    vertical-align: middle;
}

/* button style and position */
.button {
    width: 10.5rem;
    height: 1.75rem;
    padding: 0.25rem;
    align-self: center;
}

/* content position and styling */
.p {
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
</style>
