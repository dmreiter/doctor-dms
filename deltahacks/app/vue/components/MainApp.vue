<style lang="sass">
  @import "../style/main.scss";
  
  #heading
  {
      position:fixed;
      padding:50px;
      margin:auto;
      
      text-align: center;
  
      top:0;
      left:0;
  
      width: 100%;
      height: 100%;
      background:rgba(255,255,255,0.5);
  }
  
  #content
  {
    
  }
</style>

<template>
<div id="heading">
    <h1>1-2-2 Help Me!</h1>
    <p class="lead">We have found the following medical conditions that your symptoms may be a sign of.</p>
</div>

<div id="content">
  <ul>
    <li v-for="disease in diseases">{{disease.title}}</li>
  </ul>
</div>
<h1>{{name}}</h1>
</template>

<script>
  export default {
    data(){
      return{
        diseases: [
          { // #1
            Title: null, // title
            Description: null, // description
            DescriptionShort: null, // short description
            MedicalCondition: null, // medical condition
            Name: null, // name (?)
            PossibleSymptoms: null, // other possible symptoms
            TreatmentDescription: null // treatment description
          },
          { // #2
            Title: null, // title
            Description: null, // description
            DescriptionShort: null, // short description
            MedicalCondition: null, // medical condition
            Name: null, // name (?)
            PossibleSymptoms: null, // other possible symptoms
            TreatmentDescription: null // treatment description
          },
          { // #3
            Title: null, // title
            Description: null, // description
            DescriptionShort: null, // short description
            MedicalCondition: null, // medical condition
            Name: null, // name (?)
            PossibleSymptoms: null, // other possible symptoms
            TreatmentDescription: null // treatment description
          },
          { // #4
            Title: null, // title
            Description: null, // description
            DescriptionShort: null, // short description
            MedicalCondition: null, // medical condition
            Name: null, // name (?)
            PossibleSymptoms: null, // other possible symptoms
            TreatmentDescription: null // treatment description
          },
          { // #3
            Title: null, // title
            Description: null, // description
            DescriptionShort: null, // short description
            MedicalCondition: null, // medical condition
            Name: null, // name (?)
            PossibleSymptoms: null, // other possible symptoms
            TreatmentDescription: null // treatment description
          }
        ]
      }
    }
  }  
</script>
