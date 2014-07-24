angular.module('ngform-templates', ['partials/create.html', 'partials/directive-templates/field/checkbox.html', 'partials/directive-templates/field/date.html', 'partials/directive-templates/field/dropdown.html', 'partials/directive-templates/field/email.html', 'partials/directive-templates/field/hidden.html', 'partials/directive-templates/field/number.html', 'partials/directive-templates/field/password.html', 'partials/directive-templates/field/radio.html', 'partials/directive-templates/field/textarea.html', 'partials/directive-templates/field/textfield.html', 'partials/directive-templates/form/form.html', 'partials/directive-templates/validation/default.html', 'partials/directive-templates/validation/number.html', 'partials/directive-templates/validation/textfield.html']);

angular.module("partials/create.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/create.html",
    "<div class=container-narrow><h2>Form Builder</h2><br><blockquote><p>Select field type you want to add to the form below and click on 'Add Field' button. Don't forget to set field properties. After you finish creating the form, you can preview the form by clicking Preview Form button.</p></blockquote><div class=well><div class=form-fields ng-hide=previewMode><div class=form-properties><h3>Form Properties</h3><div class=row><div class=col-md-2>Form Type</div><div class=col-md-6><input name=form-type class=form-control ng-model=form.form_type></div></div><div class=row><div class=col-md-2>Form Name</div><div class=col-md-6><input name=form-name class=form-control ng-model=form.form_name></div></div><div class=row><div class=col-md-2>Form Title</div><div class=col-md-6><input name=form-title class=form-control ng-model=form.form_title></div></div></div><hr><h3>Questions</h3><div class=\"add-field form-inline\"><select ng-model=addField.new class=form-control ng-options=\"type.name as type.value for type in addField.types\"></select><button type=submit class=btn ng-click=addNewField()><span class=\"glyphicon glyphicon-plus\"></span> Add Question</button></div><hr><p ng-show=\"form.form_questions.length == 0\">No questions added yet.</p><accordion ui-sortable ng-model=form.form_questions close-others=accordion.oneAtATime><div ui-sortable=sortableOptions ng-model=form.form_questions><accordion-group ng-repeat=\"field in form.form_questions\" is-open=status.open><accordion-heading><a class=accordion-toggle>{{field.field_id}}) &nbsp;{{field.field_title}}</a> <span class=\"pull-right glyphicon\" ng-class=\"{'glyphicon-chevron-down': status.open, 'glyphicon-chevron-right': !status.open}\"></span></accordion-heading><div class=accordion-edit><button class=\"btn btn-danger pull-right\" type=button ng-click=deleteField(field.field_id)><span class=\"glyphicon glyphicon-trash\"></span> Delete</button><div class=row><div class=col-md-4>Question ID:</div><div class=col-md-4>{{field.field_id}}</div></div><div class=row><div class=col-md-4>Question Type:</div><div class=col-md-8>{{field.field_type}}</div></div><div class=clear></div><hr><div class=row><div class=col-md-4>Question Label:</div><div class=col-md-8><input ng-model=field.field_title class=form-control value={{field.field_title}}></div></div><div class=row><div class=col-md-4>Question Name:</div><div class=col-md-8><input ng-model=field.field_name class=form-control value={{field.field_name}}></div></div><div class=row ng-show=showAddOptions(field)><div class=col-md-4>Question Options:</div><div class=col-md-8><div ng-repeat=\"option in field.field_options\"><form class=form-inline role=form><div class=form-group><input class=form-control placeholder=\"Enter name\" ng-model=option.option_title value={{option.option_title}}></div><div class=form-group><input class=form-control placeholder=\"Enter value\" ng-model=option.option_value value={{option.option_value}}></div><button type=button class=\"btn btn-danger right\" ng-click=\"deleteOption(field, option)\">-</button></form></div><button class=\"btn btn-primary btn-sm\" type=button ng-click=addOption(field)>Add Option</button></div></div><validation-directive field=field></validation-directive><div class=row><div class=col-md-4>Required:</div><div class=col-md-4><label class=radio-inline><input type=radio ng-value=true ng-selected ng-model=field.field_required> Yes</label><label class=radio-inline><input type=radio ng-value=false ng-model=field.field_required> No</label></div></div></div></accordion-group></div></accordion><p class=text-center><button class=\"btn btn-primary right\" type=button ng-click=previewOn()><span class=\"glyphicon glyphicon-eye-open\"></span> Preview Form</button> <button class=\"btn btn-danger right\" type=button ng-click=reset()><span class=\"glyphicon glyphicon-refresh\"></span> Reset</button></p><br><hr><a ng-show=!showJson ng-click=\"showJson = true\">Show form json object</a> <a ng-show=showJson ng-click=\"showJson = false\">Hide form json object</a><br><br><div ng-show=showJson><h4>Form object content:</h4><pre>{{ form | json }}</pre></div></div><div class=form-fields-preview ng-show=previewMode><form-directive showform=previewForm></form-directive><p class=text-center><button class=\"btn btn-primary btn-large right\" type=button ng-click=previewOff()>Back to Create Mode</button></p></div></div></div>");
}]);

angular.module("partials/directive-templates/field/checkbox.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/directive-templates/field/checkbox.html",
    "<div class=form-group><input type=checkbox id=field.field_id ng-model=field.field_value ng-true-value=1 ng-false-value=0><label class=form-field-label for=field.field_id>{{field.field_title}}</label></div>");
}]);

angular.module("partials/directive-templates/field/date.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/directive-templates/field/date.html",
    "<div class=form-group><label for=field.field_id>{{field.field_title}}</label><span class=required-error ng-show=\"field.field_required && !field.field_value\">* {{field.field_helpertext}}</span> <input type=date id=field.field_id name={{field.field_name}} ng-model=field.field_value value=field.field_value required class=form-control></div>");
}]);

angular.module("partials/directive-templates/field/dropdown.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/directive-templates/field/dropdown.html",
    "<div class=form-group><label for=field.field_id>{{field.field_title}}</label><span class=required-error ng-show=\"field.field_required && !field.field_value\">* {{field.field_helpertext}}</span><select class=form-control ng-model=field.field_value ng-options=\"option.option_id as option.option_title for option in field.field_options\" required><option value=\"\" disabled>Select an option</option></select></div>");
}]);

angular.module("partials/directive-templates/field/email.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/directive-templates/field/email.html",
    "<div class=form-group><label for=field.field_id>{{field.field_title}}</label><span class=required-error ng-show=\"field.field_required && !field.field_value\">* {{field.field_helpertext}}</span> <input type=email placeholder={{field.field_placeholder}} id=field.field_id name={{field.field_name}} class=form-control ng-model=field.field_value value=field.field_value required></div>");
}]);

angular.module("partials/directive-templates/field/hidden.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/directive-templates/field/hidden.html",
    "<div class=form-group><input type=hidden class=form-control ng-model=field.field_value value=field.field_value></div>");
}]);

angular.module("partials/directive-templates/field/number.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/directive-templates/field/number.html",
    "<div class=form-group><label for=field.field_id>{{field.field_title}}</label><span class=required-error ng-show=\"field.field_required && !field.field_value\">* {{field.field_helpertext}}</span> <input type=number placeholder={{field.field_placeholder}} id=field.field_id name={{field.field_name}} class=form-control ng-model=field.field_value value=field.field_value required min={{field.field_min}} max={{field.field_max}}></div>");
}]);

angular.module("partials/directive-templates/field/password.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/directive-templates/field/password.html",
    "<div class=form-group><label for=field.field_id>{{field.field_title}}</label><span class=required-error ng-show=\"field.field_required && !field.field_value\">* {{field.field_helpertext}}</span> <input type=password id=field.field_id class=form-control name={{field.field_name}} ng-model=field.field_value value=field.field_value required data-ng-pattern={{field.field_validation_pattern}} placeholder={{field.field_placeholder}}></div>");
}]);

angular.module("partials/directive-templates/field/radio.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/directive-templates/field/radio.html",
    "<div class=form-group><label for=field.field_id>{{field.field_title}}</label><span class=required-error ng-show=\"field.field_required && !field.field_value\">* {{field.field_helpertext}}</span><div ng-repeat=\"option in field.field_options\" class=row-fluid><label><input type=radio value={{option.option_value}} ng-model=field.field_value ng-required=field.field_required> &nbsp; <span ng-bind=option.option_title></span></label></div></div>");
}]);

angular.module("partials/directive-templates/field/textarea.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/directive-templates/field/textarea.html",
    "<div class=form-group><label for=field.field_id>{{field.field_title}}</label><span class=required-error ng-show=\"field.field_required && !field.field_value\">* {{field.field_helpertext}}</span><textarea type=text id=field.field_id name={{field.field_name}} ng-model=field.field_value value=field.field_value required class=form-control placeholder={{field.field_placeholder}}>\n" +
    "</textarea></div>");
}]);

angular.module("partials/directive-templates/field/textfield.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/directive-templates/field/textfield.html",
    "<div class=form-group><label for={field.field_name}>{{field.field_title}}</label><span class=required-error ng-show=\"field.field_required && !field.field_value\">* {{field.field_helpertext}}</span> <span ng-show=myForm.{{field.field_name}}.$error.pattern>{{field.field_helpertext}}</span> <input id={{field.field_id}} name={{field.field_name}} class=form-control data-ng-model=field.field_value value=field.field_value required placeholder={{field.field_placeholder}}></div>");
}]);

angular.module("partials/directive-templates/form/form.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/directive-templates/form/form.html",
    "<section class=row ng-show=!form.submitted><h3 class=\"col-md-12 text-center\">{{ form.form_title }}</h3><div class=\"col-sm-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3\"><div class=text-center><dl class=dl-horizontal><dt>Form Type:</dt><dd>{{ form.form_type }}</dd><dt>Form Name:</dt><dd>{{ form.form_name }}</dd><dt>Form Title:</dt><dd>{{ form.form_title }}</dd></dl></div><form name=myForm id=myForm class=\"signin form-horizontal\" novalidate autocomplete=off><fieldset><div ng-repeat=\"field in form.form_questions\"><field-directive field=field></field-directive></div><div data-ng-show=error class=\"text-center text-danger\"><strong>{{error}}</strong></div><div class=modal-footer><button class=\"btn btn-success right\" type=button ng-disabled=myForm.$invalid ng-click=submit()>Submit</button> <button class=\"btn btn-danger right\" type=button ng-click=cancel()>Cancel</button></div></fieldset></form></div></section><div ng-show=form.submitted><h3>Submitted Data</h3><dl class=dl-horizontal><dt>Form Type:</dt><dd>{{ form.form_type }}</dd><dt>Form Name:</dt><dd>{{ form.form_name }}</dd><dt>Form Title:</dt><dd>{{ form.form_title }}</dd><hr><div ng-repeat=\"field in form.form_questions\"><dt>Label:</dt><dd>{{ field.field_title }}</dd><dt>Name:</dt><dd>{{ field.field_name }}</dd><dt>Value:</dt><dd>{{ field.field_value }}</dd><dt>Placeholder:</dt><dd>{{ field.field_placeholder }}</dd><dt>Valid Pattern:</dt><dd>{{ field.field_validation_pattern }}</dd><dt>Helper Text:</dt><dd>{{ field.field_helpertext }}</dd><br></div></dl></div>");
}]);

angular.module("partials/directive-templates/validation/default.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/directive-templates/validation/default.html",
    "");
}]);

angular.module("partials/directive-templates/validation/number.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/directive-templates/validation/number.html",
    "<div class=row><div class=col-md-4>Custom Validation</div><div class=col-md-8><button type=button class=\"btn btn-info btn-xs\" ng-click=\"showValidation = !showValidation\">Hide/Show</button></div></div><div ng-init=\"showValidation = false\" ng-show=showValidation><div class=row><div class=col-md-4>Minimum Value:</div><div class=col-md-4><input type=number ng-model=field.field_min class=form-control value={{field.field_min}}></div></div><div class=row><div class=col-md-4>Maximum Value:</div><div class=col-md-4><input type=number ng-model=field.field_max class=form-control value={{field.field_max}}></div></div></div>");
}]);

angular.module("partials/directive-templates/validation/textfield.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/directive-templates/validation/textfield.html",
    "<div class=row><div class=col-md-4>Custom Validation</div><div class=col-md-8><button type=button class=\"btn btn-info btn-xs\" ng-click=\"showValidation = !showValidation\">Hide/Show</button></div></div><div ng-init=\"showValidation = false\" ng-show=showValidation><div class=row><div class=col-md-4>Question Placeholder:</div><div class=col-md-8><input ng-model=field.field_placeholder class=form-control value=field.field_placeholder></div></div><div class=row><div class=col-md-4>Question Validation Pattern:</div><div class=col-md-8><input ng-model=field.field_validation_pattern class=form-control value=field.field_validation_pattern></div></div><div class=row><div class=col-md-4>Question Helper Text:</div><div class=col-md-8><input ng-model=field.field_helpertext class=form-control value=field.field_helpertext></div></div></div>");
}]);
;'use strict';

angular.module('main', ['ngform-builder'])
.controller('MainCtrl', function($scope) {
	$scope.testForm = {
		"form_type": "system",
		"form_name": "my_form",
		"form_title": "My Form",
		"form_questions": [
			{
				"field_id": 1,
				"field_name": "question_1_textfield",
				"field_title": "New textfield field 1",
				"field_type": "textfield",
				"field_value": "",
				"field_placeholder": "Enter a textfield value",
				"field_validation_pattern": "*",
				"field_helpertext": "missing input or invalid",
				"field_required": true
			}
		],
		"submitted": false
	};
});	;angular.module('controllers', [])
.controller('CreateCtrl', function ($scope, FormService) {

    // preview form mode
    $scope.previewMode = false;

    var form = angular.copy($scope.form);
    
    // new form
    if (_.isEmpty(form)) {
        $scope.form = angular.copy($scope.form) || {};
        $scope.form.form_type = 'system';
        $scope.form.form_name = 'my_form';
        $scope.form.form_title = 'My Form';
        $scope.form.form_questions = [];
        lastAddedID = 0;
    } else {
        angular.copy(form, $scope.form);
        lastAddedID = form.form_questions.length;
    }

    // previewForm - for preview purposes, form will be copied into this
    // otherwise, actual form might get manipulated in preview mode
    $scope.previewForm = {};

    // add new field drop-down:
    $scope.addField = {};
    $scope.addField.types = FormService.fields;
    $scope.addField.new = $scope.addField.types[0].name;
    $scope.addField.lastAddedID = lastAddedID;

    // accordion settings
    $scope.accordion = {}
    $scope.accordion.oneAtATime = true;

    // create new field button click
    $scope.addNewField = function(){

        // incr field_id counter
        $scope.addField.lastAddedID++;

        var newField = {
            "field_id" : $scope.addField.lastAddedID,
            "field_name" : "question_"+$scope.addField.lastAddedID+"_"+$scope.addField.new,
            "field_title" : "New " + $scope.addField.new + " field " + $scope.addField.lastAddedID,
            "field_type" : $scope.addField.new,
            "field_value" : "",
            "field_placeholder" : "Enter a "+$scope.addField.new+" value",
            "field_validation_pattern" : "*",
            "field_helpertext" : "missing input or invalid",
            "field_required" : true
        };

        // put newField into fields array
        $scope.form.form_questions.push(newField);
    }

    $scope.form.form_questions.sort(function (a, b) {
        return a.field_id > b.field_id
    });

    var sortQuestions = function() {
        for (var idx in $scope.form.form_questions) {
            $scope.form.form_questions[idx].field_id = ++idx;
        }
    }

    $scope.sortableOptions = {
        cursor: 'move',
        revert: true,
        stop: sortQuestions
    }

    // deletes particular field on button click
    $scope.deleteField = function (field_id){
        for(var i = 0; i < $scope.form.form_questions.length; i++){
            if($scope.form.form_questions[i].field_id == field_id){
                $scope.form.form_questions.splice(i, 1);
                break;
            }
        }
        sortQuestions();
    }

    // add new option to the field
    $scope.addOption = function (field){
        if(!field.field_options)
            field.field_options = new Array();

        var lastOptionID = 0;

        if(field.field_options[field.field_options.length-1])
            lastOptionID = field.field_options[field.field_options.length-1].option_id;

        // new option's id
        var option_id = lastOptionID + 1;

        var newOption = {
            "option_id" : option_id,
            "option_title" : "Option " + option_id,
            "option_value" : option_id
        };

        // put new option into field_options array
        field.field_options.push(newOption);
    }

    // delete particular option
    $scope.deleteOption = function (field, option){
        for(var i = 0; i < field.field_options.length; i++){
            if(field.field_options[i].option_id == option.option_id){
                field.field_options.splice(i, 1);
                break;
            }
        }
    }

    // preview form
    $scope.previewOn = function(){
        if($scope.form.form_questions == null || $scope.form.form_questions.length == 0) {
            alert('No fields added yet, please add fields to the form before preview.');
        }
        else {
            $scope.previewMode = !$scope.previewMode;
            $scope.form.submitted = false;
            angular.copy($scope.form, $scope.previewForm);
        }
    }

    // hide preview form, go back to create mode
    $scope.previewOff = function(){
        $scope.previewMode = !$scope.previewMode;
        $scope.form.submitted = false;
    }

    // decides whether field options block will be shown (true for dropdown and radio fields)
    $scope.showAddOptions = function (field){
        return (field.field_type == "radio" || field.field_type == "dropdown");
    }

    // deletes all the fields
    $scope.reset = function (){
        $scope.form.form_questions.splice(0, $scope.form.form_questions.length);
        $scope.addField.lastAddedID = 0;
    }
});;'use strict';

angular.module('directive.builder', [])
.directive('formBuilder', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
        	form: '='
        },
        templateUrl: 'partials/create.html',
        controller: 'CreateCtrl'
    };
});;'use strict';

angular.module('directive.field', [])
.directive('fieldDirective', function ($http, $compile, $templateCache) {

    var getTemplateUrl = function(field) {
        var type = field.field_type;
        var templateUrl = '';

        switch(type) {
            case 'textfield':
                templateUrl = 'partials/directive-templates/field/textfield.html';
                break;
            case 'email':
                templateUrl = 'partials/directive-templates/field/email.html';
                break;
            case 'textarea':
                templateUrl = 'partials/directive-templates/field/textarea.html';
                break;
            case 'checkbox':
                templateUrl = 'partials/directive-templates/field/checkbox.html';
                break;
            case 'number':
                templateUrl = 'partials/directive-templates/field/number.html';
                break;
            case 'date':
                templateUrl = 'partials/directive-templates/field/date.html';
                break;
            case 'dropdown':
                templateUrl = 'partials/directive-templates/field/dropdown.html';
                break;
            case 'hidden':
                templateUrl = 'partials/directive-templates/field/hidden.html';
                break;
            case 'password':
                templateUrl = 'partials/directive-templates/field/password.html';
                break;
            case 'radio':
                templateUrl = 'partials/directive-templates/field/radio.html';
                break;
        }
        return templateUrl;
    }

    var linker = function(scope, element) {
        // GET template content from path
        var templateUrl = getTemplateUrl(scope.field);
        $http.get(templateUrl, {cache:$templateCache}).success(function(data) {
            element.html(data);
            $compile(element.contents())(scope);
        });
    }

    return {
        template: '<div>{{field}}</div>',
        restrict: 'E',
        scope: {
            field:'='
        },
        link: linker
    };
});
;'use strict';

angular.module('directive.form', [])
.directive('formDirective', function () {
    return {
        controller: function($scope){
            $scope.submit = function(){
                alert('Form submitted..');
                $scope.form.submitted = true;
            }

            $scope.cancel = function(){
                alert('Form canceled..');
            }
        },
        templateUrl: 'partials/directive-templates/form/form.html',
        restrict: 'E',
        scope: {
            showForm:'='
        }
    };
});
;angular.module('directives', [
	'directive.builder',
    'directive.field',
    'directive.form',
    'directive.validation'
]);;'use strict';

angular.module('directive.validation', [])
.directive('validationDirective', function ($http, $compile, $templateCache) {

    var getTemplateUrl = function(field) {
        var type = field.field_type;
        var templateUrl = '';

        if ((type == 'textfield') ||
            (type == 'email') ||
            (type == 'password') ||
            (type == 'textarea')) {
            templateUrl = 'partials/directive-templates/validation/textfield.html';
        } else if (type == 'number') {
            templateUrl = 'partials/directive-templates/validation/number.html';
        } else {
            templateUrl = 'partials/directive-templates/validation/default.html';
        }

        return templateUrl;
    }

    var linker = function(scope, element) {
        // GET template content from path
        var templateUrl = getTemplateUrl(scope.field);
        $http.get(templateUrl, {cache:$templateCache}).success(function(data) {
            element.html(data);
            $compile(element.contents())(scope);
        });
    }

    return {
        template: '{{field}}',
        restrict: 'E',
        scope: {
            field:'='
        },
        link: linker
    };
});
;'use strict'

angular.module('ngform-builder', [
    'ui.sortable',
	'ui.bootstrap',
	"ngform-templates",
	'controllers',
	'services',
	'directives'
]);;angular.module('services', [])
.service('FormService', function FormService() {
    return {
        fields:[
            {
                name : 'textfield',
                value : 'Textfield'
            },
            {
                name : 'email',
                value : 'E-mail'
            },
            {
                name : 'password',
                value : 'Password'
            },
            {
                name : 'radio',
                value : 'Radio Buttons'
            },
            {
                name : 'dropdown',
                value : 'Dropdown List'
            },
            {
                name : 'date',
                value : 'Date'
            },
            {
                name : 'textarea',
                value : 'Text Area'
            },
            {
                name : 'checkbox',
                value : 'Checkbox'
            },
            {
                name : 'number',
                value : 'Number'
            },
            {
                name : 'hidden',
                value : 'Hidden'
            }
        ]
    };
});
