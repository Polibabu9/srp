const soilOptions = {
    zaid: ["Sandy", "Loamy", "Clay"],
    kharif: ["Loamy", "Clay", "Silty"],
    rabi: ["Loamy", "Clay", "Saline"]
};

const cropsInfo = {
    Sandy: ["Bajra", "Moong"],
    Loamy: ["Wheat", "Barley", "Rice"],
    Clay: ["Paddy", "Sugarcane"],
    Silty: ["Mustard", "Sunflower"],
    Saline: ["Barley", "Sorghum"],
};

const mixedCropsInfo = {
    Sandy: "Suitable: Bajra & Moong; Unsuitable: Wheat.",
    Loamy: "Suitable: Wheat & Barley; Unsuitable: Sugarcane.",
    Clay: "Suitable: Paddy; Unsuitable: Sorghum.",
    Silty: "Suitable: Mustard; Unsuitable: Rice.",
    Saline: "Suitable: Barley; Unsuitable: Paddy."
};

function updateSoilOptions() {
    const season = document.getElementById('seasonSelect').value;
    const soilSelect = document.getElementById('soilSelect');
    soilSelect.innerHTML = '<option value="">--Select Soil Type--</option>';
    
    if (season) {
        soilOptions[season].forEach(soil => {
            const option = document.createElement('option');
            option.value = soil;
            option.textContent = soil;
            soilSelect.appendChild(option);
        });
    }
}

function showCropOptions() {
    const soilType = document.getElementById('soilSelect').value;
    const cropList = document.getElementById('cropList');
    const mixedCrops = document.getElementById('mixedCrops');
    const cropSection = document.getElementById('cropSection');
    
    cropList.innerHTML = '';
    mixedCrops.textContent = '';
    
    if (soilType) {
        const crops = cropsInfo[soilType] || [];
        crops.forEach(crop => {
            const li = document.createElement('li');
            li.textContent = crop;
            cropList.appendChild(li);
        });
        mixedCrops.textContent = mixedCropsInfo[soilType];
        cropSection.style.display = 'block';
    } else {
        cropSection.style.display = 'none';
    }
}
