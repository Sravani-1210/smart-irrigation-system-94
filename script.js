// Smart Irrigation System JavaScript Code
function calculateIrrigation() {
    // Get the input values
    const cropType = document.getElementById('cropType').value;
    const soilMoisture = parseFloat(document.getElementById('soilMoisture').value);
    const soilType = document.getElementById('soilType').value;
    const cropWaterReq = parseFloat(document.getElementById('cropWaterReq').value); // in mm/day
    const irrigationEfficiency = parseFloat(document.getElementById('irrigationEfficiency').value); // in %

    // Variables for outputs
    let irrigationNeeded = false;
    let waterUsage = 0; // in mm

    // Define threshold for soil moisture (this can be crop-specific)
    const moistureThreshold = 40; // This can be adjusted depending on crop type or soil type

    // Check if irrigation is needed
    if (soilMoisture < moistureThreshold) {
        irrigationNeeded = true;

        // Calculate the water usage
        // Water Deficit = (MoistureThreshold - Current Soil Moisture) * Crop Water Requirement
        const waterDeficit = (moistureThreshold - soilMoisture) * cropWaterReq / 100;
        
        // Total Water Needed = Water Deficit
        const totalWaterNeeded = waterDeficit;

        // Effective Water Usage = Total Water Needed / Irrigation Efficiency
        waterUsage = totalWaterNeeded / (irrigationEfficiency / 100);
    }

    // Display the results
    document.getElementById('isIrrigationNeeded').textContent = irrigationNeeded ? "Irrigation is needed" : "Irrigation is not needed";
    document.getElementById('waterUsage').textContent = irrigationNeeded ? Water Usage: ${waterUsage.toFixed(2)} mm : "No water needed";
}
