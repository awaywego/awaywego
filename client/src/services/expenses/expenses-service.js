export default class ExpensesService {
  constructor($http, UserService) {
    this.$inject = ['$http', 'UserService'];
    this.http = $http;
    this.UserService = UserService;
    this.expenses = {};

  }

  // ExpensesService data access methods
  returnExpenses() { return this.expenses; }

  newExpense(expense) {
    return this.http.post('/api/expenses', expense).then(() => this.getExpenses());
  }

  getExpenses(planId) {
    return this.http.get(`/api/expenses/${planId}`).then((expenses) => this.expenses = expenses);
  }


  addTransaction(expenseId) {
    return this.http.put(`/api/expenses/add/${expenseId}`).then(() => this.getExpenses());
  }


  removeTransaction(transactionId) {
    return this.http.delete(`/api/expenses/remove/${transactionId}`);
  }



}
