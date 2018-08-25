<template>
    <div class="section get-help">
        <div class="container">
          <img src="../assets/images/register.png">
        <h3 class="section-heading caveat"> {{showInvite}}</h3>
        <p class="section-description">с огромной радостью приглашаем вас на нашу свадьбу. Мы очень хотим провести этот незабываемый день вместе с вами.</p>
        </div>
    </div>
</template>
<script>
import json from '../assets/csv.json'

export default {
  name: 'Invite',
  data (){
    return {
      invite: '',
      myJson: json,
      boom: []
    }
  },
  computed: {
    showInvite: function() {
      var data = this.myJson;
      var object = data.filter(d => d.code === this.invite);
      return object[0].namerus;
    }
  },
  created()
  {
    //let uri = window.location.search.substring(1); 
    //let params = new URLSearchParams(uri);
    //this.invite = params.get("invite");
    var myParam = location.search.split('invite=')[1] ? location.search.split('invite=')[1] : 'default-code';
    this.invite = myParam;
  },
  updated(){
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .caveat {
    font-size: 4em;
    line-height: 1.6;
    font-weight: 400;
    font-family: "Caveat", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
    border-bottom: 1px solid #d9d9d9;
  }
  .get-help p {
    font-size:150%;
  }
    .resto {
    padding: 6rem 0 5rem;
  }
</style>
