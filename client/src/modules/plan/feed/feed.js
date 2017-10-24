import angular from 'angular';
// components used by this module

import PlanService from '../../../services/plan/plan.service';
// imports for this component
import template from './feed.html';
import './feed.css';

class FeedController {
  constructor($state, PlanService) {
    this.$state = $state;
    this.PlanService = PlanService;
  }

  $onInit() {
    this.plan = this.PlanService.getPlanById(this.$state.params.planId);
  }

}

const FeedComponent = {
  restrict: 'E',
  bindings: {
    plan: '<'
  },
  template: template,
  controller: FeedController
};

const FeedModule = angular.module('app.plan.feed', [])
  .component('feed', FeedComponent);

export default FeedModule.name;
