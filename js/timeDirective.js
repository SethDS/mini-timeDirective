/**
 * Created by Seth on 12/20/2016.
 */
angular.module('timeApp')
    .directive('timeDirective', function(){
        return {
            restrict: 'E',
            template: '<h1>Good morning {{myName}},</h1><p> the current time is {{time | date: "shortTime"}}</p>',
            scope: {
                name: '='
        },
        link: function(scope, element, attributes){
            var currentTime = new Date();
            scope.time = currentTime.toString();
            scope.myName = "Seth";
        }
        }
    })
