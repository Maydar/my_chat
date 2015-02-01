module.exports = function(grunt) {

	grunt.initConfig({
		express: {
			options: {
				port: 3000
			},

			dev: {
				options: {
					script: 'src/server.js'
				}
			}
		},
		watch: {
			options: {
				spawn: false,
				livereload: true
			},

			files: [
				'src/*.js'
			],

			tasks: [
				'jshint',
				'uglify',
				'express:dev'
			]

		},
		uglify: {
			dist: {
				files: [{
				expand: true,
				cwd: 'src/',
				src: '**/.*js',
				dest: 'dist/src',
				ext: '.min.js'
				}]
			
			}
		}

	});


	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express-server');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['express:dev', 'watch']);
	
}