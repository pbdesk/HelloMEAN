module.exports = function() {
    var gulpConfig = {
        alljs:[
            './*.js',
            './server/**/*.js',
            './grunt/**/*.js'
        ],
        bowerComponentsLoc: './bower_components/',
        publicBowerLoc: './public/bower/',
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
            fontawesomeCSS: {
                source: './bower_components/fontawesome/css/*.css',
                dest: './public/bower/fontawesome/'
            },
            fontawesomeFONTS: {
                source: './bower_components/fontawesome/fonts/*.*',
                dest: './public/bower/fontawesome/fonts/'
            }
        }
    };
    return gulpConfig;
};
