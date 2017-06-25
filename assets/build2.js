// var app6 = new Vue({
//   el: '#app-6',
//   data: {
//     message: 'Hello Vue!'
//   }
// });

 var vm = new Vue({
        el: '#tuto',
        data: {
          heures: 0,
          minutes: 0,
          secondes: 0,
          message: null,
          fruits: [
		      'pomme',
		      'cerise',
		      'abricot'
		    ]
        },
        methods: {
		    action: function () {
		      alert('On a cliqué !');
		    },
		    prout: function() {
		    	this.message = 'test';
		    },
		    getFruit: function(index) {
		      alert('Je suis ' + this.fruits[index]);
		    }
		  }
      });
 
      var totalSecondes = 0;
       
      setInterval(function() {
        var minutes = Math.floor(++totalSecondes / 60);
        vm.secondes = totalSecondes - minutes * 60;
        vm.heures = Math.floor(minutes / 60);
        vm.minutes = minutes - vm.heures * 60;
      }, 1000);

      setTimeout(function(){vm.fruits.push('test');}, 2000);


setTimeout(function(){Vue.set(vm.fruits, 1, 'prout');}, 2000);