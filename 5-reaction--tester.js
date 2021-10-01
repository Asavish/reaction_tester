   var start = new Date().getTime();            
                
    
        function makeAppear() {
            
            var top = Math.random() *300;
            
             var left = Math.random() *300;
            
             var R = Math.random() * 255;
             var G = Math.random() * 255;
             var B = Math.random() * 255;
            
              var width = (Math.random() *200)+50;
            
            document.getElementById("shape").style.top = top + "px";
            document.getElementById("shape").style.left = left + "px";
        document.getElementById("shape").style.width = width + "px";
        document.getElementById("shape").style.height = width + "px";
             document.getElementById("shape").style.backgroundColor="rgb(" + R +"," + G +"," + B +")";
           
            if(Math.random() > 0.5)
                {
                  document.getElementById("shape").style.borderRadius ="50%";
            
                    
                }
            else
                {
             document.getElementById("shape").style.borderRadius ="0";
                    
                    
                }
            
            document.getElementById("shape").style.display ="block";
            
            start = new Date().getTime();            
            
        }      
                function appearAfterDelay(){
            
                setTimeout(makeAppear,Math.random() * 1000);
                }
                
                appearAfterDelay();
                
        document.getElementById("shape").onclick = function() {
        
        document.getElementById("shape").style.display = "none";
        
        
    var end = new Date().getTime();
        var Ttime = ((end-start)/1000);
        
        document.getElementById("timetaken").innerHTML = Ttime +" sec"
        appearAfterDelay();
    }
    