'use strict';
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var typescript = require('gulp-typescript');
var runSequence = require('run-sequence');
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

var javaScriptTestUnitary = [
    presentationScriptsDir + testScriptsDir + 'Unitary/**/*.js'
];

var tsProject = typescript.createProject(
{
    removeComments: true,
    target: 'ES5',
    module: 'commonjs',
    noExternalResolve: false,
    noImplicitAny: false,
});

gulp.task('test-JavaScript', function () {
    return gulp.src(javaScriptTestUnitary, { read: false })
    .pipe(mocha());
});

gulp.task('test-JavaScriptWithIntegrationTests', function () {
    return gulp.src(javaScriptTestGlob, { read: false })
    .pipe(mocha());
});

gulp.task("compile-TypeScriptApp", function () {
    return gulp.src('app.ts')
        .pipe(typescript(tsProject))
        .pipe(gulp.dest(''));
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

gulp.task("compileAndTest-TypeScriptWithIntegrationTests", function () {
    return runSequence('compile-TypeScript',
              'test-JavaScriptWithIntegrationTests');
});

gulp.task("watch-TypeScript", function() {
    return gulp.watch(typeScriptGlob, ["compileAndTest-TypeScript"]);
});

gulp.task("watch-TypeScriptWithIntegrationTests", function() {
    return gulp.watch(typeScriptGlob, ["compileAndTest-TypeScriptWithIntegrationTests"]);
});