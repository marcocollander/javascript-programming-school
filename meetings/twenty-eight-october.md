# Wstęp 

Literatura:
 1. Bartosz Chucherko,  Sass. Nowoczesne arkusze stylów
 2. Bartłomiej Borowczyk - Samuraj Programowania [Zaawansowane projekty w CSS i JavaScript](https://www.udemy.com/course/zaawansowane-projekty-w-css-i-javascript/learn/lecture/15379826#overview)
 3. [Przewodnik po Sass](https://sass-guidelin.es/pl/)
  

## Tworzenie katalogu i plików początkowych projektu

1. Utwórz na dysku katalog `projects-group-frontend` w nim katalog `calculator`. 
2. Do tego katalogu skopiuj pliki z katalogu `project-template`
3. Otwórz w `Visual Studio Code` katalog `calculator` 
4. W wierszu poleceń wydaj komendę `npm run init-project`

## [BEM](https://getbem.com/) 

BEM to metodologia, która pomaga w tworzeniu komponentów wielokrotnego użytku i współdzieleniu kodu w rozwoju 
front-end.

[BEM (Block, Element, Modifier)](https://en.bem.info/methodology/quick-start/) ​​to oparte na komponentach podejście 
do tworzenia stron internetowych. Ideą tego jest podzielenie interfejsu użytkownika na niezależne bloki. Sprawia to, 
że tworzenie interfejsu jest łatwe i szybkie, nawet przy złożonym interfejsie użytkownika, a także umożliwia ponowne 
wykorzystanie istniejącego kodu bez kopiowania i wklejania.

`BEM` ściśle się łączy, czy inaczej mówiąc jest powiązany z `Sass`, który jest preprocesorem `CSS-a`. Jest to duet 
technologii stylów (metodologia + preprocesor).

W programowaniu jest tendencja to wydzielania z kodu kloców w postaci modułów, komponentów, czy elementów, czyli 
posługiwaniem się abstrakcją. 

Problem staramy się rozbić na mniejsze problemy.

Mimo iż `BEM` to konwencja, to jednak daje ona dużo swobody developerom w sposobie określania komponentów, bo to 
programista tak naprawdę decyduje co bedzie komponentem, a co elementem. Upraszcza stylowanie.

Blok należy skojarzyć z komponentem. Z GUI (Graphic User Interface) wydzielamy komponenty i nadajemy im klasy. Komponenty 
czyli bloki składają się z elementów. Przykładem bloku może być nagłówek, nawigacja, przycisk, formularz, część 
główna strony, footer. 

Ideą `BEM` jest interfejsie jako o zbiór komponentów. Jest konwencją, czyli zestawem reguł określającą sposób nazywania 
elementów HTML i tworzenia selektorów.