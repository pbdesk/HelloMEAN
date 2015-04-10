module.exports = function() {
    var gulpConfig = {
        alljs:[
            './*.js',
            './server/**/*.js'
        ],
        bowerComponentsLoc: 'bower_components',
        bower: {
            jquery: {
                source: './bower_components/jquery/dist/*.*',
                dest: './public/bower/jquery/'
            },
            bootstrap: {
                source: './bower_components/bootstrap/dist/**/*.*',
                dest: './public/bower/bootstrap/'
            },
            toastr: {
                source: [
                    './bower_components/toastr/*.css',
                    './bower_components/toastr/*.js'
                    ],
                dest: './public/bower/toastr/'
            },
            fontawesome: {
                source: [
                    './bower_components/fontawesome/css/*.css',
                    './bower_components/fontawesome/fonts/*.*'
                ],
                dest: './public/bower/toastr/'
            }
        }
    };
    return gulpConfig;
};
