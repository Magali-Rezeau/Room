<template>
  <section class="about">
      <div class="about-img-left">
        <figure>
          <img src="./../../assets/images/image-about-dark.jpg" alt="">
        </figure>
      </div>
      <div class="about-text">
        <div class="about-text-box">
          <h2>About our furniture</h2>
          <p>Our multifunctional collection blends design and function to suit your individual taste.
            Make each room unique, or pick a cohesive theme that best express your interests and what
            inspires you. Find the furniture pieces you need, from traditional to contemporary styles
            or anything in between. Product specialists are available to help you create your dream space.</p>
        </div>
      </div>
      <div class="about-img-right">
        <figure>
          <img src="./../../assets/images/image-about-light.jpg" alt="">
        </figure>
      </div>
    </section>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.about {

  display: grid;
  grid-template-columns: 29.17% 40.28% 30.55%;
  
  @include md {
    grid-template-columns: 1fr;
    display: flex;
    flex-direction: column;
  }

  &-img-left {
    grid-column: 1/2;
  }

  &-img-right {
    grid-column: 3/4;
  }
  &-img-right, &-img-left {

  
    & figure {
      height: 100%;
    width: 100%;
      & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      @include md {
        height: 20rem;
      }
    }
    }
  }
  &-text {
    grid-column: 2/3;
    width: 100%;
    height: 100%;
    position: relative;

    @include md {
      position: initial;
      height: 20rem;
    }

    &-box {
      display: flex;
    flex-direction: column;
    justify-content: space-between;
      position: absolute;
      width: 30.25rem;
      height: 12rem;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
     
      @include md {
        padding: 4.5rem 4rem;
        position: initial;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        transform: none;
      }
      @include sm {
        padding: 4rem 2rem;
      }
      & h2 {
        color: $grey-light;
      }
    }
  }

}

</style>