<template>
  <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
  <div id="uppernav">
    <router-link to="/">HOME</router-link> |
    <router-link to="/login">LOGIN</router-link> |
    <router-link to="/joinus">JOIN US</router-link> |
    <router-link to="/cart">CART</router-link> |
    <router-link to="/mypage">MYPAGE</router-link>
  </div>

  <div id= "searchbar">
    <input type="text" placeholder="상품을 검색하세요">
       <button><i class="fas fa-search"></i></button>    
  </div>

  <router-view/>
</template>

<style lang="scss">

@font-face { 
  font-family: 'Cafe24Danjunghae';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Cafe24Danjunghae.woff') format('woff'); 
  font-weight: normal; font-style: normal; 
}
#app {
  font-family:'Cafe24Danjunghae';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #503F33;
}

#uppernav {
  padding: 10px;
  display:flex;
  justify-content:flex-end;
  
  a {
    font-weight: bold;
    color: #503F33;
    text-decoration: none;
    margin-right:10px;
    margin-left:10px;
    font-size: 13px;

    &.router-link-exact-active {
      color: #DAC69C;
      text-shadow: -1px 0 #503F33,0 1px #503F33, 1px 0#503F33 , 0 -1px #503F33; 
    }    
  }
}

#searchbar {
  padding: 2px;
  display:flex;
  justify-content:flex-end;
  margin-right:20px;

  input { 
    font-family:'Cafe24Danjunghae';
    height: 20px;
    width: 250px;
    border: 1px solid #503F33;
    padding:5px;
    border-radius: 5px 0px 0px 5px;
  }

  button {
    width:30px;
    background-color:#503F33 ;
    color:#DAC69C;
    border-radius: 0px 5px 5px 0px;
    border:none;
  }
}
</style>
