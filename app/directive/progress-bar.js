'use strict';

angular.module('progress').directive('progressBar', function () {
    return {
        scope: {
            total: '=total',
            value: '=value'
        },
        templateUrl: 'app/directive/progress-bar.html'
    };
});