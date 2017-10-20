import angular from 'angular';

// imports for this component
import template from './signup.html';
import './login.css';

// temp constants for testing
const testToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidXNlcklkIjoiMTIzNDUiLCJuYW1lIjoiSmFyZWQifQ.OH3YX4wMOovE0qOryCJ9_1vZ7a0cMIz-0lk1AwWk8GU';

class SignupController {
  constructor(UserService, $state) {
    this.UserService = UserService;
    this.$state = $state;
    this.name = '';
    this.email = '';
    this.password = '';
    this.confPassword = '';
    this.formWarning = '';
  }

  signup() {
    if (this.validateForm()) {
      let newUser = {
        name: this.name,
        email: this.email,
        password: this.password
      };
      this.UserService.signup(newUser);
    }
  }

  validateForm() {
    if (!this.email) { // TODO: update this email-specific validation
      this.formWarning = 'Please provide an email address';
      return false;
    } else if (!this.password) {
      this.formWarning = 'Please provide a password';
      return false;
    } else if (this.password !== this.confPassword) {
      this.formWarning = 'Passwords do not match';
      return false;
    } else if (!this.name) {
      this.formWarning = 'Please provide a name';
      return false;
    } else {
      return true;
    }
  }
}
SignupController.$inject = ['UserService', '$state'];

const SignupComponent = {
  restrict: 'E',
  bindings: {},
  template: template,
  controller: SignupController
};

const SignupModule = angular.module('app.signup', [])
  .component('signup', SignupComponent);

export default SignupModule.name;
