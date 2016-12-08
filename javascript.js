/*Función TodoCtrl que utiliza el argumento $scope para visualizar sus elementos contenidos hacia el HTML*/
function TodoCtrl($scope) {
  
  /*Este es un arreglo que almacena objetos con propiedades de texto y booleanos*/
  $scope.todos = [
    {text:'Learn AngularJS', done:false},/*La propiedad texto almacena un valor string y la propiedad done almacena un valor booleano falso*/         
    {text: 'Build an app', done:false}/*La propiedad texto almacena un valor string y la propiedad done almacena un valor booleano falso*/
  ];
  

  /*Esta función llamada getTotalTodos no toma ningún argumento. Simplemente retorna la longitud del arreglo "todos". Este valor se muestra
  en el HTML para ilustrar la cantidad de tareas por hacer*/
  $scope.getTotalTodos = function () {
    return $scope.todos.length;
  };
  
  /*La función addTodo se dispara cuando en el HTML el usuario previamente escribe una tarea y oprime el botón Add.*/
  $scope.addTodo = function () {
    $scope.todos.push({text:$scope.formTodoText, done:false});/*Aquí se hace un push al array "todos", con lo que se crea un nuevo objeto
    con las propiedades tomadas del formTodoText, que toma el nombre de la tarea introducida por el usuario, y se establece la propiedad done como falso.*/
    $scope.formTodoText = '';/*Aquí establecemos que el texto a hacer push en el arreglo es el que el usuario escriba.*/
  };
  

  /*Esta función elimina cualquier tarea cuando esta haya sido seleccionada en el checkbox y se oprima el botón Clear Completed. La función se dispara
  en el HTML cuando se oprime el botón Clear Completed.*/
    $scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function(todo){/*el arreglo "todos" ahora sufrirá un filtro para que se remueva el objeto seleccionado de acuerdo
          a su índice.*/
            return !todo.done; /*la función retorna un valor diferente al establecido en la propiedad del objeto, o sea Verdadero. Al ser diferente este objeto
            por su propiedad done, el filtro lo quita del índice del arreglo.*/
        });
    };
}