# 6. Obiekty

Obiekty stanowią fundamentalny typ danych w języku JavaScript.

## 6.1. Wprowadzenie do obiektów

Obiekt jest to kolekcją właściwości ułożonych bez określonego porządku, z których każda ma nazwę i wartość. Nazwy
właściwości są zazwyczaj ciągami znaków, aczkolwiek, mogą być również symbolami. Obiekt przypomina prostą mapę „ciąg
znaków-wartość” może także dziedziczyć właściwości po innym obiekcie, tzw. **prototypie**. Metody obiektu są zazwyczaj
odziedziczonymi właściwościami.

Obiekty, w języku JavaScript, są _dynamiczne_, tzn. ich właściwości można dodawać i usuwać. Mogą też funkcjonować tak
jak obiekty statyczne lub struktury w językach statycznie typowanych, a także reprezentować zbiory ciągów znaków.

W JS obiektem jest każda wartość, która nie jest ciągiem znaków, liczbą, symbolem, wartością logiczną, null i undefined.
Natomiast ciągi znaków, liczby i wartości logiczne mogą funkcjonować jak niemutowalne obiekty.

Obiekty są mutowalne i operuje się na ich referencjach, a nie wartościach. Załóżmy, że zmienna x odwołuje się do
obiektu. Instrukcja let y = x; powoduje, że zmiennej y jest przypisywana referencja do tego obiektu, a nie sam obiekt. W
efekcie wszystkie modyfikacje wprowadzone w zmiennej y są odzwierciedlane w x.

**Właściwość** ma nazwę i wartość. Nazwą może być dowolny ciąg znaków (również pusty) lub symbol. Wartość właściwości
może być dowolna, jak również dowolne mogą być funkcje `getter` lub `setter` (lub obie).

Czasami trzeba rozróżniać właściwości zdefiniowane bezpośrednio w obiekcie od odziedziczonych po prototypie. W języku
JavaScript właściwości nieodziedziczone określa się mianem **własnych właściwości**.

Każda właściwość, oprócz nazwy i wartości, posiada trzy atrybuty:

1. Atrybut „zapisywalna” określający, czy właściwości można przypisywać wartość.
2. Atrybut „wyliczalna” określający, czy nazwa właściwości może być odczytywana za pomocą pętli for/in.
3. Atrybut „konfigurowalna” określający, czy właściwość można usunąć oraz, czy można zmieniać jej atrybuty.

## 6.2. Tworzenie obiektów

Obiekt można utworzyć za pomocą:

- literału obiektowego
- słowa kluczowego `new`
- funkcji `Object.create()`

### 6.2.1. Literały obiektowe

Literał w najbardziej podstawowej postaci jest listą oddzielonych przecinkami par _nazwa:wartość_ umieszczoną w
nawiasach klamrowych. Nazwa właściwości jest identyfikatorem lub literałem tekstowym (dopuszczalny jest też pusty ciąg
znaków). Wartością właściwości jest dowolne wyrażenie, wartość prymitywna lub obiekt.

```javascript
let empty = {}; // Obiekt bez właściwości.

let point = { x: 0, y: 0 }; // Dwie właściwości liczbowe.

let p2 = { x: point.x, y: point.y + 1 }; // Bardziej złożone wartości.

let book = {
	'main title': 'JavaScript', // Nazwy właściwości zawierają spację
	'sub-title': 'Komletny przewodnik dla każdego', // i myślnik, więc muszą być literałami tekstowymi.

	author: {
		// Wartość tej właściwości jest obiektem.
		firstname: 'David',
		surname: 'Flanagan',
	},
};
```

### 6.2.2. Tworzenie obiektów za pomocą operatora new

Operator `new` tworzy obiekt i inicjuje go. Po operatorze umieszcza się nazwę funkcji zwaną **konstruktorem**, która
inicjuje nowo utworzony obiekt. Wbudowane obiekty mają następujące konstruktory:

```javascript
const object = new Object(); // Utworzenie pustego obiektu <=> {}
const array = new Array(); // Utworzenie pustej tablicy <=> []
const date = new Date(); // Utworzenie obiektu typu Date reprezentującego aktualny czas
const map = new Map(); // Utworzenie obiektu typu Map dla par klucz-wartość
```

### 6.2.3. Prototypy

Z każdym obiektem w języku JavaScript jest skojarzony inny obiekt, tzw. prototyp, po którym dziedziczone są właściwości.

Obiekt utworzony za pomocą literału ma prototyp, zawarty we właściwości `Object.prototype`. Natomiast obiekt utworzony
za pomocą operatora `new` we właściwości `prototype` konstruktora. Zatem obiekty utworzone za pomocą
instrukcji `new Object()` i literału `{}` dziedziczą właściwości po prototypie `Object.prototype`. Analogicznie obiekty
utworzone za pomocą `new Array()` dziedziczą po prototypie `Array.prototype` a obiekty utworzone za pomocą `new Date()`
po prototypie `Date.prototype`.

Właściwość `Object.prototype` jest obiektem, który nie ma prototypu, tzn. nie dziedziczy właściwości po żadnym innym
obiekcie. Większość wbudowanych i zdefiniowanych konstruktorów ma prototyp odziedziczony po obiekcie `Object.prototype`.
(np. obiekt `Date.prototype`). Zatem obiekt utworzony za pomocą instrukcji `new Date()` dziedziczy właściwości zarówno
po obiekcie ` Date.prototype`, jak i `Object.prototype`. Seria połączonych prototypów nosi nazwę **łańcucha prototypów**
.

### 6.2.4. Funkcja Object.create()

Funkcja `Object.create()` tworzy nowy obiekt. Jej pierwszym argumentem jest prototyp obiektu:

```javascript
let object = Object.create({ x: 1, y: 2 }); // Obiekt object dziedziczy właściwości x i y.
object.x + object.y;
```

```javascript
let object = Object.create(Object.prototype); // Obiekt object jest podobny do utworzonego za pomocą {} lub Object().
```

Funkcji `Object.create()` używa się wtedy, gdy trzeba zabezpieczyć obiekt przed niezamierzonymi modyfikacjami przez
funkcje biblioteczne.

```javascript
let o = { x: 'Nie zmieniaj tej właściwości.' };
library.function(Object.create(o)); // Zabezpieczenie przed przypadkowymi modyfikacjami
```

## 6.3. Odpytywanie i ustawianie właściwości

Wartość właściwości odczytujemy za pomocą jednego z dwóch operatorów:

1. Kropki (.). Po jego prawej stronie identyfikator właściwości.
2. Nawiasów kwadratowych ([]). Wewnątrz nawiasów wyrażenie, którego wartością jest ciąg znaków reprezentujący nazwę
   właściwości.

Po lewej stronie operatora musi znajdować się wyrażenie, którego wartością jest obiekt.

```javascript
let author = book.author; // Odczytanie wartości właściwości "author" obiektu book.
let name = author.surname; // Odczytanie wartości właściwości "surname" obiektu author.
let title = book['main title']; // Odczytanie wartości właściwości "main title" obiektu book.
```

Tych samych operatorów używamy do utworzenia lub ustawienia właściwości.

```javascript
book.edition = 7; // Utworzenie właściwości "edition" obiektu book.
book['main title'] = 'ECMAScript'; // Zmiana wartości właściwości "main title".
```

### 6.3.1. Obiekty jako tablice asocjacyjne

Dwa poniższe wyrażenia mają tę samą wartość:

```javascript
obiekt.właściwość;
obiekt['właściwość'];
```

Pierwsza składnia, z kropką i identyfikatorem, jest podobna do stosowanej w językach C i Java do odwoływania się do
statycznych pól struktur i obiektów. Natomiast druga, z nawiasami kwadratowymi, jest podobna do wyrażenia odwołującego
się do elementu **tablicy asocjacyjnej** (inne pojęcia to „mapa” lub „słownik”). <u>W języku JavaScript obiekty są
tablicami asocjacyjnymi.</u>

JavaScript jest językiem luźno typowanym. W kodzie można tworzyć w każdym obiekcie dowolne właściwości. Aby odwołać się
do właściwości za pomocą kropki, nazwa właściwości musi być poprawnym identyfikatorem. Identyfikator musi być literałem.
Nie jest to typ danych, więc nie można go modyfikować w kodzie.

Natomiast w odwołaniu z nawiasami kwadratowymi nazwa właściwości jest ciągiem znaków. Ciąg jest typem danych, więc można
go tworzyć i modyfikować w kodzie. Na przykład poprawny jest następujący kod:

```javascript
let addr = '';
for (let i = 0; i < 4; i++) {
	addr += customer[`address${i}`] + '\n';
}
```

Ciąg jest dynamiczny i może się zmieniać w trakcie działania kodu. Tym się różni od identyfikatora, który jest statyczny
i musi być w kodzie wpisany na stałe.

Poniżej pokazany jest przykład wykorzystania pętli `for/in` do wyliczenia całkowitej wartości portfela:

```javascript
function computeValue(portfolio) {
	let total = 0.0;
	for (let stock in portfolio) {
		// Dla każdej akcji w portfelu:
		let shares = portfolio[stock]; // odczytaj ich liczbę,
		let price = getQuote(stock); // pobierz cenę,
		total += shares * price; // dodaj wartość do sumy.
	}
	return total; // Zwróć sumę.
}
```

### 6.3.2. Dziedziczenie

Obiekt w języku JavaScript ma zestaw właściwości własnych, jak również odziedziczonych po prototypie.

Załóżmy, że mamy kod, w którym odpytywana jest właściwość `x` obiektu `object`. Jeżeli obiekt ten nie ma własnej
właściwości o tej nazwie, odpytywana jest właściwość `x` jego prototypu. Jeżeli prototyp również nie ma własnej
właściwości o tej nazwie, ale ma prototyp, wówczas odpytywana jest właściwość tego prototypu. Ten proces powtarza się do
momentu, aż zostanie znaleziona właściwość `x` lub obiekt, którego właściwość `prototype` ma wartość `null`. Jak widać,
właściwości `prototype` tworzą łańcuch, czyli połączoną listę obiektów, po których dziedziczone są właściwości:

```javascript
let object = {}; // Obiekt object dziedziczy metody po obiekcie Object.prototype.
object.x = 1; // Od teraz ma również własną właściwość x.

let p = Object.create(object); // Obiekt p dziedziczy właściwości po obiektach object i Object.prototype.
p.y = 2; // Od teraz ma również własną właściwość y.

let q = Object.create(p); // Obiekt q dziedziczy właściwości po obiektach p, object …
q.z = 3; // … i Object.prototype, jak również ma własną właściwość z.
let f = q.toString(); // Metoda toString() jest dziedziczona po obiekcie Object.prototype.
q.x + q.y; // => 3; właściwości x i y są dziedziczone po obiektach object i p.
```

Teraz załóżmy, że właściwości `x` w obiekcie o została przypisana jakaś wartość. Jeżeli obiekt ten miał wcześniej
własną, tj. nieodziedziczoną właściwość `x`, zostanie po prostu zmieniona jej wartość. W przeciwnym razie zostanie
utworzona nowa właściwość o nazwie `x`. Jeżeli obiekt wcześniej miał odziedziczoną właściwość `x`, zostanie ona
przesłonięta przez nową właściwość o takiej samej nazwie.

Żaden prototyp w łańcuchu nie jest modyfikowany. Dziedziczenie właściwości podczas ich odpytywania, a nie ustawiania
jest kluczową funkcjonalnością języka JavaScript, umożliwiającą selektywne nadpisywanie dziedziczonych właściwości:

```javascript
const unitcircle = { r: 1 }; // Obiekt, po którym są dziedziczone właściwości.

const c = Object.create(unitcircle); // Obiekt c dziedziczy właściwość r.
c.x = 1;
c.y = 1; // W obiekcie c są definiowane dwie własne właściwości.
c.r = 2; // W obiekcie c jest nadpisywana odziedziczona właściwość.

unitcircle.r; // => 1: prototyp nie jest modyfikowany.
```

> Niemal wszystkie obiekty mają swoje prototypy, ale większość z nich nie ma właściwości o nazwie prototype.
> Dziedziczenie w języku JavaScript funkcjonuje nawet wtedy, gdy bezpośredni dostęp do prototypu nie jest możliwy.
> Aby dowiedzieć się więcej na ten temat, zajrzyj do podrozdziału „Atrybut prototype”.

### 6.3.3. Błędy dostępu do właściwości

Próba odpytania nieistniejącej właściwości nie jest błędem. Jeżeli obiekt `object` nie ma własnej ani odziedziczonej
właściwości `x`, to odwołujące się do niej wyrażenie ma wartość `undefined`. Na przykład obiekt `book` ma właściwość o
nazwie `sub-title`, ale nie o nazwie `subtitle`:

```javascript
book.subtitle; // => undefined: właściwość nie istnieje.
```

Błędem jest natomiast próba odpytania właściwości nieistniejącego obiektu. Wartości null i undefined nie mają
właściwości, więc próba ich odpytania też jest błędem. Kontynuujmy poprzedni przykład:

```javascript
const len = book.subtitle.length; // !TypeError: wartość undefined nie ma właściwości length.
```

Wyrażenie odwołujące się do właściwości nie zostanie wyliczone, jeżeli po lewej stronie kropki będzie znajdowała się
wartość `null` lub `undefined`.

```javascript
// Rozbudowana, jawna technika.
let surname = undefined;
if (book) {
	if (book.author) {
		surname = book.author.surname;
	}
}
// Zwięzła, idiomatyczna technika uzyskania wartości właściwości surname, null lub undefined.
surname = book && book.author && book.author.surname;
```

Za pomocą wprowadzonego w wersji języka ES2020 operatora warunkowego dostępu do właściwości ?. (patrz punkt „Warunkowy
dostęp do właściwości”) można powyższe wyrażenie napisać w następujący sposób:

```javascript
let surname = book?.author?.surname;
```

## 6.4. Usuwanie właściwości

## 6.5. Sprawdzanie właściwości

## 6.6. Wyliczanie właściwości

## 6.7. Rozszerzanie obiektów

## 6.8. Serializacja obiektów

## 6.9. Metody obiektów

## 6.10. Udoskonalona składnia literału obiektowego

W najwnowszych wersjach języka JS składnia literału obiektowego została wzbogacona o kilka użytecznych funkcji.

### 6.10.1. Uproszczone definiowanie właściwości

### 6.10.4. Operator rozciągania

Od wersji języka ES2018 można kopiować właściwości istniejącego obiektu do nowego, umieszczając w literale operator
rozciągania (...);

```javascript
const position = { x: 10, y: 20 };
const dimension = { width: 100, height: 75 };
const rect = { ...position, ...dimension };

console.log(rect.x + rect.y + rect.width + rect.height);
```

Należy pamiętać, że nie jest to operator w ścisłym tego słowa znaczeniu, gdyż jest to składnia, którą można stosować
tylko w literałach obiektowych.

Jeśli obiekty rozciągany i docelowy mają właściowści o takich samych nazwach, przyjmowana jest wartość tej drugiej.

```javascript
const obj = { id: 100 };
const pObj = { id: 111, ...obj };
console.log(pObj.id); // => 100, obiekt obj nadpisuje właściwość

const qObj = { ...obj, x: 200 }; //
console.log(qObj.x); // => 200, teraz właściwość obj zostaje nadpisana

const objOne = Object.create({ x: 303 });
const pObjOne = { ...objOne };
console.log(pObjOne.x); // => undefined, gdyż operator rozciąga tylko własne właściwości
```

### 6.10.5. Uproszczone definiowanie metod

Funkcja zdefiniowana jako właściwość obiektu nosi nazwę **metody**. W wersjach starszych niż ES6 metody definiowało się
w literale obiektowym tak samo, jak właściwości, wykorzystując wyrażenia funkcyjne:

```javascript
let square = {
	side: 10,
	area: function () {
		return this.side * this.side;
	},
};

square.area(); // => 100
```

W wersji ES6 w składni literału obiektowego można pominąć dwukropek wraz ze słowem kluczowym function.

```javascript
let square = {
	area() {
		return this.side * this.side;
	},
	side: 10,
};

square.area(); // => 100
```

Obie formy kodu są równorzędne.

### 6.10.6. Gettery i setter

Można definiować **właściwości dostępowe**, które nie mają wartości, tylko jedną lub dwie metody — **gettera** i **settera**.


## 6.11. Podsumowanie

# 6.A Obiekty

**Notatki z "Programowanie zorientowane obiektowo w języku JavaScript". Ved Antani, Stoyan Stefanov**

JavaScript ma ekscentryczne podejście do klasycznego programowania obiektowego. Obiektowość jest jednym z
najpopularniejszych paradygmatów programowania i jest podstawą większości języków programowania, takich jak Java i C++.
Klasyczne programowanie obiektowe proponuje dobrze przemyślane koncepcje, które są przyjmowane przez większość języków z
tej grupy. Jednak JavaScript ma inne podejście.

## Programowanie obiektowe

Gdy chcemy rozmawiać o programowaniu obiektowym to musimy operować takimi pojęciami jak:

- obiekt, metoda i właściwość;
- klasa;
- hermetyzacja
- agregacja
- ponowne wykorzystanie kodu/dziedziczenie
- polimorfizm

## Obiekty

Obiekt w sposób programistyczny reprezentuje byt (osobę lub rzecz). Może reprezentować dowolny byt fizyczny lub
abstrakcyjny.
Obiekt charakteryzuje się cechami (np. kolor, imię, masa ciała itp) oraz wykonywać czynności (np. chodzić, biegać, spać,
wysyłać coś itp.).

Z programistycznego p-ktu widzenia obiekt posiada:

- właściwości reprezentujące cechy rzeczywistego obiektu
- metody - czynności

Przyjeło się:

- obiekty nazywać za pomocą rzeczowników (np. książka, osoba, wektor itp.)
- metody przy użyciu czasowników (np. pisz, wyświetl, czytaj itp.)
- wartości z kolei to przymiotniki

## Klasy

W świecie rzeczywistym obiekty możemy kategoryzować. Kot i pies to zwierzęta. Natomiast w programowaniu obiektowym,
obiekt jest instancją klasy, która jest przepisem lub szablonem, według którego on może być utworzony. Kot i pies to
instancje klasy zwierząt.

W klasycznych językach obiektowych w takich jak C++, Java czy C# tworzenie i organizacja kodu jest oparta na klasach,
w powyższym rozumieniu. Jednakże w JavaScript, mimo iż jest językiem obiektowym, jest inaczej. Tu kod jest tworzony i
organizowany na podstawie prototypów, które także są obiektami.

W prototypowym języku obiektowym nowy obiekt jest tworzony na bazie już istniejącego obiektu, który będzie jego
prototypem. Natomiast w klasycznych językach obiekt jest tworzony na podstawie wzoru zawartego w klasie.

Rożnica między prototypem a klasą jest taka, jak między żywym organizmem a czystą abstrakcją

## Hermetyzacja

Obiekt zawiera w sobie (hermetyzuje):

- dane (przechowywane przez właściwości)
- metody (sposoby działania na danych)

Z pojęciem hermetyzacji wiąże się termin **ukrywanie informacji**. Obiekt jest wykorzystywany poprzez wywoływanie jego
metod i nie ma znaczenia, czy programista sam napisał kod, czy pochodzi on z zewnętrznej biblioteki. Programista nie
musi wiedzieć, jak dokładnie działa metoda, pracuje z interfejsem obiektu, bez zawracania sobie głowy implementacją,
która, z reguły, jest ukryta przed użytkownikiem.

Kolejnym zagadnieniem jest widoczność metod i właściwości, które w innych językach opisane są jako publliczne,
prywatne, czy chronione (ang. _public, private, protected_). W JavaScript wszystkie metody i właściwości są
publiczne, jednakże istnieją sposoby aby chronić wewnętrznych danych obiektu w celu zapewnienia prywatności.

## Agregacja

Łączenie kilku obiektów w jeden nazywa się **agregacją** lub **kompozycją**. Agregacja pozwala na podział problemu na
mniejsze części, którymi łatwiej jest zarządzać („dziel i zwyciężaj”).

## Dziedziczenie

Dziedziczenie to bardzo elegancki sposób korzystania z już istniejącego kodu. W klasie bazowej implementujemy
podstawowe funkcjonalności, które mogą być dziedziczone przez wyspecjalizowane klasy implementujące
charakterystyczne dla danej klasy właściwości i metody.

Ponieważ JavaScript nie posiada klas (klasy wprowadzone w ES6 to lukier składniowy), obiekty dziedziczą po innych
obiektach. Obiekt dziedziczący może zmienić definicję niektórych dziedziczonych metod. Zmianę działania odziedziczonej
metody określa się mianem przesłonięcia, lub nadpisania. (Nie mylić z „przeładowaniem” lub „przeciążeniem”).

## Polimorfizm

Możliwość wywołania tej samej metody na różnych obiektach, przy czym obiekty mogą odpowiadać w różny sposób w zależności
od typu, nazywamy polimorfizmem.

## Programowanie obiektowe - podsumowanie

| Opis                                                                                                                                                                                                                                                                                         | Koncepcja                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| Robert jest człowiekiem (obiektem).                                                                                                                                                                                                                                                          | obiekty                                            |
| Robert posiada dane osobowe — data_urodzenia: 1 czerwca 1980, płeć: męska, włosy: czarne.                                                                                                                                                                                                    | właściwości                                        |
| Robert potrafi wykonać następujące polecenia: jedz, śpij, pij, śnij, mów i oblicz swój wiek.                                                                                                                                                                                                 | metody                                             |
| Robert jest instancją klasy Programista.                                                                                                                                                                                                                                                     | klasa (w klasycznym programowaniu obiektowym)      |
| Robert jest wzorowany na innym obiekcie, o nazwie Programista.                                                                                                                                                                                                                               | prototyp (w prototypowym programowaniu obiektowym) |
| Robert posiada dane (takie jak data_urodzenia) i metody, które działają na tych danych (takie jak obliczWiek()).                                                                                                                                                                             | hermetyzacja                                       |
| Nie musimy wiedzieć, jak dokładnie działa metoda obliczająca wiek. Obiekt może posiadać pewne prywatne dane, takie jak liczba dni w lutym w roku przestępnym — nie wiemy tego, i wcale nie chcemy wiedzieć.                                                                                  | ukrywanie informacji                               |
| Robert jest częścią obiektu o nazwie Zespół, razem z Julią, która jest obiektem typu Projektant, oraz Jackiem, obiektem typu KierownikProjektu.                                                                                                                                              | agregacja, kompozycja                              |
| Projektant, Kierownik Projektu oraz Programista to obiekty dziedziczące z obiektu Osoba.                                                                                                                                                                                                     | dziedziczenie                                      |
| Można wywołać metody Robert.mów(), Jula.mów() oraz Jacek.mów(), z których każda zadziała w inny sposób (Robert pewnie opowie o wydajności, Julia o urodzie, a Jacek o terminach). Każdy z obiektów odziedziczył metodę mów po obiekcie Osoba, a następnie dostosował ją do własnych potrzeb. | polimorfizm, przesłanie metod                      |

# 6.B. Obiekty

**Notatki z "JavaScript. Zasady programowania obiektowego". Nicholas C. Zakas**

## Podsumowanie

Obiekty w JS-ie najlepiej sobie wyobrazić jako **tablice asocjacyjne**, a ich właściwości jako pary**klucz-wartość**. Do
właściwości można się odwołać za pomocą notacji z kropką lub z nawiasami kwadratowymi. W dowolnej chwili można dodać
nową właściwość (wystarczy przypisać jej wartość) oraz usunąć istniejącą (za pomocą operatora `delete`). Aby sprawdzić,
czy obiekt zawiera określoną właściwość, można użyć operatora `in` na nazwie właściwości i obiekcie. Jeśli właściwość,
którą sprawdzamy, należy do instancji (czyli jest „własną” właściwością), można użyć obecnej w każdym obiekcie metody
`hasOwnProperty()`. Wszystkie właściwości są domyślnie wyliczalne, a więc zostaną uwzględnione przez pętlę `for-in` oraz
metodę `Object.keys()`.

Istnieją dwa rodzaje właściwości: danych oraz funkcji dostępowych. Właściwości danych przechowują dane i można w nich
zapisywać oraz z nich odczytywać wartości. Jeśli wartością właściwości jest funkcja, nazywa się ją metodą. Z kolei
właściwości funkcji dostępowych nie przechowują wartości, ale dają możliwość zdefiniowania funkcji settera i gettera,
które wykonują określone działania. Właściwości obu rodzajów można tworzyć bezpośrednio za pomocą notacji literału
obiektu.

Istnieją dwa rodzaje właściwości:

1. Danych, które przechowują wartości i można w nich je zapisywać oraz odczytywać
2. Funkcji dostępowych, które dają możliwość zdefiniowania funkcji `settera` i `gettera`

Właściwości mają zestaw określonych atrybutów, które definiują sposób ich działania. Oba rodzaje właściwości mają
atrybuty [[Enumerable]] i [[Configurable]]. Właściwości danych mają jeszcze atrybuty [[Writable]] i [[Value]], a
właściwości funkcji dostępowych — [[Get]] i [[Set]]. Atrybuty [[Enumerable]] i [[Configurable]] są domyślnie ustawione
na true we wszystkich właściwościach, natomiast we właściwościach danych na true jest ustawiony jeszcze
atrybut [[Writable]]. Stan atrybutów można zmieniać za pomocą metod `Object.defineProperty()`
i `Object.defineProperties()`. Do odczytu atrybutów służy metoda `Object.getOwnPropertyDescriptor()`.

Istnieją trzy sposoby na zablokowanie właściwości obiektu. Jeśli użyjemy metody Object.preventExtensions(), do obiektu
nie będzie można dodać nowych właściwości. Z kolei za pomocą metody `Object.seal()` można zapieczętować obiekt, czyli
zablokować możliwość rozszerzania obiektu i konfigurowania jego właściwości. Ostatnia z metod — `Object.freeze()` —
zamraża obiekt, czyli pieczętuje go i blokuje możliwość modyfikowania wartości jego właściwości. Podczas korzystania z
opisanych tu technik należy zachować ostrożność i trzeba koniecznie stosować tryb ścisły, tak by były zgłaszane (w
postaci komunikatów o błędach) wszelkie nieprawidłowości.
