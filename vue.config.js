module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import "~@/scss/variables.scss";
        @import "~@/scss/media-queries.scss";
        @import "~@/scss/base.scss";
        `
      }
     
    }
  }
}