<template>
  <div id="title_two">
     <router-link to="/">My little Things</router-link>
  </div>
  <hr width =100% color=#EEEDDB align="center" size=3/>
  
  <div id="mainbox">
    <h1> 회원가입 </h1>
    <hr width =100% color=#503F33 align="center" size=2/>
     <form action="" id="join-form-one">  
     <ul class="join-box-one">
      <li class="one">
        <ul class="clearfix">
          <li class="all">
            <input type="checkbox" id="check-all" v-model="checked">
          </li>   
          <li>이용약관, 개인정보 수집 및 이용,프로모션 정보 수신(선택)에 모두 동의합니다.</li>
        </ul> 
      </li>
      <li class="two">
          <ul class="clearfix">
            <li class="part">
               <input type="checkbox"  name="check" v-model="checked"> 
            </li>
            <li>이용약관 동의 (필수)</li>
          </ul>
          <textarea name="" id=""> My little things를 이용해주셔서 감사합니다. 
          저희 사이트의 서비스 및 제품(이하 '서비스')을 이용해 주셔서 감사합니다. 
          본 약관은 다양한 서비스의 이용과 관련하여 해당 서비스를 제공하는 My little things와 이를 이용하는
          회원 또는 비회원과의 관계를 설명하며, 아울러 여러분의 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 
          있습니다.
          </textarea>
      </li>                     
      <li class="three">
        <ul class="clearfix">
          <li class="part">
            <input type="checkbox"  name="cc" v-model="checked">  
          </li>
          <li> 개인정보 수집 및 이용 동의 (필수) </li>
        </ul>
        <textarea name="" id=""> My little things를 이용해주셔서 감사합니다. 
          저희 사이트의 서비스 및 제품(이하 '서비스')을 이용해 주셔서 감사합니다.
          본 약관은 다양한 서비스의 이용과 관련하여 해당 서비스를 제공하는 My little things와 이를 이용하는
          회원 또는 비회원과의 관계를 설명하며, 아울러 여러분의 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 
          있습니다.
        </textarea>
      </li> 
      <li class="four">
        <ul class="clearfix">
          <li class="part">
            <input type="checkbox" name="cc" v-model="checked">
          </li>
          <li>프로모션 정보 수신 동의(선택)</li>
        </ul>
      </li> 
     </ul>
     <ul class="fbutton">
       <li><router-link to="/joinus_two"><button class="button"> 확인 </button></router-link> </li>
       <li> <button style="background-color:#A98866;" class="button">  취소  </button></li>
       <router-view/>
     </ul>
    </form>        
    
   
  </div>     
</template>

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
    padding:30px;
    background-color:#EEEDDB;
    text-align:left;
    border-radius: 30px 30px 30px 30px;
    box-sizing:border-box;       
}
@font-face { 
  font-family: 'Cafe24Danjunghae';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Cafe24Danjunghae.woff') format('woff'); 
  font-weight: normal; font-style: normal; 
}

#join-form-one{
  width:100%;
  font-weight:bold;
  ul>li{list-style:none;}
  font-size:18px;
  margin:3px; 

  textarea{
    margin-left:50px;
    width:550px;
    height:55px;
  } 
}

.clearfix{
  display: flex;
  margin:3px;
}

.button{
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

.fbutton{
  display: flex;
  margin-left:45px;
}

</style>