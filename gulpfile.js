var gulp = require('gulp')
var tsc = require('gulp-typescript')


var basics = {
    "project": tsc.createProject('./basics/tsconfig.json'),
    "src": "./basics/*.ts",
    "dest": "./build/basics"
}

var node = {
    "project": tsc.createProject('./node/tsconfig.json', {
                    module: "commonjs"
                }),
    "src": ["./node/*.ts", "./node/express/*.ts"],
    "dest": "./build/node"
}


gulp.task('tsc-basics', function() {
    return gulp.src(basics.src)
      .pipe(tsc(basics.project))
      .pipe(gulp.dest(basics.dest));
});

gulp.task('tsc-node', function() {
    return gulp.src(node.src)
      .pipe(tsc(node.project))
      .pipe(gulp.dest(node.dest));
});


gulp.task('basics', function() {
    return gulp.watch(basics.src, ['tsc-basics']);
});

gulp.task('node', function() {
    return gulp.watch(node.src, ['tsc-node']);
});
