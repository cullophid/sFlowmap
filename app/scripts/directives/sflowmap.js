'use strict';

angular.module('sFlowmap')
    .directive('sFlowmap', function() {
        return {
            template: '<div></div>',
            restrict: 'E',
            scope: {
                data: '='
            },
            link: function postLink(scope, element, attrs) {
                element.height('100%');
                element.width('100%');

                function generateData() {
                    data = [];
                    for (i = 0; i < 40; i += 1) {
                        data.push({
                            x: Math.random() * width,
                            y: Math.random() * height,
                            angle: Math.random() * 360,
                            value: Math.random() * max
                        });
                    }
                    console.log(data);
                    return data;
                }
                scale = d3.scale.linear()
                    .domain([0, max])
                    .range(['.1', '.5'])
                d3.select('.map')
                    .append('svg')
                    .selectAll('path')
                    .data(generateData())
                    .enter()
                    .append('path')
                    .attr('fill', 'dodgerblue')
                    .attr('d', 'm 15 0 l-30 -10 l 5 10 l-5 10 z')
                    .attr('transform', function(d) {
                        return 'translate(' + d.x + ',' + d.y + '), rotate(' + d.angle + ')'
                    })
                    .attr('opacity', function(d) {
                        return scale(d.value);
                    })


            }
        };
    });