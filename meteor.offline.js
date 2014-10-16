var stateDep = new Tracker.Dependency,
    previousState;

var originalTriggerFunction = Offline.trigger.bind({});

var reactiveTrigger = function(){
    if(previousState !== Offline.state) stateDep.changed();
    previousState = Offline.state;
    return originalTriggerFunction.apply(Offline, arguments);
};

Offline.trigger = reactiveTrigger;

Offline.reactiveState = function(){
    stateDep.depend();
    return Offline.state;
};


Tracker.autorun(function () {
    var _ = Meteor.status();
    Offline.check();
});