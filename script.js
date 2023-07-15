document.getElementById('calculate-btn').addEventListener('click', function() {
    let carMileage = parseFloat(document.getElementById('car-mileage').value) || 0;
    let publicTransport = parseFloat(document.getElementById('public-transport').value) || 0;
    let electricityUsage = parseFloat(document.getElementById('electricity-usage').value) || 0;
    let gasUsage = parseFloat(document.getElementById('gas-usage').value) || 0;
    let wasteGenerated = parseFloat(document.getElementById('waste-generated').value) || 0;
  
    // calculation of carbon footprint formulla
    let totalCarbonFootprint = (carMileage * 0.5) + (publicTransport * 0.3) + (electricityUsage * 1.2) + (gasUsage * 1.8) + (wasteGenerated * 0.02);
    
    //  Result
    document.getElementById('carbon-footprint').textContent = totalCarbonFootprint.toFixed(2);
    
    //  result section
    document.getElementById('result-section').classList.remove('hidden');
    
    //  recommendations
    let recommendations = document.getElementById('recommendations');
    recommendations.innerHTML = '';
    if (totalCarbonFootprint > 10) {
      let recommendation1 = document.createElement('li');
      recommendation1.textContent = "Consider using more eco-friendly transportation options like biking or carpooling.";
      recommendations.appendChild(recommendation1);
      
      let recommendation2 = document.createElement('li');
      recommendation2.textContent = "Reduce energy consumption by turning off lights and unplugging electronics when not in use.";
      recommendations.appendChild(recommendation2);
    }
    else {
      let recommendation = document.createElement('li');
      recommendation.textContent = "Great Yrr! Your carbon footprint is already low.";
      recommendations.appendChild(recommendation);
    }
  });
  