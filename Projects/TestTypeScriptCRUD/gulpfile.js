'use strict';
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var typescript = require('gulp-typescript');
var runSequence = require('run-sequence');
// var del = require('del');
var presentationScriptsDir = 'Source/';
var testScriptsDir = 'Test/';
var allDir = '**/';

var allTypeScripts = [
    allDir + '*.ts'/*,
    definitelyTypedDefinitions*/
];

var typeScriptGlob = [
    presentationScriptsDir + '**/*.ts'/*,
    definitelyTypedDefinitions*/
];

var javaScriptTestGlob = [
    presentationScriptsDir + testScriptsDir + '**/*.js'
];

var typeScriptTestGlob = [
    presentationScriptsDir + testScriptsDir + '**/*.ts'
];

var tsProject = typescript.createProject(
{
    removeComments: true,
    target: 'ES5',
    module: 'commonjs',
    noExternalResolve: false,
    noImplicitAny: false,
});

/**
* Execute all tests.
*/
// gulp.task('compile-TypeScript', function () {
//     return gulp.src('app/**/*.ts')
//         .pipe(typescript({
//             noImplicitAny: true,
//             out: 'output.js'
//         })
//         .pipe(gulp.dest('app')));
// });

// gulp.task('test-compile-TypeScript', function () {
//     return gulp.src(typeScriptTestGlob)
//         .pipe(typescript(tsProject))
//         .pipe(gulp.dest(testScriptsDir));
// });

gulp.task('test-JavaScript', function () {
    return gulp.src(javaScriptTestGlob, { read: false })
    .pipe(mocha());
});

gulp.task("compile-TypeScript", function () {
    return gulp.src(typeScriptGlob)
        .pipe(typescript(tsProject))
        .pipe(gulp.dest(presentationScriptsDir));
});

gulp.task("compileAndTest-TypeScript", function () {
    return runSequence('compile-TypeScript',
              'test-JavaScript');
});

gulp.task("watch-TypeScript", function() {
    return gulp.watch(typeScriptGlob, ["compileAndTest-TypeScript"]);
});