module.exports = function(grunt) {
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          "css/styles.css": "css/styles.scss",
          "css/checkout-styles.css": "css/checkout-styles.scss",
        }
      }
    },
    cssmin: {
      pictureroom: {
        files: {
          "css/styles.min.css": [
            "css/bootstrap.css",
            "css/styles.css"]
        }
      }
    },
    uglify: {
      scripts: {
        files: {
          "dist/scripts.min.js": [
            "js/jquery.min.js", "js/bootstrap.js",
            "js/mustache.js", "js/date.format.js",
            "js/linkify.min.js", "js/linkify-jquery.min.js",
            "js/scripts.js"]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', [
    'sass',
    'cssmin:pictureroom',
    'uglify:scripts',
  ]);
};
