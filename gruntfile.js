module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            // this is the "dev" Sass config used with "grunt watch" command
            dev: {
                options: {
                    style: 'expanded',
                    // tell Sass to look in the Bootstrap stylesheets directory when compiling
                    loadPath: 'node_modules/bootstrap-sass/assets/stylesheets'
                },
                files: {
                    // the first path is the output and the second is the input
                    'webroot/compiled/css/nep-styles.css': 'scss/application-scss/nep-styles.scss'
                }
            },
            // this is the "production" Sass config used with the "grunt buildcss" command
            dist: {
                options: {
                    style: 'compressed',
                    loadPath: 'node_modules/bootstrap-sass/assets/stylesheets'
                },
                files: {
                    'webroot/compiled/css/nep-styles.css': 'scss/application-scss/nep-styles.scss'
                }
            },
            styleGuide: {
                options: {
                    style: 'compressed',
                    // tell Sass to look in the Bootstrap stylesheets directory when compiling

                },
                files: {
                    // the first path is the output and the second is the input
                    'webroot/compiled/css/style-guide.css': 'scss/style-guide-scss/style-guide.scss'
                }
            }
        },

        // configure the "grunt watch" task
        watch: {
            sass: {
                files: 'scss/**/*.scss',
                tasks: ['sass:dev', 'sass:styleGuide']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // "grunt buildcss" is the same as running "grunt sass:dist".
    // if I had other tasks, I could add them to this array.
    grunt.registerTask('buildcss', ['sass:dev', 'sass:styleGuide']);
};