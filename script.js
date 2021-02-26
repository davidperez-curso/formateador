$(document).ready(function () {
    const tarea = new Vue({
        el: '#tarea',
        data: {
            message: '',
            fontSize: '',
            fontWeight: '',
            fontColor: '',
            backColor: '',
            fontStyle:{},
            
        },
        methods: {
            borrar () {
                this.message= '',
                this.fontSize= '',
                this.fontWeight= '',
                this.fontColor= '',
                this.backColor= '',
                this.fontStyle= {}
            },
          
         }  
    });

    
});














//salto (){
//    $('#input').val('');   // html: v-on:keypress.enter="función"
//},
