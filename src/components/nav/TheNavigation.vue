<template>
  <header>
    <transition appear>
      <nav class="nav">
        <router-link to="/home" class="nav-logo">
          <svg
            width="62"
            height="14"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 62 14"
          >
            <path
              d="M2.988 12.672v-7.32c0-.48.142-.928.426-1.344a3.36 3.36 0 011.11-1.02c.456-.264.94-.396 1.452-.396.296 0 .618.048.966.144.348.096.654.224.918.384L9.096.588A4.277 4.277 0 007.998.162 5.115 5.115 0 006.744 0c-.776 0-1.488.186-2.136.558-.648.372-1.188.91-1.62 1.614V.384H0v12.288h2.988zm13.472.384c1.328 0 2.526-.276 3.594-.828a6.406 6.406 0 002.532-2.304c.62-.984.93-2.116.93-3.396 0-1.288-.31-2.422-.93-3.402A6.421 6.421 0 0020.054.828C18.986.276 17.788 0 16.46 0c-1.336 0-2.536.276-3.6.828a6.476 6.476 0 00-2.532 2.298c-.624.98-.936 2.114-.936 3.402 0 1.28.312 2.412.936 3.396a6.45 6.45 0 002.538 2.304c1.068.552 2.266.828 3.594.828zm0-2.568c-.744 0-1.416-.17-2.016-.51a3.729 3.729 0 01-1.416-1.404c-.344-.596-.516-1.278-.516-2.046 0-.776.172-1.462.516-2.058a3.686 3.686 0 011.416-1.398c.6-.336 1.272-.504 2.016-.504.752 0 1.426.168 2.022.504a3.698 3.698 0 011.41 1.398c.344.596.516 1.282.516 2.058 0 .768-.172 1.45-.516 2.046a3.741 3.741 0 01-1.41 1.404c-.596.34-1.27.51-2.022.51zm15.704 2.568c1.328 0 2.526-.276 3.594-.828a6.406 6.406 0 002.532-2.304c.62-.984.93-2.116.93-3.396 0-1.288-.31-2.422-.93-3.402A6.421 6.421 0 0035.758.828C34.69.276 33.492 0 32.164 0c-1.336 0-2.536.276-3.6.828a6.476 6.476 0 00-2.532 2.298c-.624.98-.936 2.114-.936 3.402 0 1.28.312 2.412.936 3.396a6.45 6.45 0 002.538 2.304c1.068.552 2.266.828 3.594.828zm0-2.568c-.744 0-1.416-.17-2.016-.51a3.729 3.729 0 01-1.416-1.404c-.344-.596-.516-1.278-.516-2.046 0-.776.172-1.462.516-2.058a3.686 3.686 0 011.416-1.398c.6-.336 1.272-.504 2.016-.504.752 0 1.426.168 2.022.504a3.698 3.698 0 011.41 1.398c.344.596.516 1.282.516 2.058 0 .768-.172 1.45-.516 2.046a3.741 3.741 0 01-1.41 1.404c-.596.34-1.27.51-2.022.51zm12.608 2.184V4.896c0-.44.126-.85.378-1.23s.596-.686 1.032-.918c.436-.232.93-.348 1.482-.348.8 0 1.432.258 1.896.774.464.516.696 1.206.696 2.07v7.428h2.988V4.908c0-.44.124-.852.372-1.236a2.717 2.717 0 011.02-.924c.432-.232.92-.348 1.464-.348.8 0 1.438.266 1.914.798s.714 1.254.714 2.166v7.308h2.988V4.548c0-.952-.198-1.766-.594-2.442a4.051 4.051 0 00-1.62-1.56C58.818.182 58.036 0 57.156 0c-.928 0-1.744.21-2.448.63-.704.42-1.332 1.022-1.884 1.806-.312-.744-.846-1.336-1.602-1.776C50.466.22 49.604 0 48.636 0c-.752 0-1.442.152-2.07.456-.628.304-1.226.772-1.794 1.404V.384h-2.988v12.288h2.988z"
              fill="#000"
              fill-rule="nonzero"
            />
          </svg>
        </router-link>
        <button class="nav-icon">
          <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z"
              fill="#000"
              fill-rule="evenodd"
            />
          </svg>
        </button>
        <button class="nav-icon-close">
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z"
              fill="#000"
              fill-rule="evenodd"
              opacity=".201"
            />
          </svg>
        </button>
        <ul class="nav-list">
          <li class="nav-list-item">
            <router-link to="/home">Home</router-link>
          </li>
          <li class="nav-list-item">
            <router-link to="/shop">Shop</router-link>
          </li>
          <li class="nav-list-item">
            <router-link to="/contact">Contact</router-link>
          </li>
        
        </ul>
        <router-link to="/cart" class="nav-cart-icon">
            
                <button class="btn">
                  <ion-icon name="cart-outline"></ion-icon>
                  <div class="nav-cart-icon-counter">
                    <span>0</span>
                  </div>
                </button>
         
            </router-link>
      </nav>
    </transition>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@keyframes fromTop {
  from {
    transform: translateY(-40px);
  }
  to {
  }
}
.v-enter-active {
  animation: fromTop 2s;
}

header {
  box-shadow: 0 4px 12px -5px $secondary;
  grid-row: 1/2;
  display: flex;
  align-items: center;
  padding: 0 3rem;
  @include sm {
    height: 4rem;
  }

  & .nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include sm {
      left: 1rem;
      height: 4rem;
      width: 85%;
    }

    &-icon {
      position: relative;
      border: none;
      background: none;
      display: none;
      height: .875rem;

      @include sm {
        display: block;
      }
      &-close {
        position: relative;
        border: none;
        background: none;

        height: 14px;
        display: none;
        @include sm {
          display: block;
        }
      }
    }

    &-logo {
     
      & svg {
        display: block;
        width: 7rem;
        height: 5rem;
        @include md {
          width: 5rem;
          height: 3rem;
        }
      }
    }

    &-list {
      width: 30rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style-type: none;
      @include md {
        width: 20rem;
        font-size: $fs-m;
      }
      @include sm {
        width: 90%;
        justify-content: space-evenly;
        display: none;
        margin-left: 0;
      }

      & li a {
        position: relative;

        &:before {
          position: absolute;
          transition: all 0.35s ease;
          top: 2rem;
          display: block;
          height: 0.2rem;
          width: 0%;
          content: "";
          background-color: $grey-dark;
          @include sm {
            top: 1rem;
          }
        }

        &:hover:before {
          opacity: 1;
          width: 100%;
        }
      }
      & .router-link-active {
        color: $grey-light;
        font-weight: $fw-bold;
      }
    }

    &-cart-icon {
      & .btn {
        width: 2.8rem;
        height: 2.8rem;
        display: block;
        font-size: $fs-xl;
        position: relative;
        @include md {
          width: 2rem;
          height: 2rem;
          font-size: 1rem;
        }
      }
      &-counter {
        color: $secondary;
        width: 1.5rem;
        height: 1.5rem;
        text-align: center;
        background-color: $grey-light;
        position: absolute;
        top: 1.8rem;
        left: 2.3rem;
        border-radius: 50%;
        font-size: $fs-s;
        & span {
          display: block;
          margin: 0.23rem auto;
        }
      }
      & ion-icon {
        display: flex;
        align-items: center;
        width: 3rem;
       
        @include md {
          width: 2rem;
        }
      }
    }
  }
}
</style>
