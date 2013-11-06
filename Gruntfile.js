module.exports = function(grunt){
	var path = require('path');
	var matchdep = require('matchdep');

	// load all grunt-plugin tasks
	matchdep.filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// init config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*! <%= pkg.name %> (<%= pkg.repository.url %>)\n'+
			' * lastupdate: <%= grunt.template.today("yyyy-mm-dd") %>\n'+
			' * version: <%= pkg.version %>\n'+
			' * author: <%= pkg.author %>\n'+
			' * License: MIT */\n',
		// setup server
		connect: {
			site: {
				options: {
					port: 9000,
					base: '.'
				}
			}
		},
		// minify javascripts
		uglify: {
			script: {
				options: {
					banner: '<%= banner %>'
				},
				src: ['<%= concat.script.src%>'],
				dest: 'randomly.min.js'
			}
		},
		// concat javascripts
		concat: {
			script: {
				options: {
					banner: '<%= banner %>'
				},
				src: [
					'src/randomly.js'
				],
				dest: 'randomly.js'
			}
		},
		// watch some files status
		watch: {
			script: {
				options: {
					livereload: true
				},
				files: [
					'<%= concat.script.src%>',
					'tests/**/*.html',
					'tests/**/*.js'
				],
				tasks: ['concat', 'uglify']
			}
		}
	});

	// resiter tasks

	grunt.registerTask('default', ['connect', 'watch']);

};
