export default {

  // authentication: (next) => {
  //   console.log('oi');
  //   next();
  // },

  Query: {
    posts: () => {
      console.log('posts');
      return 'ola';
    }
  }


}