module.exports = function (grunt) {

    grunt.initConfig({
        sass: {
            local: {
                options: {
                    sourcemap: 'none',
                    style:'compressed'
                },
                files: [{
                    expand: true,
                    cwd: 'sass',
                    src: ['*.scss'],
                    dest: 'htdocs/css',
                    ext: '.css'
                }]
            }
        },
        clean: ['htdocs/css'],
        watch: {
            files: ['sass/*.scss'],
            tasks: ['sass:local'],
            options: {
                livereload: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['clean', 'sass:local', 'watch']);
    grunt.registerTask('deploy', ['clean', 'sass:local']);

};
