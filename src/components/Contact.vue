// Created thanks to John Komarnicki https://www.youtube.com/watch?v=u2AwJAFeaKc

<template>
  <ContactModal
    :displayed = displayModal
    @toggleModal="toggleModal"
  />
  <section id="contact" class="section contact">
    <h2>Skontaktuj się z nami</h2>
    <form class="contact-form">
      <div class="flex-row">
        <input v-model="firstName" type="search" class="first-name" placeholder="Twoje imię">
        <input v-model="email" type="search" class="email-adress" placeholder="Twój adres email">
      </div>
      <input v-model="subject" type="search" class="subject" placeholder="Tytuł">
      <textarea v-model="message" class="message" placeholder="Wiadomość"></textarea>
      <div class="btn" @click="submitForm">Wyślij wiadomość</div>
    </form>
  </section>
</template>

<script lang="ts">
import ContactModal from './ContactModal.vue';
import db from '../firebase/init.js'
import { addDoc, collection } from 'firebase/firestore';

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default {
  name: 'Contact',
  components: { ContactModal },
  emits: ['toggleModal'],
  data(): any {
    return {
      displayModal: false,
      firstName: '',
      email: '',
      subject: '',
      message: ''
    }
  },
  methods: {
    toggleModal() {
      this.displayModal = !this.displayModal
    },
    async submitForm() {
      if (this.firstName === '' || this.subject === '' || this.message === '') return;
      if (!this.email.match(emailRegex))  return
      this.createContact(this.firstName, this.email, this.subject, this.message)
      this.toggleModal();
      this.firstName = '';
      this.email = '';
      this.subject = '';
      this.message = '';
    },
    async createContact(name: string, email: string, subject: string, message: string) {
      const colRef = collection(db, 'gd-testing')
      const dataObj = {
        name: name,
        email: email,
        subject: subject,
        message: message
      }
      await addDoc(colRef, dataObj);
    }
  }
}
</script>

<style lang="scss" scoped>

.contact {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  // width: 100%;
  max-width: 700px;

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    padding: 15px;

    .flex-row {
      justify-content: space-between;
      flex-direction: column;
      gap: 15px;
      .first-name {
        width: 100%;
      }
      @media (min-width: 700px) {
        flex-direction: row;
        gap: 50px;
        .first-name {
          width: 40%;
        }
      }
    }

    input,
    textarea {
      width: 100%;
      padding: 8px;
      border-radius: 8px;
      border: 1px solid #ced4da;
      font-size: 18px;

      &:focus {
        outline: none;
      }
    }

    textarea {
      resize: none;
      min-height: 150px;
    }

    .btn {
      display: flex;
      justify-content: center;
      max-width: fit-content;
    }
  }
}

</style>
