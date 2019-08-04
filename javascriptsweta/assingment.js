 var oldReading; 
           var newReading;
           var unit;
           var Cost;
           var Total;
           var serCharge=[30,50,75,100,125,150,175];
        function calc() { 
            oldReading = document.getElementById ("oldReading").value;
            newReading= document.getElementById ("newReading").value;
            unit=newReading-oldReading;
                if(unit>0 && unit<=20){
                    Cost=3*unit;
                    Total=Cost+serCharge[0]; 
                    disp(Total);  
                }
                else if(unit>20 && unit<=30){
                    Cost=20*3 + (unit-20)*7;
                    Total=Cost+serCharge[1]; 
                    alert(Cost +","+ Total);
                    disp(Total);
                }
                else if(unit>30 && unit<=50){
                    Cost=20*3 + 10*7 + (unit-30)*8.5;
                    Total=Cost+serCharge[2];
                    alert(Cost +","+ Total);
                    disp(Total);
                }
                else if(unit>50 && unit<=150){
                    Cost=20*3 + 10*7 +  20*8.5 + (unit-50)*10;
                    Total=Cost+serCharge[3];
                    alert(Cost +","+ Total);
                    disp(Total); 
                }
                else if(unit>150 && unit<=250){
                    Cost=20*3 + 10*7 +  20*8.5 + 100*10 + (unit-150)*11; 
                    Total=Cost+serCharge[4];
                    alert(Cost +","+ Total);
                    disp(Total);
                }
                else if(unit>250 && unit<=400){
                    Cost=20*3 + 10*7 +  20*8.5 + 100*10 + 100*11 + (unit-250)*12; 
                    Total=Cost+serCharge[5];
                    alert(Cost +","+ Total);
                    disp(Total); 
                }
                else if(unit>400 ){
                    Cost=20*3 + 10*7 +  20*8.5 + 100*10 + 100*11 + 150*12 + (unit-400)*13;
                    Total=Cost+serCharge[6]; 
                    alert(Cost +","+ Total);
                    disp(Total); 
                }
        }
            function disp(Total){ 
                document.getElementById("Total").innerHTML=Total;
                document.getElementById("unit").innerHTML=unit;
            }       
