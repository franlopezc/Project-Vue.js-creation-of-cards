<template>
    <div class="navbar">
  <nav class="indigo darken-2">
    <div class="nav-wrapper ">
      <router-link :to="{ name: 'Index' }">
      <a href="#" class="brand-logo left">Ninja Smothies</a>
      </router-link>
      <a class="btn-floating btn-large halfway-fab waves-effect waves-light pink">
          <router-link :to="{ name: 'AddSmoothie' }">
        <i class="material-icons">add</i>
          </router-link>
          </a>
    </div>
  </nav>
        
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data(){
        return{

        }
    }
}
</script>

<style>
.navbar nav{
    padding: 0 20px;
}

</style>

