var app= new Vue({
  el: '#app',
  data:{
    todos:[
      'fare gli esercizi',
      'andare in palestra',
      'fare la spesa',
      'cucinare',
      'andare a camminare'
    ]
  }
,
methods: {
  // Funzione per eliminare
  deleteTodo(index){          //creo funzione, richiamo l'indice
  this.todos.splice(index,1);  //e gli dico che a todos deve eliminare l'indice 1 sta a indicare un elemento per volta
  }
}
});
