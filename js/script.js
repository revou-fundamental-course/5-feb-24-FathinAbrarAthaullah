document.addEventListener("DOMContentLoaded", function() {
    var getInput = document.querySelectorAll(".input-container input");
    var getInputSymbol = document.querySelectorAll(".input-symbol");
    
    getInput.forEach(function(input) {
      var symbolWidth = getInputSymbol[0].offsetWidth;
      input.style.paddingLeft = (symbolWidth + 25) + "px";
    });
  });
  
  
  var hamburger = document.querySelector("header button");
  var getHeaderLinks = document.querySelector("header #links");
  hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("crossed");
    getHeaderLinks.classList.toggle("smallerDeviceMenu");
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    var reverse = document.querySelector("big i.ri-arrow-left-right-line");
    var fahrenheitToCelsius = document.querySelectorAll(".f_to_c");
    var celsiusToFahrenheit = document.querySelectorAll(".c_to_f");
    var fahrenheitToCelsiusInnerInput = document.querySelectorAll(".f_to_c input");
    var celsiusToFahrenheitInnerInput = document.querySelectorAll(".c_to_f input");
    var textarea = document.querySelector(".penjelasan")
    reverse.addEventListener("click", function() {
      textarea.value = "";
        fahrenheitToCelsiusInnerInput.forEach((element)=> {
          element.value = "";
        });
        celsiusToFahrenheitInnerInput.forEach((element)=> {
          element.value = "";
        });
        fahrenheitToCelsius.forEach(function(element) {
            element.classList.toggle("f-to-c");
        });
        celsiusToFahrenheit.forEach(function(element) {
            element.classList.toggle("c-to-f");
        });
    });
  });
  
  
  function celsiusToFahrenheit(celsius) {
    return Math.round((celsius * 9/5) + 32);
  }
  
  // Function to convert Fahrenheit to Celsius
  function fahrenheitToCelsius(fahrenheit) {
    return Math.round((fahrenheit - 32) * 5/9);
  }
  
  // Function to update Celsius to Fahrenheit result in real-time
  function updateCelsiusToFahrenheitResult() {
    document.querySelectorAll('.input-celsius').forEach(function(input, index) {
      var celsius = parseFloat(input.value);
      var resultElement = document.querySelectorAll('.input-fahrenheit')[index];
      if (!isNaN(celsius)) {
        var fahrenheit = celsiusToFahrenheit(celsius);
        resultElement.value = fahrenheit;
        document.querySelector(".penjelasan").value = "("+celsius+"°C × 9/5) + 32 = "+fahrenheit+"°F";
      } else {
        resultElement.value = "Please enter a valid number.";
      }
    });
  }
  
  // Function to update Fahrenheit to Celsius result in real-time
  function updateFahrenheitToCelsiusResult() {
    document.querySelectorAll('.input-fahrenheit').forEach(function(input, index) {
      var fahrenheit = parseFloat(input.value);
      var resultElement = document.querySelectorAll('.input-celsius')[index];
      if (!isNaN(fahrenheit)) {
        var celsius = fahrenheitToCelsius(fahrenheit);
        resultElement.value = celsius;
        document.querySelector(".penjelasan").value = "("+fahrenheit+"°F - 32) x 5/9 = "+celsius+"°C";
      } else {
        resultElement.value = "Please enter a valid number.";
      }
    });
  }
  
  // Update Celsius to Fahrenheit result when input changes
  document.querySelectorAll('.input-celsius').forEach(function(input) {
    input.addEventListener('input', updateCelsiusToFahrenheitResult);
  });
  
  // Update Fahrenheit to Celsius result when input changes
  document.querySelectorAll('.input-fahrenheit').forEach(function(input) {
    input.addEventListener('input', updateFahrenheitToCelsiusResult);
  });
  
  window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var hamburgerInner = document.querySelectorAll("header button div");
    if (window.scrollY > 0) {
      header.classList.add('onScroll');
      hamburgerInner.forEach(function(x) {
        x.style.backgroundColor = '#c748ee';
      });
    } else {
      header.classList.remove('onScroll');
      hamburgerInner.forEach(function(x) {
        x.style.backgroundColor = '#fff';
      });
    }
  });
    
  
  var btnExplain = document.querySelector("#btnExplain");
  var linkRumus = document.querySelector("#links a:last-child");
  
  linkRumus.addEventListener("click", ()=>{
    btnExplain.click();
  });
  
  btnExplain.innerHTML = "jelaskan";
  var kontenPenjelasan = document.querySelector(".container-grid > div:nth-child(6)");
  btnExplain.addEventListener("click", ()=>{
    kontenPenjelasan.classList.toggle("penjelasan_");
    if (kontenPenjelasan.classList.contains("penjelasan_")) {
      btnExplain.innerHTML = "tutup penjelasan";
    }else{
      btnExplain.innerHTML = "jelaskan";
    }
  });
  
  
  const texts = ["celsius ke fahrenheit.", "fahrenheit ke celsius."];
  const typingSpeed = 100;
  const deleteSpeed = 100;
  let isTyping = true;
  let currentTextIndex = 0;
  
  function prepare(element) {
    const typedText = document.querySelector(element);
    function typingAnimation() {
      
      if (isTyping) {
        typedText.textContent += texts[currentTextIndex].charAt(typedText.textContent.length);
        if (typedText.textContent === texts[currentTextIndex]) {
          isTyping = false;
          setTimeout(typingAnimation, 1000); // Jeda
        } else {
          setTimeout(typingAnimation, typingSpeed);
        }
      } else {
        typedText.textContent = typedText.textContent.slice(0, -1);
        if (typedText.textContent === "") {
          isTyping = true;
          currentTextIndex = (currentTextIndex + 1) % texts.length; // Tampilkan text lain
          setTimeout(typingAnimation, 1000); // Jeda
        } else {
          setTimeout(typingAnimation, deleteSpeed);
        }
      }
    }
    typingAnimation();
  }
  
  prepare(".typing-animation");