<script>
import {computed, ref, watch} from "vue";

export default {
  name: "SignUpView",
  setup(){
    const email = ref('');
    const password = ref('');
    const passwordTouched = ref(false);

    //if password field is edited, validate password again
    watch(password, () => {passwordTouched.value = true});

    function validatePassword(pw) {
      const message = []
      if (pw.length < 8 || pw.length >= 15) {
        message.push("Password must be at least 8 characters and less than 15 characters long");
      }
      if (!/^[A-Z]/.test(pw)) {
        message.push("Password must start with an uppercase letter")
      }
      
      //we must check this condition but it is technically redundant, as password needs to start with uppercase character
      if (!/[A-Z]/.test(pw)) {
        message.push("Password must include at least one uppercase letter")
      }
      if ((pw.match(/[a-z]/g) || []).length < 2) {
        message.push("Password must include at least two lowercase letters")
      }
      if (!/\d/.test(pw)) {
        message.push("Password must include at least one number")
      }
      if (!/_/.test(pw)) {
        message.push('Password must include the character "_"')
      }
      return message
    }

    const validationMessages = computed(() => validatePassword(password.value));
    const isValidPassword = computed(() => {
  return validationMessages.value.length === 0 && passwordTouched.value;
});

    function onSubmit() {
      passwordTouched.value = true;
      if(isValidPassword.value === false) {
        return alert("Please make sure your password meets the requirements")
      }
      alert('Account created.')
      email.value = ''
      password.value = ''
      passwordTouched.value = false
    }
    return {email,password,passwordTouched,validationMessages,isValidPassword,onSubmit}
  }
}
</script>

<template>
  <div>
    <main class="container signup-view">
      <form class="signup-form" @submit.prevent="onSubmit">
        <label>
          Email
          <input type="email" v-model="email" required />
        </label>

        <label>
          Password
          <input type="password" v-model="password" required />
        </label>

        <div class="password-validation" v-if="passwordTouched">
          <div v-if="isValidPassword" class="password-valid">
            Password is valid
          </div>
          <div v-else class="invalid-feedback">
            <strong>Password does not meet the requirements:</strong>
            <ul>
              <li v-for="(m,i) in validationMessages" :key="i">{{ m }}</li>
            </ul>
          </div>
        </div>
        <button type="submit">Signup</button>
      </form>
    </main>
  </div>
</template>

<style scoped>

</style>