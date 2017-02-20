angular.module("PatientQuestionsModule")
.directive("hprtScaleType", function() {

        function link(scope, element, attr) {

                var selected = 0;
                var buttons = [
                {
                        "color": "button-light",
                        "body": "N/A",
                        "value": "N/A",
                        "score": 0,
                        "selected": false
                },
                {
                        "color": "button-balanced",
                        "body": "Not at All",
                        "value": "Not at All",
                        "score": 0,
                        "selected": false
                },
                {
                        "color": "button-calm",
                        "body": "A little",
                        "value": "A little",
                        "score": 1,
                        "selected": false
                },
                {
                        "color": "button-positive",
                        "body": "Quite a bit",
                        "value": "Quite a bit",
                        "score": 2,
                        "selected": false
                },
                {
                        "color": "button-assertive",
                        "body": "Extremely",
                        "value": "Extremely",
                        "score": 3,
                        "selected": false
                }];

                function select(index) {
                        buttons[selected].selected = false;
                        buttons[index].selected = true;
                        selected = index;
                        scope.question.value = buttons[selected].value;
                        scope.question.score = buttons[selected].score;
                }

                for (var i = 0; i < buttons.length; i++) {
                        if (buttons[i].value == scope.value) {
                                select(i);
                                break;
                        }
                }

                scope.select = select;
                scope.buttons = buttons;

        }

        return {
                restrict: "E",
                scope: {
                        question: "=question"
                },
                link: link,
                templateUrl: "templates/directive_templates/hprt_scale.html"
        };

});
