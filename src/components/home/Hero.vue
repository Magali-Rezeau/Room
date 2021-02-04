<template>
  <section class="hero">
    <div class="hero-slides" v-for="slide of slides" :key="slide.id">
      <div class="hero-slides-img">
        <figure>
          <img
            :srcset="`${slide.imgMobile} 1x, ${slide.imgDesktop} 2x`"
            :alt="slide.alt"
            :src="slide.imgDesktop"
          />
        </figure>
      </div>
      <div class="hero-slides-text">
        <div class="hero-slides-text-box">
          <h1>{{ slide.title }}</h1>
          <p>{{ slide.text }}</p>
          <div class="hero-slides-text-box-link">
            <a href="">Shop now</a>
            <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                fill="#000"
                fill-rule="nonzero"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="hero-slides-sliders">
        <a @click="slidePrev" class="hero-slides-sliders-left"
          ><svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13 0L1 12l12 12"
              stroke="#FFF"
              fill="none"
              fill-rule="evenodd"
            /></svg
        ></a>
        <a @click="slideNext" class="hero-slides-sliders-right"
          ><svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 0l12 12L1 24"
              stroke="#FFF"
              fill="none"
              fill-rule="evenodd"
            /></svg
        ></a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      active: true,
      slides: [
        {
          id: 1,
          title: "Manufactured with the best materials",
          text:
            "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
          imgDesktop: require("./../../assets/images/desktop-image-hero-3.jpg"),
          imgMobile: require("./../../assets/images/mobile-image-hero-3.jpg"),
          alt: "Image-hero-slide-1",
        },

        {
          id: 2,
          title: "Discover innovative ways to decorate",
          text:
            "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
          imgDesktop: require("./../../assets/images/desktop-image-hero-1.jpg"),
          imgMobile: require("./../../assets/images/mobile-image-hero-1.jpg"),
          alt: "Image-hero-slide-1",
        },
        {
          id: 3,
          title: `We are available all across the globe`,
          text: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
        store locator. Any questions? Don't hesitate to contact us today.`,
          imgDesktop: require("./../../assets/images/desktop-image-hero-2.jpg"),
          imgMobile: require("./../../assets/images/mobile-image-hero-2.jpg"),
          alt: "Image-hero-slide-2",
        },
      ],
    };
  },
  methods: {
    slidePrev: function () {
      const last = this.slides.pop();
      this.slides = [last].concat(this.slides);
    },
    slideNext: function () {
      const first = this.slides.shift();
      this.slides = this.slides.concat(first);
    },
  },
};
</script>
<style lang="scss">
.hero {
  &-slides {
    display: grid;
    grid-template-columns: 58.33% 41.67%;
    position: relative;

    @include md {
      grid-template-columns: 1fr;
      grid-template-rows: auto 22rem;
    }

    @include sm {
      margin-bottom: 1rem;
    }

    &:first-of-type {
      display: none;
    }

    &:last-of-type {
      display: none;
    }

    &-img {
      grid-column: 1/2;
      position: relative;
      height: 100%;
      @include md {
        grid-row: 1/2;
      }
      & img {
        width: 100%;
        display: block;
      }
    }

    &-sliders {
      grid-column: 2/3;
      position: absolute;
      bottom: 0;
      width: 10rem;
      height: 5rem;
      background-color: $secondary;
      display: flex;

      @include md {
        grid-column: 1/2;
        grid-row: 1/2;
        right: 0;
        width: 5rem;
        height: 3.5rem;
      }

      &-right,
      &-left {
        width: 5rem;
        height: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;

        @include md {
          width: 3.5rem;
          height: 3.5rem;
        }

        &:hover {
          background-color: $grey-dark;
        }
      }
    }

    &-text {
      grid-column: 2/3;
      width: 100%;
      height: 100%;
      position: relative;

      @include md {
        grid-column: 1/2;
      }

      &-box {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        position: absolute;
        width: 25rem;
        height: 65%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        @include md {
          position: initial;
          width: 100%;
          height: 100%;
          padding: 3.5rem 2rem;
          top: 0;
          left: 0;
          transform: none;
        }
        @include sm {
          padding: 2rem;
        }
        & h1 {
          color: $grey-light;
          font-size: $fs-xl;
          @include sm {
            font-size: $fs-l;
          }
        }

        &-link {
          width: 14.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 2rem;

          & a {
            color: $secondary;
            text-transform: uppercase;
            font-weight: $fw-medium;
            font-size: $fs-m;
            &:hover {
              color: $grey;

              & svg path {
                fill: $grey;
              }
            }
          }
        }
      }
    }
  }
}
</style>