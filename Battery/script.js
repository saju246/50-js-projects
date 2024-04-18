const batteryLevel = document.querySelector('.batteryLevel')
const batteryCharging = document.querySelector('.batteryCharging')
const batteryChargingTime = document.querySelector('.batteryChargingTime')
const batteryDischargingTime = document.querySelector('.batteryDischargingTime')



const battery = ()=>{
    if('getBattery' in navigator){
        navigator.getBattery().then(battery =>{

            function updateAllBatteryDetails(){
                updateChargingInfo() 
                updateLevelChange()
                updateDischargingTimeInfo()
                updateChargingTimeChangeInfo( )
            }
            updateAllBatteryDetails()
           //battery charging change
           battery.addEventListener('chargingchange',()=>{
           updateChargingInfo()
           })

           function updateChargingInfo(){
            const isCharging = battery.charging ? "Yes" : "No";
            batteryCharging.innerHTML = isCharging; 
           }
           //battery charging time
           battery.addEventListener('chargingtimechange',()=>{
            updateChargingTimeChangeInfo()
           })


           function updateChargingTimeChangeInfo (){
           
            batteryChargingTime.innerHTML = battery.chargingTime + ' seconds'
           }
           //battery discharging time
           battery.addEventListener('dischargingchange',()=>{
            updateDischargingTimeInfo()
           })
           function updateDischargingTimeInfo(){
            
            batteryDischargingTime.innerHTML = battery.dischargingTime + ' seconds'
           }
        //    battery level change
           battery.addEventListener('levelchange',()=>{
            updateLevelChange()
           });

           function updateLevelChange (){
           const level = battery.level *100 + "%";
           batteryLevel.innerHTML = level
           }
           //battery status

        })
    }
}

battery()