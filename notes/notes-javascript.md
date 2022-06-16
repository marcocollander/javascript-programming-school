# 1. Wprowadzenie do języka JavaScript

JavaScript jest stosowany w ogromnej większości stron internetowych, a wszystkie nowoczesne przeglądarki posiadają
interpreter tego języka. Dzięki platformie Node.js może być stosowany także w aplikacjach serwerowych. Wszystko to
sprawia, że jest to w tej chwili najpopularniejszy język programowania.

JavaScript jest wysokopoziomowym, dynamicznym, interpretowanym językiem, przygotowanym do obiektowego i funkcjonalnego
kodowania. Typy zmiennych nie są w nim określone.

Każdy język, aby można było go używać, musi posiadać standardową bibliotekę, umożliwiającą kodowanie podstawowych
operacji, takich jak pobieranie i zwracanie danych.

Rdzeń języka JavaScript definiuje podstawowy interfejs API przeznaczony do wykonywania operacji na liczbach testach,
tablicach, zbiorach, mapach itp., ale nie obejmuje żadnych funkcjonalności związanych z pobieraniem i zwracaniem danych.
Za tego rodzaju operacje (jak również realizację bardziej zaawansowanych funkcjonalności, na przykład obsługę sieci,
dysków i grafiki) jest odpowiedzialne „środowisko gospodarza”, w którym stosowany jest JavaScript.

Od początku takim środowiskiem była przeglądarka, która do dziś jest najczęściej stosowanym środowiskiem uruchomieniowym
kodu napisanego w JavaScript.

Poprzez przeglądarkę kod odbiera dane od użytkownika przekazywane za pomocą myszy i klawiatury, a od serwera — za pomocą
zapytań HTTP. Zwracanie danych polega na wyświetlaniu informacji zakodowanych w językach HTML i CSS.

## JavaScript — nazwy, wersje i tryby

> Język JavaScript powstał w firmie Netscape. Nazwa „JavaScript” jest zastrzeżonym przez Sun Microsystems
> (dzisiaj Oracle) znakiem handlowym, reprezentującym implementację stosowaną w przeglądarce Netscape (dzisiaj Mozilla).
>
> Autorzy przekazali specyfikację języka stowarzyszeniu ECMA (ang. _European Computer Manufacturers Association_,
> Europejskie Stowarzyszenie Producentów Komputerów) w celu jej standaryzacji, ale z powodu problemów ze
> znakiem handlowym otrzymał nazwę ECMAScript (nieoficjalnie JavaScript).
>
> W tym opracowaniu nazwa ECMAScript lub skrót ES oznacza standard języka i jego wersje.
>
> W drugiej dekadzie XXI wieku wszystkie przeglądarki obsługiwały głównie wersję nr 5 języka ECMAScript. W tym
> opracowaniu stanowi ona wzorzec kompatybilności. W 2015 r. pojawiła się wersja ES6 zawierająca ważne nowe
> funkcjonalności, m.in. klasy i moduły, dzięki którym JavaScript przekształcił się ze zwykłego języka skryptowego w
> poważny język programowania, przeznaczony do wszelkich zastosowań na szeroką skalę. Kadencja wersji ES6
> trwała niecały rok, a kolejne wersje są oznaczane rokiem wydania, tj. ES2016, ES2017, ES2018, ES2019 i ES2020.
>
> Ze względu na konieczność zachowania wstecznej kompatybilności, nie można usunąć przestarzałych
> funkcjonalności, również tych obarczonych błędami. Począwszy od wersji ES5, kod można pisać w tzw. **ścisłym
> trybie** JavaScript, wolnym od wielu wcześniejszych błędów. Wymagane jest w tym celu użycie dyrektywy
> `use strict` opisanej w specyfikacji w sekcji §5.6.3.
>
> W wersjach ES6 i nowszych samo użycie nowych funkcjonalności powoduje niejawne zastosowanie trybu ścisłego.
> Na przykład wpisanie słowa kluczowego `class` lub zdefiniowanie modułu sprawia, że kod jest automatycznie
> przełączany w tryb ścisły i nie można w nim stosować starych, wadliwych funkcjonalności. W niniejszym
> opracowaniu te funkcjonalności są opisane z wyraźnym zaznaczeniem, że nie są dostępne w trybie ścisłym.

W 2010 r. pojawiło się nowe środowisko gospodarza — **platforma Node**. Od tamtego czasu JavaScript nie jest już
ograniczony do interfejsów API oferowanych przez przeglądarkę, ponieważ nowa platforma daje mu dostęp do całeg systemu
operacyjnego, umożliwiając zapisywanie i odczytywanie plików, wysyłanie i odbieranie danych przez sieć, jak również
wysyłanie i obieranie zapytań HTTP. **Node** jest popularną platformą wykorzystywaną do implementowania serwerów WWW,
jak również wygodnego tworzenia prostych skryptów narzędziowych stanowiących alternatywę dla skryptów powłoki.

**Nauka nowego języka programowania nie jest procesem liniowym, więc jego opis też taki nie jest**.

## Czym jest JavaScript?

Z technicznego punktu widzenia JavaScript jest obiektowym językiem skryptowym o luźnej kontroli typów.

JavaScript jest językiem **obiektowym**, a nie proceduralnym. Większość zmiennych, z którymi mamy do czynienia, to tak
naprawdę obiekty.

> Obiekt to specjalna zmienna mająca w swym wnętrzu inne zmienne nazywane **właściwościami**, a także
> funkcje nazywane **metodami**. Właściwości i metody nazywa się ogólnie **elementami składowymi**.

Poniższy kod definiuje w języku JavaScript ciąg znaków, czyli dowolny tekst ujęty w apostrofy:

```javascript
let name = 'Zenon Marek Raubuć';
```

Zmienna `name` jest w istocie obiektem typu `String` i jako taka ma właściwości (np. `length`) i metody
(np. `substring(), toUpperCase()`), do których odwołujemy się za pomocą **notacji kropkowej**.

Aby wykorzystać funkcję dla zmiennej w kodzie proceduralnym, trzeba tę zmienną przekazać do funkcji w momencie jej
wywołania.

Ponieważ name to obiekt typu String, automatycznie ma właściwość o nazwie length, która odpowiada liczbie znaków tekstu.

```javascript
let name = 'Zenon Marek Raubuć';

const spaces = [];

for (let i = 0; i < name.length; i++) {
  if (name[i] === ' ') {
    spaces.push(true);
  }
}

console.log(`Twoje nazwisko ma ${name.length - spaces.length} liter`);
```

Z notacją kropkową można tworzyć **łańcuch wywołań**, zapewniając dostęp do zagnieżdżonych właściwości i metod:

```
pewienObiekt.pewnaWłaściwość.pewnaMetoda()
```

W języku JavaScript nawet funkcje i tablice są obiektami! Z drugiej strony JavaScript to język obiektowy inny od
wszystkich, bo bazujący na **prototypach** a nie na klasach, mimo iż od wersji E6 możemy posługiwać się klasami. To
rzadko spotykany rodzaj systemu obiektowego.

> **UWAGA:** W wielu językach obiektowych, w tym również w języku JavaScript przyjęto, że każdy wyraz w nazwach
> zmiennych i funkcji jest pisany od wielkiej litery (poza pierwszym), czyli: `pewienObiekt` i `pewnaMetoda()`, a nie
> `pewien_obiekt` i `pewna_metoda()`.

**Luźna kontrola typów** oznacza, że zmienne i dane mogą być łatwo konwertowane z jednego formatu na drugi. Na przykład
można zdefiniować liczbę, a następnie skonwertować ją na ciąg znaków.

```javascript
let balance = 5432.98;
balance += ' zł'; // => '5432.98 zł'
```

W językach z **silną kontrolą typów** utworzenie zmiennej typu `balance` musiałoby zostać poprzedzone określeniem jej
typu:

```c
double balance = 5432.98;
```

Próba zamiany liczby na ciąg znaków (jak w przedstawionym wcześniej kodzie) spowoduje zgłoszenie błędu.

JavaScript to język o **dynamicznej obsłudze typów**, gdyż konwersja następuje w nim w sposób zautomatyzowany, jak w
powyższym kodzie.

Określenie język skryptowy oznacza, że kod JavaScript jest wykonywany przez inny program komputerowy. Instrukcje
zapisane w **języku C** są najpierw kompilowane, a następnie uruchamia się sam wynikowy kod (bez użycia dodatkowych
programów). Kod JavaScript może być np. uruchamiany w przeglądarce internetowej z wbudowanym interpreterem języka
wykonującego wszystkie wskazane instrukcje.

## 1.1. Poznawanie JavaScript

Aby testować kod JavaScript, potrzebny jest interpreter. Kilka wierszy kodu najprościej przetestujemy:

1. W narzędziach programistycznych zawartych w każdej nowoczesnej przeglądarce
   (F12, Ctrl+Shift+I, zakładka Konsola,konsolę można wydzielić jako osobne okno). To tzw. narzędzia deweloperskie
   (DevTools). Każdorazowe wciśnięcie klawisza `Enter` zatwierdza wprowadzone polecenie. Kod wielolinijkowy wprowadzimy,
   przechodząc do następnych linii, np. za pomocą kombinacji klawiszy Shift+Enter.

2. W środowisku Node. W terminalu wpisujemy polecenie **node**, aby rozpocząć interaktywną sesję.

## 1.2. Hello, world

Konsola deweloperska jest stosowana do sprawdzania prostych funkcjonalności, debugowania kodu aplikacji itp.

Często poleca się edytor kodu taki jak Visual Studio Code. Jako ciekawostkę można przytoczyć fakt, że aplikacja **Visual
Studio Code** została napisana właśnie w JavaScript jako aplikacja desktopowa, wykorzystująca narzędzie `Electron.js`.
Edytor ten jest często wybierany przez programistów JavaScript również do tworzenia aplikacji komercyjnych. Istnieje do
niego wiele dodatków wspomagających pracę z tak popularnymi frameworkami jak **Angular**, **React** itp.

Napisany kod w edytorze kodu można kopiować i wklejać do konsoli przeglądarki lub terminala z otwartą sesją Node. Można
też zapisywać kod w pliku (któremu nadaje się rozszerzenie `.js`) i uruchamiać w środowisku `Node`:

```javascript
node plik.js
```

`Node.js` jest środowiskiem umożliwiającym uruchamianie skryptów napisanych w JavaScript; może być ono zainstalowane np.
na serwerze (pozwalając na wykonanie tzw. _back-endu_).

Wraz ze środowiskiem `Node.js` otrzymujemy również aplikację konsolową `npm`. Jest to tzw. menadżer pakietów, czyli
skryptów napisanych w JavaScript (choć nie tylko), które mogą być opublikowane jako oprogramowanie _open-source_
i jako takie są dostępne dla każdego.

Możesz również wskazywać konkretne ścieżki dostępowe, np.:

```javascript
node ./scripts/destruct.js
```

W celu uruchomienia skryptu znajdującego się w folderze scripts, który jest podkatalogiem bieżącego folderu aplikacji.



# 18. Ajax

## 18.1. Wprowadzenie do Ajaksa. Część I

Ajax jest nieodzownym narzędziem do tworzenia nowoczesnych aplikacji internetowych. Umożliwia asynchroniczne wysyłanie i
pobieranie danych z serwera oraz przetwarzanie ich z użyciem JavaScript. Nazwa Ajax jest skrótem od _Asynchronous
JavaScript and XML_ (asynchroniczny JavaScript i XML.

Do definiowania i wydawania żądń służy obiekt JavaScript `XMLHttpRequest`. Można go rozpatrywać w dwóch aspektach:

1. Obsługi funkcji podstawowych co czynią wszystkie ppopularne przeglądarki

2. Obsługa dodatkowych zdarzeń, funkcji ułatwiających pracę z elementami `form` oraz obsługę pokrewnych specyfikacji,
   m.in. `CORS`

# Bibliografia

<hr>

1. David Flanagan, JavaScript. Przewodnik. Poznaj język mistrzów programowania, Gliwice: Helion SA, 2021. ISBN
   978-83-283-7309-9
2. Ved Antani, Stoyan Stefanov. Programowanie zorientowane obiektowo w języku JavaScript, Gliwice: Helion SA, 2018.
   ISBN 978-83-283-3783-1
3. Larry Ullman, Nowoczesny język JavaScript, Gliwice: Helion SA, 2013
