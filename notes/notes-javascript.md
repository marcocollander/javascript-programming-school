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

**JavaScript — nazwy, wersje i tryby**

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

## 1.2. Hello, world!

Konsola deweloperska jest stosowana do sprawdzania prostych funkcjonalności, debugowania kodu aplikacji itp.

Często poleca się edytor kodu taki jak Visual Studio Code. Jako ciekawostkę można przytoczyć fakt, że aplikacja **Visual
Studio Code** została napisana właśnie w JavaScript jako aplikacja desktopowa, wykorzystująca narzędzie `Electron.js`.
Edytor ten jest często wybierany przez programistów JavaScript również do tworzenia aplikacji komercyjnych. Istnieje do
niego wiele dodatków wspomagających pracę z tak popularnymi frameworkami jak **Angular**, **React** itp.

Napisany kod w edytorze kodu można kopiować i wklejać do konsoli przeglądarki lub terminala z otwartą sesją Node. Można
też zapisywać kod w pliku (któremu nadaje się rozszerzenie `.js`) i uruchamiać w środowisku `Node`:

```
$ node plik.js
```

`Node.js` jest środowiskiem umożliwiającym uruchamianie skryptów napisanych w JavaScript; może być ono zainstalowane np.
na serwerze (pozwalając na wykonanie tzw. _back-endu_).

Wraz ze środowiskiem `Node.js` otrzymujemy również aplikację konsolową `npm`. Jest to tzw. menadżer pakietów, czyli
skryptów napisanych w JavaScript (choć nie tylko), które mogą być opublikowane jako oprogramowanie _open-source_
i jako takie są dostępne dla każdego.

Możesz również wskazywać konkretne ścieżki dostępowe, np.:

```
node ./scripts/destruct.js
```

W celu uruchomienia skryptu znajdującego się w folderze scripts, który jest podkatalogiem bieżącego folderu aplikacji.




# N. Narzędzia i rozszerzenia

Opisano poniżej następujące narzędzia i rozszerzenia JavaScript:

* narzędzie ESLint do wyszukiwania błędów i niewłaściwego stylu kodu,
* narzędzie Prettier do formatowania kodu,
* narzędzie Jest do pisania testów jednostkowych,
* narzędzie npm do instalowania bibliotek,
* narzędzia webpack, Rollup i Parcel do scalania osobnych modułów w jeden duży moduł, gotowy do użycia w przeglądarce,
* narzędzie Babel do tłumaczenia kodu wykorzystującego najnowsze funkcjonalności języka (lub jego rozszerzenia) na kod,
  który można uruchamiać w przeglądarce
* rozszerzenie JSX (stosowane w platformie React) umożliwiające kodowanie interfejsu użytkownika za pomocą wyrażeń
  JavaScriptu podobnych do znaczników HTML,
* rozszerzenie Flow (podobne do TypeScriptu) umożliwiające opatrywanie kodu adnotacjami i sprawdzanie poprawności typów
  danych.
* [markdownlint](https://github.com/DavidAnson/markdownlint)
* [commonmark](https://commonmark.org/)
* [markdown](https://commonmark.org/help/)

## 17.1. Inspekcja kodu za pomocą narzędzia ESLint

Słowo lint (kłaczek) oznacza fragment kodu, który z technicznego punktu widzenia jest poprawny, ale nieestetyczny,
nieoptymalny i zawiera potencjalne błędy. **Linter** jest narzędziem wykrywającym tego rodzaju mankamenty, a
**lintowanie**oznacza czynność polegającą na wielokrotnym uruchamianiu lintera i poprawianiu błędów do momentu, aż
przestaną się pojawiać komunikaty ostrzegawcze.

Obecnie najpopularniejszym linterem dla języka JavaScript jest [ESLint](https://eslint.org).

## Pierwsze kroki z ESLint

`ESLint` to narzędzie do identyfikowania i raportowania wzorców znalezionych w kodzie `ECMAScript/JavaScript`, w celu
uczynienia kodu bardziej spójnym i uniknięcia błędów. Pod wieloma względami jest podobny do `JSLint` i `JSHint` z
kilkoma wyjątkami:

* `ESLint` używa `Espree` do parsowania `JavaScript`.
* `ESLint` używa `AST` do oceny wzorców w kodzie.
* `ESLint` jest w pełni podłączalny, każda reguła jest wtyczką i możesz dodać więcej w czasie wykonywania.

### Instalacja i użytkowanie

Możesz zainstalować `ESLint` za pomocą `npm` lub `yarn`:

```
npm install eslint --save-dev

# or

yarn add eslint --dev
```

Następnie powinieneś skonfigurować plik konfiguracyjny, a najłatwiej to zrobić:

```
npm init @eslint/config

# or

yarn create @eslint/config
```

Następnie możesz uruchomić ESLint na dowolnym pliku lub katalogu w następujący sposób:

```
npx eslint yourfile.js

# or

yarn run eslint yourfile.js
```

Możliwe jest również zainstalowanie `ESLint` globalnie, a nie lokalnie (za pomocą `npm install eslint --global`). Nie
jest to jednak zalecane, a wszelkie używane wtyczki lub konfiguracje, które można udostępniać, muszą być zainstalowane
lokalnie w obu przypadkach.

### Konfiguracja

Po uruchomieniu `npm init @eslint/config` będziesz miał w swoim katalogu plik `.eslintrc.{js,yml,json}`. W nim zobaczysz
kilka reguł skonfigurowanych w ten sposób:

```json
{
  "rules": {
    "semi": [
      "error",
      "always"
    ],
    "quotes": [
      "error",
      "double"
    ]
  }
}
```

Nazwy `"semi"` i `"quote"` to nazwy reguł w `ESLint`. Pierwsza wartość to poziom błędu reguły i może być jedną z
następujących wartości:

* `"off"` lub `0` - wyłącz regułę
* `"warn"` lub `1` - włącz regułę jako ostrzeżenie (nie wpływa na kod wyjścia)
* `"error"` lub `2` - włącz regułę jako błąd (kod wyjścia będzie wynosił 1)

Trzy poziomy błędów umożliwiają precyzyjną kontrolę nad tym, jak `ESLint` stosuje reguły (więcej opcji konfiguracji i
szczegółów można znaleźć w [dokumentacji konfiguracyjnej](https://eslint.org/docs/user-guide/configuring/)).

Twój plik konfiguracyjny `.eslintrc.{js,yml,json}` będzie również zawierał linię:

```
{
    "extends": "eslint:recommended"
}
```

Z powodu tego wiersza wszystkie reguły oznaczone „✓” na stronie reguł zostaną włączone. Alternatywnie możesz użyć
konfiguracji utworzonych przez innych, wyszukując „eslint-config” w `npmjs.com`. ESLint nie będzie lintować twojego
kodu, chyba że rozszerzysz go ze współdzielonej konfiguracji lub jawnie włączysz reguły w twojej konfiguracji.

## Następne kroki

* Dowiedz się o [zaawansowanej konfiguracji](https://eslint.org/docs/user-guide/configuring/) ESLint.
* Zapoznaj się z [opcjami wiersza poleceń](https://eslint.org/docs/user-guide/command-line-interface).
* Poznaj [integracje ESLint](https://eslint.org/docs/user-guide/integrations) z innymi narzędziami, takimi jak edytory,
  systemy kompilacji i nie tylko.
* Nie możesz znaleźć właściwej reguły? Stwórz własną niestandardową regułę.
* Uczyń ESLint jeszcze lepszym, przyczyniając się do tego.

### [Rozszerzenie VS Code ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Integruje ESLint z VS Code. Jeśli jesteś nowy w ESLint, sprawdź [dokumentację](https://eslint.org/).

Rozszerzenie korzysta z biblioteki `ESLint` zainstalowanej w otwartym folderze obszaru roboczego(*ang. opened workspace
folder*). Jeśli folder go nie zawiera, rozszerzenie szuka globalnej wersji instalacyjnej. Jeśli nie zainstalowałeś
ESLint ani lokalnie, ani globalnie, zrób to, uruchamiając `npm install eslint` w folderze obszaru roboczego w przypadku
instalacji lokalnej lub `npm install -g eslint` w przypadku instalacji globalnej.

## 17.7. Rozszerzenie JSX: znaczniki w kodzie JavaScript

JSX jest rozszerzeniem języka JavaScript umożliwiającym definiowania drzewa elementów za pomocą znaczników podobnych do
stosowanych w kodzie HTML. Rozszerzenie to jest wykorzystawane na platformie React do tworzenia przzeglądarkowych
interfejsów aplikacji. Platforma React przekształca drzewo elemetów zdefiniowanych za pomocą JSX w kod HTML strony
internetowej.

Literały JSX ujmuje się w znaki < i >.

```jsx
const line = <hr />;
```

JSX wymaga transpilacji do zwykłago kodu JavaScript za pomocą narzędzia Babel (lub podobnego). Powyższe wyrażenie
zostanie przekształcone do wywołania nastepującej funkcji:

```javascript
const line = React.createElement('hr', null); 
```

Element reactowy (jsx-owy) może mieć atrybuty tak jak element HTML:

```jsx
const image = <img src="logo" alt="Logo JSX" hidden />;
```

Atrybuty elemntu reactowego są przekształcane we właściwości obiektu, który jest umieszczany w drugim argumencie funkcji
createElement:

```javascript
const image = React.createElement('img', { src: 'logo', alt = "Logo JSX", hidden = true });
```

Elementy JSX, tak jak elementy HTML mogą zawierać elementy potomne:

```jsx
const sidebar = (
  <div className="sidebar">
    <h1>Title</h1>
    <hr />
    <p>To jest pasek boczny <p>
  </div>
)
```

Powyższy kod zostanie skompilowany do takiego:

```javascript
"use strict";

const sidebar = React.createElement(
  "div",
  { className: "sidebar" },
  React.createElement("h1", null, "Title"),
  React.createElement("p", null, "To jest pasek boczny")
);
```

Elementy potomne (zazwyczaj ciągi znaków, lub inne elementy JSX) sa umieszczane w trzecim i kolejnych argumentach
funkcji jak pokazano wyżej.

Wynikiem zwracanym przez funkcję jest zwykły obiekt wykorzystywany przez platformę React do wyświetlania treści w oknie
przeglądarki.

Narzędzie Babel można tak skonfigurować, aby przekształcało elementy JSX w wywołania innych funkcji.

W składni JSX można osadzać wyrażenia JavaScript. Tekst umieszczany w nawiasach klamrowych jest traktowany jak zwykły
kod JavaScript. Tego rodzaju osadzone wyrażenia mogą być wartościami atrybutów lub elementów potomnych:

```jsx
const sidebar = (className, title, content, drawLine = true) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      {drawLine && <hr />}
      <p>{content}</p>
    </div>
  )
}
```

Zostanie to skompilowane do następującego kodu:

```javascript
"use strict";

const sidebar = (className, title, content, drawLine = true) => {
  return React.createElement(
    "div",
    { className: className },
    React.createElement("h1", null, title),
    drawLine && React.createElement("hr", null),
    React.createElement("p", null, content)
  );
};
```

W elementach JSX mogą być osadzone dowolne wyrażenia JavaScript, czyli np. obiekty, tablice i funkcje.

```jsx
// Argumentami poniższej funkcji jest ciąg znaków i funkcja zwrotna. Na ich podstawie funkcja tworzy
// i zwraca element JSX reprezentujący element HTML <ul> zawierający listę elementów potomnych <li>.

const list = (items, cb) => {
  return (
    <ul style={{ padding: 10, border: "solid red 4px" }}>
      {
        items.map((item, index) => <li onClick={() => cb(index)} key={index}>{item}</li>)
      }
    </ul>
  )
}

```

```javascript
"use strict";

const list = (items, cb) => {
  return React.createElement(
    "ul",
    { style: { padding: 10, border: "solid red 4px" } },
    items.map((item, index) =>
      React.createElement("li",
        { onClick: () => cb(index), key: index },
        item
      )
    )
  );
};
```

Element `JSX` definiuje się za pomocą identyfikatora umieszczanego zaraz za znakiem `<`. Jeżeli pierwsza litera
identyfikatora jest mała, to taki identyfikator jest umieszczany w argumencie funkcji `createElement()` jako ciąg
znaków. Jeżeli natomiast litera jest wielka, identyfikator jest traktowany w zwykły sposób, tj. w argumencie
funkcji `createElement()` jest umieszczana jego wartość. Oznacza to, że wyrażenie `JSX` `<Math/>` jest przekształcane w
kod `JavaScript`, w którym w argumencie funkcji `React.createElement()` jest umieszczany globalny obiekt `Math`.

Możliwość umieszczenia w pierwszym argumencie funkcji `createElement()` wartości innych niż ciągi znaków, pozwala
tworzyć komponenty za pomocą platformy `React`. Komponent, którego nazwa rozpoczyna się wielką literą, jest prostym
wyrażeniem `JSX`, reprezentującym bardziej złożone wyrażenie wykorzystujące znaczniki `HTML` zapisane małymi literami.

W platformie `React` nowy komponent najprościej definiuje się, tworząc funkcję, której argumentem jest „obiekt
właściwości”, a zwracanym wynikiem wyrażenie `JSX`. Obiekt właściwości jest zwykłym obiektem reprezentującym wartości
atrybutów, podobnie jak obiekt umieszczany w drugim argumencie funkcji `createElement()`.

```jsx
const Sidebar = props => (
  <div>
    <h1>{props.title}</h1>
    {props.drawLine && <hr />}
    <p>{props.content}</p>
  </div>
);
```

Funkcja w takiej postaci reprezentuje komponent React i w wyrażeniu JSX można jej użyć w miejscu nazwy znacznika `HTML`:

```jsx
const sidebar = <Sidebar title="Tytuł paska" content="Zawartość paska" />
```

Element `<Sidebar/>` zostanie przekształcony w następujący kod:

```javascript
const sidebar = React.createElement(
  Sidebar,
  {
    title: 'Tytuł paska',
    constent: 'Zawartość paska'
  });
```

Platforma `React`, przekształcając to proste wyrażenie JSX, umieści drugi argument, czyli obiekt
właściwości, w argumencie funkcji Sidebar(), umieszczonej w pierwszym argumencie funkcji
createElement(), a zwrócony przez nią wynik użyje w miejscu wyrażenia <Sidebar>.

## 17.n. [Gulp](https://gulpjs.com/)

**Gulp** to zestaw narzędzi do automatyzacji i usprawnienia przepływu pracy. Wykorzystuje elastyczność `JavaScript`, aby
zautomatyzować powolne, powtarzalne przepływy pracy i skomponować je w wydajne potoki kompilacji.

Więcej informacji [tu](https://gulpjs.com/docs/en/getting-started/quick-start)

### 17.n.3. Tworzenie zadań

Gulp udostępnia dwie potężne metody składania, series() i parallel(), umożliwiające składanie poszczególnych zadań w
większe operacje. Obie metody akceptują dowolną liczbę funkcji zadań lub złożonych operacji. series() i parallel() mogą
być zagnieżdżone w sobie lub w sobie na dowolnej głębokości.

Aby Twoje zadania zostały wykonane w odpowiedniej kolejności, użyj metody series().

[//]: # (TODO Examples)

Aby zadania działały z maksymalną współbieżnością, połącz je z metodą Parallel().

[//]: # (TODO Example)

## 17.n. Markdown

Języka Markdown to prosty i łatwy w użyciu języka znaczników, którego można użyć do sformatowania praktycznie
dowolnego dokumentu.
Markdown sprawia, że pisanie w sieci jest szybkie i łatwe.

### 17.n.1 Co to jest Markdown?

Markdown to lekki język znaczników, którego można używać do dodawania elementów formatowania do dokumentów tekstowych w
postaci zwykłego tekstu. Stworzony przez Johna Grubera w 2004 roku, Markdown jest obecnie jednym z najpopularniejszych
języków znaczników na świecie.

Kiedy tworzysz plik w formacie Markdown, dodajesz składnię Markdown do tekstu, aby wskazać, które słowa i frazy powinny
wyglądać inaczej.

Na przykład, aby oznaczyć nagłówek h1, dodajesz przed nim znak # (np. `#Nagłówek jeden`). Aby pogrubić frazę, dodaj
dwie gwiazdki przed i po niej (np. `**ten tekst jest pogrubiony**`)

Możesz dodać elementy formatowania Markdown do zwykłego pliku tekstowego za pomocą aplikacji do edycji tekstu.

Według Grubera składnia Markdown została zaprojektowana tak, aby była czytelna i dyskretna, dzięki czemu tekst w plikach
Markdown można odczytać, nawet jeśli nie jest renderowany.

> Naczelną ideą składni Markdown jest aby dokument mógł być publikowany jako zwykły tekst, bez
> wyglądania, jakby był oznaczony tagami lub instrukcjami formatowania.

### 17.n.2. Dlaczego warto korzystać z Markdown?

* Markdown można wykorzystać do wszystkiego. Ludzie używają go do
  tworzenia [stron internetowych](https://www.markdownguide.org/getting-started/#websites),
* [dokumentów](https://www.markdownguide.org/getting-started/#documents),
  [notatek](https://www.markdownguide.org/getting-started/#notes),
  [książek](https://www.markdownguide.org/getting-started/#books),
  [prezentacji](https://www.markdownguide.org/getting-started/#presentations),
  [wiadomości e-mail](https://www.markdownguide.org/getting-started/#books) i
  [dokumentacji technicznej](https://www.markdownguide.org/getting-started/#documentation).
* Markdown jest przenośny. Pliki zawierające tekst w formacie Markdown można otwierać za pomocą praktycznie dowolnej
  aplikacji.
* Markdown jest niezależny od platformy. Tekst w formacie Markdown można tworzyć na dowolnym urządzeniu z dowolnym
  systemem operacyjnym.
* Markdown jest dowodem na przyszłość. Nawet jeśli aplikacja, której używasz, przestanie działać w pewnym momencie w
  przyszłości, nadal będziesz mógł czytać tekst sformatowany w Markdown za pomocą aplikacji do edycji tekstu. Jest to
  ważna kwestia, jeśli chodzi o książki, prace dyplomowe i inne ważne dokumenty, które należy przechowywać w
  nieskończoność.
* Markdown jest wszędzie. Witryny takie jak [Reddit](https://www.markdownguide.org/tools/reddit/) i GitHub obsługują
  Markdown, a wiele aplikacji komputerowych i
  internetowych obsługuje go.

### 17.n.3. Kicking the Tires

[Dillinger](https://dillinger.io/) jest jednym z najlepszych edytorów online Markdown. Po prostu otwórz witrynę i
zacznij pisać w lewym okienku. W prawym okienku pojawi się podgląd renderowanego dokumentu.

Po zapoznaniu się z Markdown możesz użyć aplikacji Markdown, którą można zainstalować na komputerze stacjonarnym lub
urządzeniu mobilnym.

### 17.n.4. Jak to działa?

Kiedy piszesz w Markdown, tekst jest przechowywany w zwykłym pliku tekstowym, który ma rozszerzenie .md lub .markdown.

Potrzebujesz aplikacji Markdown zdolnej do przetwarzania pliku Markdown. Dostępnych jest wiele aplikacji — od prostych
skryptów po aplikacje komputerowe, które wyglądają jak Microsoft Word. Podobnie jak Dillinger, konwertują one
tekst w formacie Markdown na HTML, aby można go było wyświetlać w przeglądarkach internetowych.

Aplikacje Markdown używają procesora Markdown (często nazywanym „parserem” lub „implementacją”),
aby pobrać tekst sformatowany w Markdown i wyprowadzić go do formatu HTML. W tym momencie dokument można wyświetlić w
przeglądarce internetowej lub połączyć z arkuszem stylów i wydrukować.

Podsumowując, jest to proces czteroczęściowy:

1. Tworzenie pliku Markdown za pomocą edytora tekstu lub dedykowanej aplikacji Markdown z rozszerzeniem .md lub
   .markdown.
2. Otwieranie pliku Markdown w aplikacji Markdown.
3. Użyj aplikacji Markdown, aby przekonwertować plik Markdown na dokument HTML.
4. Wyświetl plik HTML w przeglądarce internetowej lub użyj aplikacji Markdown, aby przekonwertować go na inny format
   pliku, taki jak PDF.

### 17.n.5. Do czego służy Markdown?

Markdown to szybki i łatwy sposób na robienie notatek, tworzenie treści dla witryny internetowej i tworzenie dokumentów
gotowych do druku.

Większość ludzi używa Markdown do tworzenia treści w Internecie, ale Markdown jest dobry do formatowania wszystkiego, od
wiadomości e-mail po listy zakupów.

Oto kilka przykładów tego, co możesz zrobić z Markdown.

#### Strony internetowe

Najprostszy możliwy sposob na stworzenie strony internetowej z plikami Markdown to [blot.im](https://blot.im/). Po
zarejestrowaniu się Blot utworzy na Twoim komputerze folder Dropbox. Należy przekopiować pliki Markdown do tego folderu.

[Jekyll](https://www.markdownguide.org/tools/jekyll/), popularny statyczny generator witryn, który pobiera pliki
Markdown i tworzy witrynę HTML. [GitHub Pages](https://www.markdownguide.org/tools/github-pages/) zapewnia bezpłatny
hosting dla witryn generowanych przez Jekyll. Oprócz Jekyll'a istnieje wiele
innych [generatorów stron statycznych](https://jamstack.org/generators/). Najciekawsze z nich i bardzo popularne
to [Next.js](https://jamstack.org/generators/next/) i [Gatsby](https://jamstack.org/generators/gatsby/) gdyż są oparte o
React'a i hostowane przez Netlify


> Jekyll został użyty do stworzenia przewodnika po [Markdown](https://www.markdownguide.org/). Kod źródłowy
> na [GitHub](https://github.com/mattcone/markdown-guide).

Jeśli chcesz wykorzystać system zarządzania treścią (CMS) do zasilania swojej witryny, spójrz na Ghost. Jest to
bezpłatna platforma blogowa typu open source z ładnym edytorem Markdown. Jeśli jesteś użytkownikiem WordPress, z
przyjemnością dowiesz się, że istnieje obsługa Markdown dla witryn hostowanych na WordPress.com. Witryny WordPress z
własnym hostingiem mogą korzystać z wtyczki Jetpack.

[Gost](https://www.markdownguide.org/tools/ghost/) to bezpłatna platforma blogowa typu open source z edytytorem
Markdown, przydatnym jeśli naszą witrynę zasilamy systemem zarządzania treścią (CMS). Użytkownicy Wordpress'a dla witryn
hostowanych na WordPress.com, mogą skorzystać z obsługi
[Markdown](https://wordpress.com/support/wordpress-editor/blocks/markdown-block/).
Natomiast witryny z własnym hostingiem mogą korzystać z wtyczki [Jetpack](https://jetpack.com/support/markdown/).

#### Dokumenty

Markdown jest wystarczająco dobry do tworzenia podstawowych dokumentów, takich jak zadania i listy. Za pomocą aplikacji do tworzenia dokumentów Markdown można tworzyć i eksportować dokumenty w formacie Markdown do formatu PDF lub HTML. Część PDF jest kluczowa, ponieważ gdy już masz dokument PDF, możesz z nim zrobić wszystko — wydrukować go, wysłać pocztą e-mail lub przesłać na stronę internetową.

Godne polecenia aplikacje dla sytemu operacyjnego Windows to:
* [ghostwriter](https://wereturtle.github.io/ghostwriter/)
* [Markdown Monster](https://markdownmonster.west-wind.com/)

#### Notatki
Markdown jest idealną składnią do robienia notatek. Niestety, Evernote i OneNote, dwie najpopularniejsze aplikacje do obsługi notatek, nie obsługują obecnie języka Markdown. Kilka innych aplikacji do obsługi notatek obsługuje Markdown:

* [Obsidian]() to popularna aplikacja do robienia notatek w Markdown, pełna funkcji.
* [Simplenote]() to darmowa, prosta aplikacja do robienia notatek, dostępna na każdą platformę.
* [Notable]() to aplikacja do robienia notatek, która działa na różnych platformach
* [Joplin]() to aplikacja do robienia notatek, która szanuje Twoją prywatność. Jest dostępny na każdą platformę
* [Boostnote]() reklamuje się jako „aplikacja do robienia notatek o otwartym kodzie źródłowym przeznaczona dla programistów”.

Jeśli nie możesz rozstać się z Evernote, sprawdź [Marxico](), oparty na subskrypcji edytor Markdown dla Evernote, lub użyj [Markdown Here]() na stronie Evernote.

#### Książki

Chcesz samodzielnie opublikować powieść? Wypróbuj [Leanpub](), usługę, która przekształca Twoje pliki w formacie Markdown w elektroniczną książkę. Leanpub wyprowadza Twoją książkę w formacie PDF, EPUB i MOBI. Jeśli chcesz utworzyć kopie książki w miękkiej oprawie, możesz przesłać plik PDF do innej usługi, takiej jak [Kindle Direct Publishing](). Aby dowiedzieć się więcej o pisaniu i samodzielnym publikowaniu książek za pomocą Markdown, przeczytaj [ten wpis na blogu]().

### Bibliografia do działu Markdown

<hr> 

* Markdown Guide, https://www.markdownguide.org/
* Tutorial Markdown, https://commonmark.org/help/tutorial/index.html
* Tables Generator, https://www.tablesgenerator.com/markdown_tables

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
