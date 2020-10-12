<template>
  <div id="title_two">
     <router-link to="/">My little Things</router-link>
  </div>
  <hr width =100% color=#EEEDDB align="center" size=3/>
  
  <div id="mainbox">
    <h1> 로그인 </h1>
    <hr width =350px color=#503F33 align="center" size=2/>

    <form name="LOGINform" @submit.prevent="onSubmit(id,password)">
      <div id="idandpassword">
      <input type="text" v-model="name" placeholder="ID" autocomplete="off" required> 
      <p v-if="errorBag.name">{{errorBag.name[0]}}</p>
      <input type="password" v-model="password" placeholder="PASSWORD" autocomplete="off" required>
      </div>

     <div id="check"> 
      <input type="checkbox" id="c1" name="cc" /> 
      <label for="c1"> 아이디 기억하기 </label>
     </div>

     <div id="find">
      <router-link to="/findid">아이디</router-link> /
      <router-link to="/findpassword">비밀번호찾기</router-link> 
      <router-view/>
     </div>

      <button type="submit" id="button"> LOGIN  </button>
       <router-link to="/joinus"><button type="button" id="button"> JOIN US</button></router-link>
       <router-view/>   
    </form>
     <hr width =350px color=#503F33 align="center" size=2/>
    <p><i>{{msg}}</i></p>  
  </div>
</template>

<script>
export default {
  name:'Login',
  data(){
    return{
      main:[]
    }
  },
  
async created(){
    var response = await fetch('http://127.0.0.1:8000/api/main/')
    this.main=await response.json();
  }
}
</script>

<style scoped lang="scss">
@font-face{
    font-family: 'Puzzled';
    src:url('C:/Users/john/AppData/Local/Microsoft/Windows/Fonts/Puzzled-Regular.otf');
}    
#title_two { 
  padding: 3px;
  display:flex;
  justify-content:flex-start;
  margin-left:30px;
 
     a {
        font-family: 'Puzzled';
        font-size:5rem;
        color:#EEEDDB; 
        font-weight: 20;
        text-decoration: none;
   }
}
#mainbox{
    width: 100%;
    height:560px;
    padding:100px;
    background-color:#EEEDDB;
    text-align:center;
    border-radius: 30px 30px 30px 30px;
    box-sizing:border-box;       
}
#idandpassword{
   input{
      display:block;
      margin-left: 575px;
      margin-block-start: 5px;
      height:40px;
      width:304px;
   }
    }

@font-face { 
  font-family: 'Cafe24Danjunghae';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Cafe24Danjunghae.woff') format('woff'); 
  font-weight: normal; font-style: normal; 
}
#button{
  margin:5px;
  width:150px;
  padding:15px;
  margin-right:5px;
  background-color: #503F33;
  font-family:'Cafe24Danjunghae';
  font-size:20px;
  color:#EEEDDB;
  border:none;
}

#check{
   font-size:15px;
   margin:5px;
   display: flex;
   margin-left:575px;
     input{
       size:15px;
     }
}

#find{
  margin-right:169px;
  a{
    text-decoration: none;
    color:#503F33;
    font-size:15px;
  }
}
</style>