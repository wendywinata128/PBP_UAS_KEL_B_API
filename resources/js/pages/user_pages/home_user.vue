<template>
  <div>
    <b-carousel
      id="carousel-1"
      background="#ababab"
      img-width="1920"
      img-height="2000"
      style="text-shadow: 1px 1px 2px #333"

    >
      <!-- Text slides with image -->
      <b-carousel-slide img-src="/img/background_home.jpg"></b-carousel-slide>

      <div class="opening m-5">
        <p>
          Miss your mom's cooking?<br />
          <strong>RESTOKU</strong> will serve you the warmness of home-cooked
          meals
        </p>
        <button class="btn_home" @click="orderNow">Order Now</button>
      </div>
    </b-carousel>

    <img class="sosmed" width="300px" src="/img/sosmed.png" alt="" />
  </div>
</template>

<script>
export default {
  name:"home_user",
  methods : {
    orderNow(){
      this.$router.push('/menu');
    }
  }
};
</script>

<style scoped>
.opening {
  font-size: 24px;
  font-weight: 600;
  position: relative;
  color: white;
}
.btn_home {
  color: #fee8cb;
  border-radius: 10px;
  border: 3px solid #faa84b;
  font-size: 20px;
  font-weight: 800;
  padding: 10px 20px;
}

.btn_home:hover {
  background-color: #faa84b;
}

.sosmed {
  position: absolute;
  bottom: 5vh;
  right: 35px ;
}
</style>