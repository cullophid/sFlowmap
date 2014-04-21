'use strict';

angular.module('sFlowmapApp')
    .controller('MainCtrl', function($scope) {
        var max = 10,
            cols = 10,
            rows = 10;

        function generateData() {
            var data = [],
                i;
            for (i = 0; i < 40; i += 1) {
                data.push({
                    x: Math.random() * cols,
                    y: Math.random() * rows,
                    angle: Math.random() * 360,
                    value: Math.random() * max
                });
            }
            console.log(data);
            return data;
        }
        $scope.flowmap = {
            cols: cols,
            rows: rows,
            max: max,
            data: generateData()
        };
    });