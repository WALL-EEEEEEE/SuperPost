
function upload(){

    //stop the default behavior acted by browser
    $(document).on{
        dragleave:function(e){
            e.preventDefault();    
            
        },
        dragenter:function(e){
            e.preventDefault();
        },
        dragover:function(e){
            e.preventDefault();
        },
        drop:function(e) {
            e.preventDefault();
        }
        
    };

    
}





