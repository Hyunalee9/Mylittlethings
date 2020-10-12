<template>
<link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
  <div id="title_two">
     <router-link to="/">My little Things</router-link>
  </div>
  <hr width =100% color=#EEEDDB align="center" size=3/>
  
  <div id="mainbox"> 
    <div id="sidebar">
        <h1>LIVING </h1>
        <router-link to="/living">CUP</router-link> 
        <router-link to="/plate">Plate <i class="fas fa-cloud"></i></router-link> 
        <h1>STATIONARY</h1> 
        <router-link to="/stationary">NOTE</router-link> 
        <router-link to="/sticker">STICKER</router-link> 
    </div>
    <div id="product-section">   
    </div>  
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
    height:650px;
    padding:50px;
    background-color:#EEEDDB;
    text-align:center;
    border-radius: 30px 30px 30px 30px;
    box-sizing:border-box;   
    display: flex;    
}

#sidebar{
    width: 20%;
    height:540px;
    padding:10px;
    text-align:left;
    border: 2px solid #CABFB3;
    border-block-end-color: #EEEDDB;
    border-block-start-color: #EEEDDB;
    border-inline-start-color:#EEEDDB ;
    box-sizing:border-box;
  
   a{
     display: block;
     text-decoration: none;
     color:#503F33;
     margin-block-start: 30px;
     font-size:20px;  
     
    i{
      color:#C5CACD
    } 
   }

}
#product-section{
  width: 80%;
    height:540px;
    padding:10px;
    text-align:left;
    border: 2px solid #EEEDDB;
    border-block-end-color: #EEEDDB;
    border-block-start-color: #EEEDDB;
    border-inline-start-color:#EEEDDB ;
    box-sizing:border-box;
}
</style>