function getWeather() {
    var apiKey = '4dfcb600afcb0ac1959004b8fbf0b900';
    var city = document.getElementById('city').value;
  
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        displayWeather(data);
      })
      .catch(error => {
        console.error('Erro ao obter dados de tempo:', error);
        alert('Erro ao obter dados de tempo. Certifique-se de que o nome da cidade está correto e tente novamente.');
      });
  }
  
  function displayWeather(data) {
    var weatherInfo = document.getElementById('weather-info');
  
    var cityName = data.name;
    var temperature = data.main.temp;
    var description = data.weather[0].description;
  
    weatherInfo.innerHTML = `
      <h2>Tempo em ${cityName}</h2>
      <p>Temperatura: ${temperature}°C</p>
      <p>Descrição: ${description}</p>
    `;
  }
  