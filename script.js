const firebaseConfig = {
    apiKey: "AIzaSyClE5zxpyfanbPLY79GBYPtbnXqpNMElyU",
    authDomain: "humanlessforming.firebaseapp.com",
    databaseURL: "https://humanlessforming-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "humanlessforming",
    storageBucket: "humanlessforming.firebasestorage.app",
    messagingSenderId: "526367568428",
    appId: "1:526367568428:web:ddb3b8fb53f92db3e1d789"
  };
  
    
    firebase.initializeApp(firebaseConfig);
    
    const db = firebase.database();
    // power
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const input3 = document.getElementById("input3");
    //motor runninng
    const input4 = document.getElementById("input4");
    //cmd
    const output1 = document.getElementById("output1");
    
    
    function updateLED(element,value){
    
    if(value){
    
    element.classList.remove("off");
    element.classList.add("on");
    
    }else{
    
    element.classList.remove("on");
    element.classList.add("off");
    
    }
    
    }
    
    // Read Inputs
    
    db.ref("motor/power/R").on("value",(snapshot)=>{
    
    updateLED(input1,snapshot.val());
    
    });
    
    db.ref("motor/power/Y").on("value",(snapshot)=>{
    
    updateLED(input2,snapshot.val());
    
    });
    
    db.ref("motor/power/B").on("value",(snapshot)=>{
    
    updateLED(input3,snapshot.val());
    
    });


    db.ref("motor/run/running").on("value",(snapshot)=>{
    
        updateLED(input4,snapshot.val());
        
        });
    
    // Output Status
    
    db.ref("motor/run/commend").on("value",(snapshot)=>{
    
    output1.checked=snapshot.val();
    
    });
    

    
    // Write Outputs
    
    output1.addEventListener("change",()=>{
    
    db.ref("motor/run/commend").set(output1.checked);
    
    });
    
    