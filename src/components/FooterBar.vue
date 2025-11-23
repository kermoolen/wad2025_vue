<script>
export default {
  name: 'FooterBar',
  data(){
    return { year: new Date().getFullYear() }
  },

}
</script>

<template>
  <footer>
    <p id="footer-p">© {{ year }} Group Z</p>
  </footer>
</template>

<style scoped>
footer {
  background: #e0e0e0;
  border-radius: 18px;
  padding: 24px;
  width: 100%;
  box-sizing: border-box;
  margin-top: 24px;
  text-align: center;
}

#footer-p {
  margin: 0;
  font-size: 1.5em;
}
</style>