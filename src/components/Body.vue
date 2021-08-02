<template>

  <body >
   
    <div >
      
      <div class = "bg">
        <div class = "header">
          <h1>CS SHOP</h1>
          <button><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg></button> 

        </div>
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
            
            img-src="../assets/fashion.jpg"
          ></b-carousel-slide>

      <!-- Slides with custom text -->
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
            <h1>Hello world!</h1>
          </b-carousel-slide>

      <!-- Slides with image only -->
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
          <b-carousel-slide>
            <template #img>
              <img
                class="d-block img-fluid w-100"
                width="1024"
                height="480"
                src="https://picsum.photos/1024/480/?image=55"
                alt="image slot"
              >
            </template>
          </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
          <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
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
        <div class = "gucci-tshirt">
          <img  src='../assets/gucciredshirt.jpg' >
          <h1>GUCCI MEN RED T-SHIRT</h1> 
          <button>ADD TO SHOPPING BAG</button>
        </div> 

        <div class = "gucci-tshirt">
          <img  src='../assets/gucciwhitetshirt.jpg' >
          <h1>GUCCI MEN WHITE T-SHIRT</h1> 
          <button>ADD TO SHOPPING BAG</button>
        </div> 

        <div class = "gucci-tshirt">
          <img  src='../assets/guccishort.jpg' >
          <h1>GUCCI MEN WHITE T-SHIRT</h1> 
          <button>ADD TO SHOPPING BAG</button>
        </div>

        <div class = "gucci-tshirt">
          <img  src='../assets/gucciwhitetshirt.jpg' >
          <h1>GUCCI MEN WHITE T-SHIRT</h1> 
          <button>ADD TO SHOPPING BAG</button>
        </div> 

        <div class = "gucci-tshirt">
          <img  src='../assets/gucciwhitetshirt.jpg' >
          <h1>GUCCI MEN WHITE T-SHIRT</h1> 
          <button>ADD TO SHOPPING BAG</button>
        </div> 

        <div class = "gucci-tshirt">
          <img  src='../assets/gucciwhitetshirt.jpg' >
          <h1>GUCCI MEN WHITE T-SHIRT</h1> 
          <button>ADD TO SHOPPING BAG</button>
        </div> 

        <div class = "gucci-tshirt">
          <img  src='../assets/gucciwhitetshirt.jpg' >
          <h1>GUCCI MEN WHITE T-SHIRT</h1> 
          <button>ADD TO SHOPPING BAG</button>
        </div> 

        <div class = "gucci-tshirt">
          <img  src='../assets/gucciwhitetshirt.jpg' >
          <h1>GUCCI MEN WHITE T-SHIRT</h1> 
          <button>ADD TO SHOPPING BAG</button>
        </div> 

      </div>

    </div>
  </body>
</template>

<script>
export default {
     data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
}
</script>



<style >

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,300&family=STIX+Two+Text&display=swap');

  footer{
    height: 400px;
  }

 .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 100px;
  }

  .header h1{
    color: rgb(2, 2, 2);
    font-size: 60px;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Montserrat', sans-serif;
    font-family: 'STIX Two Text', serif;
  } 

  .header button{
    display: block;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 0px 8px 8px 0px;
    height: 50px;
    width: 50px;
  } 

  .shop{
    display: grid;
    grid-template-columns:1fr 1fr;
  }

  .gucci-tshirt{
    width: 800px;
    height: 800px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    bottom: 300px;
  }
  .gucci-tshirt img{
    width: 500px;
    height: 500px;
  }

  .firstslide{
    font-family: 'Montserrat', sans-serif;
    font-family: 'STIX Two Text', serif;
    font-size: 28px;
  }

  


</style>
