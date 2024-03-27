var cookieconsent = function() {
    var exports = {}; // Obiekt do eksportu funkcji i zmiennych
  
    function initConsent() {
      // Funkcja inicjalizująca mechanizm zgody na ciasteczka
      // Tutaj logika wyświetlająca komunikat o ciasteczkach i obsługująca zgody użytkownika
    }
  
    function setCookieConsent(value) {
      // Funkcja ustawiająca zgodę na ciasteczka w przeglądarce użytkownika
    }
  
    function getCookieConsent() {
      // Funkcja pobierająca aktualną zgodę na ciasteczka
    }
  
    // Obiekt z tłumaczeniami
    var translations = {
      en: {
        message: "We use cookies to personalize content and ads, to provide social media features and to analyze our traffic.",
        dismiss: "Accept",
        learnMore: "More info",
        link: "privacy.html",
        policy: "Cookie Policy"
      },
      pl: {
        message: "Używamy ciasteczek aby personalizować treści i reklamy, oferować funkcje mediów społecznościowych oraz analizować ruch na stronie.",
        dismiss: "Akceptuję",
        learnMore: "Więcej informacji",
        link: "privacy.html",
        policy: "Polityka Ciasteczek"
      }
    };
  
    // Funkcja wybierająca odpowiednie tłumaczenie na podstawie języka przeglądarki
    function chooseLanguage() {
      var userLang = navigator.language || navigator.userLanguage; 
      if (userLang.startsWith("pl")) {
        return translations.pl;
      } else {
        return translations.en;
      }
    }
  
    // Eksport funkcji publicznych
    exports.init = initConsent;
    exports.setConsent = setCookieConsent;
    exports.getConsent = getCookieConsent;
    return exports;
  }();
  