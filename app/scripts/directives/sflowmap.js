'use strict';

angular.module('sFlowmap', [])
    .directive('sFlowmap', function() {
        return {
            template: '<div></div>',
            restrict: 'E',
            scope: {
                data: '='
            },
            link: function postLink(scope, element, attrs) {
                var opacity, scalex, scaley;
                element.height('100%');
                element.width('100%');


                opacity = d3.scale.linear()
                    .domain([0, scope.data.max])
                    .range(['.1', '.5']);

                scalex = d3.scale.linear()
                    .domain([0, scope.data.cols])
                    .range([0, 1000]);
                scaley = d3.scale.linear()
                    .domain([0, scope.data.rows])
                    .range([0, 1000]);


                d3.select(element[0])
                    .append('svg')
                    .attr('viewBox', '0 0 1000 1000') // + scope.data.cols + ' ' + scope.data.rows)
                .selectAll('path')
                    .data(scope.data.data)
                    .enter()
                    .append('path')
                    .attr('fill', 'red')
                    .attr('d', 'm 15 0 l-30 -10 l 5 10 l-5 10 z')
                    .attr('transform', function(d) {
                        return 'translate(' + scalex(d.x) + ',' + scaley(d.y) + '), rotate(' + d.angle + ')'
                    })
                    .attr('opacity', function(d) {
                        return opacity(d.value);
                    })


            }
        };
    });