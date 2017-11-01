import angular from 'angular';

// imports for this component
import template from './expenses-summary-bar.html';
import './expenses-summary-bar.css';

class ExpensesSummaryBarController {
  constructor() {

  }
}
ExpensesSummaryBarController.$inject = [];

const ExpensesSummaryBarComponent = {
  restrict: 'E',
  bindings: {},
  template: template,
  controller: ExpensesSummaryBarController
};


export default ExpensesSummaryBarComponent;
