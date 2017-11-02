import angular from 'angular';

// import child dependencies

// imports for this component
import template from './idea.html';
import './idea.css';

class IdeaController {
  constructor(EventService, $stateParams) {
    this.EventService = EventService;
    this.ideaId = $stateParams.ideaId;
    this.idea = EventService.getEvent(this.ideaId);
    this.totalVotes = 0;
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
  }

  promoteEvent(ideaId) {
    this.EventService.promoteEvent(ideaId);
  }

  $onInit() {
    this.totalVotes = this.sumVotes();
  }

  sumVotes() {
    let sum = this.idea.upVotes.length - this.idea.downVotes.length;
    if (sum > 0) {
      return '+ ' + sum;
    } else {
      return sum;
    }
  }

  upVote() {
    this.EventService.upvoteEvent(this.idea._id).then((idea) => {
      this.idea.upVotes = idea.data.upVotes;
      this.idea.downVotes = idea.data.downVotes;
      this.totalVotes = this.sumVotes();
    });
  }

  downVote() {
    this.EventService.downvoteEvent(this.idea._id).then((idea) => {
      this.idea.upVotes = idea.data.upVotes;
      this.idea.downVotes = idea.data.downVotes;
      this.totalVotes = this.sumVotes();
    });
  }
}
IdeaController.$inject = ['EventService', '$stateParams'];

const IdeaComponent = {
  restrict: 'E',
  bindings: {},
  template: template,
  controller: IdeaController
};

const IdeaModule = angular.module('app.plan.planner.idea', [])
  .component('idea', IdeaComponent);



export default IdeaModule.name;