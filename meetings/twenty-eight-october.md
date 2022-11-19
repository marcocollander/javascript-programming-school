# Wstęp

Witam wszystkich razem i każdego z osobna. Jest mi niezmiernie miło poprowadzić dzisiejsze spotkanie. Tytułem krótkiego
wstępu, chciałem przypomnieć cel naszych spotkań. Tak jak to wygląda z mojej subiektywnej prespektywy. Jeśli chodzi o kodowanie, o projekty, to wierzcie mi, że jeszcze się na kodujemy tak, że nie macie się o co martwić. Programować to można się nauczyć samemu. Oczywićie będę Wam w tym pomagał tak jak umiem. Jestem otwary. Mówiłem już o tym, ale jeszcze raz wspomnę. Jeśli ktoś czegoś nie zrozumiał, albo nie był na jakimś spotkaniu, lub ma wątpliwości co udostępnionych materiałów to jestem gotów się spotkać indywidualnie, czy w parę osób - oczywiście online.

Na chwilę obecną chciałbym abyśmy się przygotowali na start dużego projektu w JS, nie będzie to jeszcze projekt komercyjny, ale takie demo, które zaprezentuje nasze umiejętności deweloperów front-endu w czystym JS-sie. Co to będzie to jeszcze nie wiem, ale myślę o sklepie internetowym.

Aby zabrać się do takiego projektu to musimy nauczyć się współpracować oraz programować grupowo. Dzisiejsze zajęcia będą takim wstępem do wspólnej pracy.

Zaczniemy od narzędzi, które ułatwią nam taką pracę. Jak już wspomninałem wcześniej zajmiemy się `BEM-em i Sassem` . Ze wspólnym projektem chciałbym abyśmy ruszyli na początku przyszłego roku.

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
