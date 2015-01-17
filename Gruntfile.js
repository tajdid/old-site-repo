module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/style.css': 'scss/style.scss'
        }
      }
    },
    watch: {
      css: {
        files: ['scss/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      },

      js: {
        files: ['js/*.js'],
        options: {
          livereload: true,
        },
      },

      html: {
        files: ['*.html'],
        options: {
          livereload: true,
        },
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass', 'watch']);
};