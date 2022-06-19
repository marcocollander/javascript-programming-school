# Narzędzia ułatwiające pracę programisty a w szczególności programisty JavaScriptu

W tym rodziałe opisano narzędzia przydatne dla każdego programisty oraz te narzędzia, których na codzień używają programiści JavaScript:

Do pierwszej kategorii zaliczają się takie narzędzia jak:

* wiersz poleceń
* system kontroli wersji
* zintegrowane środowisko programistyczne

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

## Inspekcja kodu za pomocą narzędzia ESLint

## Rozszerzenie JSX: znaczniki w kodzie JavaScript

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
* Tables Generator, https://www.tablesgenerator.commarkdown_tables                                                     