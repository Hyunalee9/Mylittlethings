<template>
  <div id="title">
     <router-link to="/">My little Things</router-link>
  </div>
  <div id="middlenav">
    <router-link to="/living">LIVING</router-link> 
    <router-link to="/stationary">STATIONARY</router-link> 
  </div>  
     <hr width =100% color=#EEEDDB align="center" size=3/>
  
  <div id="mainbox">
    <div>
     <img id= "image" src="http://127.0.0.1:8000/image/Hot.jpg">
    </div> 
    <p> 당신의 작은 즐거움 , My little things </p>
  </div>
  <router-view/>
</template>

<style scoped lang="scss">
#middlenav{
  padding: 3px;
  display:flex;
  justify-content:flex-start;
  margin-left:30px;

  a {
    font-weight: 10;
    color: #503F33;
    text-decoration: none;
    margin-right:10px;
    margin-left:10px;
    font-size:23px;   
  }
}
#mainbox{
    width: 100%;
    padding:5%;
    background-color:#EEEDDB;
    text-align:center;
    border-radius: 30px 30px 30px 30px;
    box-sizing:border-box;  
}

@font-face{
    font-family: 'Puzzled';
    src:url('C:/Users/john/AppData/Local/Microsoft/Windows/Fonts/Puzzled-Regular.otf');
}    

#title{  

   a {
        font-family: 'Puzzled';
        font-size:7rem;
        color:#EEEDDB; 
        font-weight: 20;
        text-decoration: none;
   }
}

#image{
  height:30%;
  width:30%;
   box-sizing:border-box; 
}

.p{
  margin:5px;
}

</style>

   
   


