var gulp = require('gulp');
var tsc = require('gulp-typescript');
var uglify = require('gulp-uglify');
var nodemon = require('gulp-nodemon');


// projects config
var basics = {
    "project": tsc.createProject('./basics/tsconfig.json'),
    "src": "./basics/*.ts",
    "build": "./build/basics",
    "dist": "./dist/basics"
}
var node = {
    "project": tsc.createProject('./node/tsconfig.json', {
                    module: "commonjs"
                }),
    "src": "./node/**/*.ts",
    "build": "./build/node",
    "dist": "./dist/node"
}


gulp.task('tsc:basics', function() {
    return gulp.src(basics.src)
      .pipe(tsc(basics.project))
      .pipe(gulp.dest(basics.build));
});
gulp.task('tsc:node', function() {
    return gulp.src(node.src)
      .pipe(tsc(node.project))
      .pipe(gulp.dest(node.build));
});


gulp.task('build:basics', ['tsc:basics'], function() {
    return gulp.src(basics.build + '**/*.js')
      .pipe(uglify())
      .pipe(gulp.dest(basics.dist));
});
gulp.task('build:node', ['tsc:node'], function() {
    return gulp.src(node.build + '/**/*.js')
      .pipe(uglify())
      .pipe(gulp.dest(node.dist));
});


gulp.task('basics', function() {
    return gulp.watch(basics.src, ['tsc:basics']);
});
gulp.task('node', ['serve'], function() {
    return gulp.watch(node.src, ['tsc:node']);
});


gulp.task('serve',['build:node'], function() {
    nodemon({ script: './build/node/express/express.js' })
});

gulp.task('default',['build:basics', 'build:node'], function() {});
