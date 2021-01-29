var app= new Vue({
  el: '#app',
  data:{

    newTodo:'',

    todos:[
      'fare gli esercizi',
      'andare in palestra',
      'fare la spesa',
      'cucinare',
      'andare a camminare'
    ],

    todosEliminati:[],
  },

methods: {
  addTodo(){
  this.todos.push(this.newTodo);
  this.newTodo='';  //per svuotare la casella di input
},

  // FUNZIONE PER ELIMINARE E AGGIUNGERE ALLA LISTA DI ELEMENTI ELIMINATI
  deleteTodo(index){          //creo funzione, richiamo l'indice
  this.todosEliminati.push(this.todos[index]);  //pushamo nell'array vuoto gli elementi eliminati
  this.todos.splice(index,1); //e gli dico che a todos deve eliminare l'indice 1 sta a indicare un elemento per volta
  // console.log(this.todosEliminati);
},
// RIPRISTINO ELEMENTI
  restoreTodos(index){
  this.todos.push(this.todosEliminati[index]) //prendiamo elemento da todosEliminati e lo pushamo all'interno di todos
  this.todosEliminati.splice(index,1);
},
// ELIMINAZIONE DEFINITIVA
confermaDelete() {
  var testo;
  var r = confirm("Press a button!");
  if (r == true) {
    testo = "elemento cancellato!";
  document.getElementById("demo").innerHTML = txt;
}
finalElimination(index){
this.todosEliminati.splice(index,1);
},

}

});
