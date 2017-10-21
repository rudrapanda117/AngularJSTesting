describe('UsersController',function(){
  var $ontroller,UsersController,UsersFactory;
  // Mock the list of users we expect to use in our controller
    var userList = [
      { id: '1', name: 'Jane', role: 'Designer', location: 'New York', twitter: 'gijane' },
      { id: '2', name: 'Bob', role: 'Developer', location: 'New York', twitter: 'billybob' },
      { id: '3', name: 'Jim', role: 'Developer', location: 'Chicago', twitter: 'jimbo' },
      { id: '4', name: 'Bill', role: 'Designer', location: 'LA', twitter: 'dabill' }
    ];

  //Load ui.router and our components.users module which we shall create next
  beforeEach(angular.mock.module('ui.router'));
  beforeEach(angular.mock.module('components.users'));
  beforeEach(angular.mock.module('api.users'));

  //Inject the $controller service to create instances of the controller (UsersController) we want to test
  beforeEach(inject(function(_$controller_,_Users_){
    $controller = _$controller_;
    UsersFactory = _Users_;

//spy and force the retrun value when UsersFactory.all is called
spyOn(UsersFactory,'all').and.callFake(function(){
  return userList;
});
    // Add the factory as a controller dependency
    UsersController = $controller('UsersController',{Users:UsersFactory});
  }));
  // Verify out controller exists
  it('should be defined',function(){
    expect(UsersController).toBeDefined();
  });

  // Add a new test for our expected controller behaviour
  it('should initialize with a call to Users.all()', function(){
    expect(UsersFactory.all).toHaveBeenCalled();
    expect(UsersController.users).toEqual(userList);
  });
});
