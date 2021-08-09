<template>
  <div>
      <div class = "bg">
        <div>
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
      <!-- Text slides with image -->
          <b-carousel-slide class = "firstslide"
            caption="CS SHOP RE-EDITIONS"
            text="Iconic pieces from our computer science's first show"
            
          ><template #img>
              <img
                class="d-block img-fluid w-100"
                
                src="../assets/slide1.jpg"
                alt="image slot"
              >
            </template></b-carousel-slide>

      <!-- Slides with custom text -->
          <b-carousel-slide img-src="../assets/slide2.jpg">
          <template #img>
              <img
                class="d-block img-fluid w-100"
                
                src="../assets/slide2.jpg"
                alt="image slot"
              >
            </template>
            <h1>LET SHOPPING!</h1>
          </b-carousel-slide>

      <!-- Slides with image only -->
          <b-carousel-slide>
          <template #img>
              <img
                class="d-block img-fluid w-100"
                
                src="../assets/slide3.jpg"
                alt="image slot"
              >
            </template></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
          <b-carousel-slide>
            <template #img>
              <img
                class="d-block img-fluid w-100"
                
                src="../assets/slide4.jpg"
                alt="image slot"
              >
            </template>
          </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
          <b-carousel-slide >
            <template #img>
              <img
                class="d-block img-fluid w-100"
                
                src="../assets/slide5.jpg"
                alt="image slot"
              >
            </template>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
              a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
            </p>
          </b-carousel-slide>
        </b-carousel>
  
      </div>
      <footer></footer>
      </div>
       
      <div class = "shop">
        <div class = "gucci">
          <img  src='../assets/shirt1.jpg' >
          <h1 class="name">RED CAT PATCH SHIRT</h1> 
          <h4>1,090 BAHT    :    30POINTS</h4>
          <button>ADD TO SHOPPING BAG</button>
        </div> 

        <div class = "gucci">
          <img  src='../assets/shirt2.jpg' >
          <h1 class="name">BLUE BOXY SHIRT</h1> 
          <h4>1,020 BAHT    :    25POINTS</h4>
          <button>ADD TO SHOPPING BAG</button>
        </div> 

        <div class = "gucci">
          <img  src='../assets/guccishort1.jpg' >
          <h1 class="name">BLACK DUCHESS SHORTS</h1>
          <h4>750 BAHT    :    15POINTS</h4> 
          <button>ADD TO SHOPPING BAG</button>
        </div>

        <div class = "gucci">
          <img  src='../assets/guccishort2.jpg' >
          <h1 class="name">BLUE WOOL SHORTS</h1> 
          <h4>750 BAHT    :    15POINTS</h4>
          <button>ADD TO SHOPPING BAG</button>
        </div> 

        <div class = "gucci">
          <img  src='../assets/shoe1.jpg' >
          <h1 class="name">MICKEY MOUSE SNEAKERS</h1> 
          <h4>3,590 BAHT    :    50POINTS</h4> 
          <button>ADD TO SHOPPING BAG</button>
        </div> 

        <div class = "gucci">
          <img  src='../assets/shoe2.jpg' >
          <h1 class="name">WHITE BOOTS</h1>
          <h4>6,000 BAHT    :    65POINTS</h4> 
          <button>ADD TO SHOPPING BAG</button>
        </div> 

        <div class = "gucci">
          <img  src='../assets/bag1.jpg' >
          <h1 class="name">WHITE G-PORCH WALLET</h1> 
          <h4>10,900 BAHT    :    90POINTS</h4> 
          <button>ADD TO SHOPPING BAG</button>
        </div> 

        <div class = "gucci">
          <img  src='../assets/bag2.jpg' >
          <h1 class="name">BLACK G-PORCH WALLET</h1> 
          <h4>11,000 BAHT    :    90POINTS</h4> 
          <button>ADD TO SHOPPING BAG</button>
        </div>

      </div>
      <footer class="bottomfooter"></footer>
  </div>
</template>

<script>
export default {

}
</script>

<style>
 footer{
    height: 50px;
 }

 .shop{
   display: grid;
   grid-template-columns:1fr 1fr;
 }

  .gucci{
    width: 500px;
    height: 650px;
    margin-left: auto;
    margin-right: auto;

    
  }

  .name{
      margin-top: 30px;
       font-size: 30px;
    }

  .footerpic{
    height: 20px;
  }

  .bottomfooter{
    background-color: black;
    height: 50px;
  }


</style>