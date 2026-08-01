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
    
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const input3 = document.getElementById("input3");
    const input4 = document.getElementById("input4");
    
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
    
    db.ref("ESP32/Inputs/Input1").on("value",(snapshot)=>{
    
    updateLED(input1,snapshot.val());
    
    });
    
    db.ref("ESP32/Inputs/Input2").on("value",(snapshot)=>{
    
    updateLED(input2,snapshot.val());
    
    });
    
    db.ref("ESP32/Inputs/Input3").on("value",(snapshot)=>{
    
    updateLED(input3,snapshot.val());
    
    });
    db.ref("ESP32/Inputs/Input4").on("value",(snapshot)=>{
    
        updateLED(input4,snapshot.val());
        
        });
    
    // Read Output Status
    
    db.ref("ESP32/Outputs/Output1").on("value",(snapshot)=>{
    
    output1.checked=snapshot.val();
    
    });
    

    
    // Write Outputs
    
    output1.addEventListener("change",()=>{
    
    db.ref("ESP32/Outputs/Output1").set(output1.checked);
    
    });
    
    