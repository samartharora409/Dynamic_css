new Vue ({
    el:'#vue-app',
    data:{
        available:true,
        nearby:false

    },
    computed: {
        nearclass:function(){
            return {nearby:this.nearby}
        }

    }
});