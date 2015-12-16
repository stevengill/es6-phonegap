## ES6 and PhoneGap Template

This template comes with browserify, babelify and babel-preset-es2015. Run `npm install` to download the dependencies.

Add your ES6 code to src/app.js. You can build it manually by running `npm run bundle` or it will run automatically due to the `before_prepare` hook. I added the hook in the `scripts` directory. Either approach will bundle `src/app.js` into `www/js/bundle.js` which then gets copied into your platform specific directories on `prepare`.
