# Co to jest Prettier?

Prettier to uparty formater kodu z obsługą:

* JavaScript (w tym funkcje eksperymentalne)
* [JSX](https://facebook.github.io/jsx/)
* [Angular](https://angular.io/)
* [Vue](https://vuejs.org/)
* [Flow](https://flow.org/)
* [TypeScript](https://www.typescriptlang.org/)
* CSS, [Less](https://lesscss.org/), i [SCSS](https://sass-lang.com/)
* [HTML](https://en.wikipedia.org/wiki/HTML)
* [Ember/Handlebars](https://handlebarsjs.com/)
* [JSON](https://www.json.org/json-en.html)
* [GraphQL](https://graphql.org/)
* [Markdown](https://commonmark.org/), w tym [GFM](https://github.github.com/gfm/) i [MDX](https://mdxjs.com/)
* [YAML](https://yaml.org/)

Usuwa całą oryginalną stylizację i zapewnia, że cały wydrukowany kod jest zgodny ze spójnym stylem. (Zobacz ten [wpis
na blogu](https://archive.jlongster.com/A-Prettier-Formatter))

Prettier bierze twój kod i drukuje go od nowa, biorąc pod uwagę długość linii.

Na przykład weź następujący kod:

```javascript
foo(arg1, arg2, arg3, arg4);
```

Mieści się w jednej linii, więc pozostanie bez zmian. Jednak wszyscy spotkaliśmy się z taką sytuacją:

```javascript
foo(reallyLongArg(), omgSoManyParameters(), IShouldRefactorThis(), isThereSeriouslyAnotherOne());
```

Nagle nasz poprzedni format wywoływania funkcji załamuje się, ponieważ jest za długi. Prettier wykona dla ciebie żmudną
pracę polegającą na przedrukowaniu go w ten sposób:

```javascript
foo(
  reallyLongArg(),
  omgSoManyParameters(),
  IShouldRefactorThis(),
  isThereSeriouslyAnotherOne()
);
```

Prettier wymusza spójny styl kodu (tj. Formatowanie kodu, które nie wpłynie na AST) w całej bazie kodu, ponieważ
lekceważy oryginalny styl *, analizując go i ponownie drukując przeanalizowanego AST z własnymi regułami, które
przyjmują maksymalną długość linii pod uwagę, w razie potrzeby zawijając kod.

# Dlaczego Prettier?

## Tworzenie i egzekwowanie przewodnika stylu

<hr>

Zdecydowanie największym powodem przyjęcia Prettier jest powstrzymanie wszystkich toczących się debat na temat stylów.
Powszechnie przyjmuje się, że posiadanie wspólnego przewodnika stylu jest cenne dla projektu i zespołu, ale dotarcie do
niego jest bardzo bolesnym i niewdzięcznym procesem. Ludzie podchodzą bardzo emocjonalnie do poszczególnych sposobów
pisania kodu i nikt nie lubi spędzać czasu na pisaniu i odbieraniu gnidów.

Dlaczego więc wybrać „Przewodnik po ładniejszym stylu” zamiast jakiegokolwiek innego losowego przewodnika po stylu?
Ponieważ Prettier to jedyny „przewodnik po stylu”, który jest w pełni automatyczny. Nawet jeśli Prettier nie sformatuje
całego kodu w 100% tak, jak chcesz, warto „poświęcić”, biorąc pod uwagę wyjątkowe zalety Prettier, nie sądzisz?

* „Chcemy uwolnić mentalne wątki i zakończyć dyskusje wokół stylu. Dyskusje te, choć czasami owocne, są w większości
  marnotrawne”.
* „Dosłownie inżynier musiał wykonać ogromny wysiłek, aby wyczyścić cały nasz kod, ponieważ debatowaliśmy nad stylem
  trójskładnikowym przez najdłuższy czas i byliśmy w tym niespójni. To było głupie, ale była to dziwna, trwająca „wielka
  debata”, która marnowała wiele małych bitów tam iz powrotem. O wiele łatwiej jest nam się teraz zgodzić: po prostu
  uruchom Prettier i idź w tym stylu.
* „Zmęczenie się mówieniem ludziom, jak stylizować kod produktu”.
* „Przypomina mi to, jak Steve Jobs nosił codziennie te same ubrania, ponieważ ma milion decyzji do podjęcia i nie
  chciał zawracać sobie głowy robieniem tak błahych, jak wybieranie ubrań. Myślę, że Ładniejsza jest właśnie taka.

## Formatowanie kodu za pomocą programu Prettier

Nowoczesną alternatywą dla wprowadzania przy użyciu lintera dyscypliny formatowania kodu jest automatyczne analizowanie
i formatowanie kodu za pomocą narzędzia takiego jak [Prettier](https://prettier.io).

Prettier wymusza spójny styl, analizując kod i ponownie drukując go z własnymi regułami, które uwzględniają maksymalną
długość linii, zawijając kod w razie potrzeby.

### Konfiguracja prettier w VSC

#### Domyślny formater

Aby upewnić się, że to rozszerzenie jest używane z innymi rozszerzeniami, które mogłeś zainstalować, pamiętaj, aby
ustawić je jako domyślny program formatujący w ustawieniach VS Code. To ustawienie można ustawić dla wszystkich języków
lub według określonego języka.

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

Jeśli chcesz wyłączyć `Prettier` w określonym języku, możesz utworzyć plik `.prettierignore` lub użyć ustawień
editor.defaultFormatter programu VS Code.

Poniższe będzie używać Prettier dla wszystkich języków z wyjątkiem JavaScript.

{
"editor.defaultFormatter": "esbenp.prettier-vscode",
"[javascript]": {
"editor.defaultFormatter": "<inny program formatujący>"
}
}

Poniższe użyje Prettier tylko dla JavaScript.

{
"editor.defaultFormatter": "<inny program formatujący>",
"[javascript]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
}
}

Dodatkowo możesz wyłączyć formatowanie podczas zapisywania dla określonych języków, jeśli nie chcesz, aby były one
automatycznie formatowane.

{
"[javascript]": {
"editor.formatOnSave": fałsz
}
}

Ładniejsza rozdzielczość
To rozszerzenie będzie używać ładniejszych z lokalnych zależności Twojego projektu (zalecane). Gdy
prettier.resolveGlobalModules ma wartość true, rozszerzenie może również próbować rozwiązać moduły globalne. Jeśli
ładniejsza nie zostanie zainstalowana lokalnie z zależnościami projektu lub globalnie na komputerze, zostanie użyta
wersja ładniejsza, która jest dołączona do rozszerzenia.

Aby zainstalować ładniejsze w swoim projekcie i przypiąć jego wersję zgodnie z zaleceniami, uruchom:

npm i -D -E prettier

UWAGA: Zostaniesz poproszony o potwierdzenie, że chcesz, aby rozszerzenie załadowało moduł Prettier. Ma to na celu
upewnienie się, że nie ładujesz modułu lub skryptu, który nie jest zaufany.

Wtyczki
To rozszerzenie obsługuje wtyczki Prettier, gdy używasz lokalnie lub globalnie rozwiązanej wersji Prettier. Jeśli masz
Prettier i wtyczkę zarejestrowaną w swoim package.json, to rozszerzenie spróbuje zarejestrować język i zapewnić
automatyczne formatowanie kodu dla języków wbudowanych i wtyczek.

Konfiguracja
Istnieje wiele opcji konfigurowania Prettier za pomocą tego rozszerzenia. Możesz użyć ustawień programu VS Code,
ładniejszych plików konfiguracyjnych lub pliku .editorconfig. Ustawienia programu VS Code mają być używane jako rezerwa
i generalnie są przeznaczone tylko do użytku w plikach innych niż projekt. Zaleca się, aby zawsze dołączyć do projektu
ładniejszy plik konfiguracyjny, określający wszystkie ustawienia projektu. Zapewni to, że bez względu na to, jak
uruchomisz ładniej - z tego rozszerzenia, z CLI lub z innego IDE z ładniejszymi, zostaną zastosowane te same ustawienia.

Zalecanym podejściem jest używanie plików konfiguracji Prettier do ustawiania opcji formatowania. Opcje są przeszukiwane
rekursywnie w dół od formatowanego pliku, więc jeśli chcesz zastosować ładniejsze ustawienia do całego projektu, po
prostu ustaw konfigurację w katalogu głównym. Ustawienia można również skonfigurować za pomocą programu VS Code — jednak
ustawienia te będą miały zastosowanie tylko podczas uruchamiania rozszerzenia, a nie podczas uruchamiania ładniejszego
za pomocą wiersza poleceń.

Konfiguracja opcji domyślnych
Niektórzy użytkownicy mogą nie chcieć tworzyć nowej konfiguracji Prettier dla każdego projektu lub używać ustawień VS
Code. Aby ustawić domyślną konfigurację, ustaw prettier.configPath. Należy jednak uważać, jeśli ta wartość jest
ustawiona, ta wartość będzie zawsze używana, a lokalne pliki konfiguracyjne będą ignorowane.

Ustawienia kodu programu Visual Studio
Możesz użyć ustawień VS Code, aby skonfigurować ładniejsze. Ustawienia zostaną odczytane z (wymienione według
priorytetu):

Ładniejszy plik konfiguracyjny
.editorconfig
Ustawienia kodu programu Visual Studio (ignorowane, jeśli obecna jest jakakolwiek inna konfiguracja)
UWAGA: Jeśli istnieje jakikolwiek lokalny plik konfiguracyjny (np. .prettierrc), ustawienia VS Code NIE będą używane.

Stosowanie
Korzystanie z palety poleceń (CMD/CTRL + Shift + P)

1. CMD + Shift + P -> Formatuj dokument
   LUB
1. Wybierz tekst, który chcesz upiększyć
1. CMD + Shift + P -> Wybór formatu

Skróty klawiszowe
Visual Studio Code udostępnia domyślne skróty klawiaturowe do formatowania kodu. Możesz dowiedzieć się o nich dla każdej
platformy w dokumentacji VS Code

## **Jak to się ma do ESLint/TSLint/stylelint itp.?**

Lintnery mają dwie kategorie zasad:

- Zasady formatowania np.: eg: [max-len](https://eslint.org/docs/latest/rules/max-len), no-mixed-spaces-and-tabs,
  keyword-spacing, comma-style…

`Prettier` łagodzi potrzebę stosowania całej tej kategorii zasad! Ładniejsza zamierza przedrukować cały program od zera
w spójny sposób, więc programista nie może się już tam pomylić.

- Zasady jakości kodu np.: [no-unused-vars](https://eslint.org/docs/latest/rules/no-unused-vars), no-extra-bind,
  no-implicit-globals, prefer-promise-reject-errors…

`Prettier` nie robi nic, aby pomóc w tego rodzaju zasadach. Są one również najważniejszymi z tych dostarczanych przez
linterów, ponieważ mogą wyłapać prawdziwe błędy w twoim kodzie!

Innymi słowy, użyj `Prettier` do formatowania i linterów do łapania błędów!

#### **Integracja z lintnerami**

Lintery zazwyczaj zawierają nie tylko zasady jakości kodu, ale także zasady stylistyczne. Większość reguł stylistycznych
jest niepotrzebna przy użyciu Prettier, ale co gorsza – mogą kolidować z Prettier! Używaj Prettier w przypadku problemów
z formatowaniem kodu i linterów w przypadku problemów z jakością kodu. Na szczęście łatwo jest wyłączyć reguły, które
kolidują lub są niepotrzebne z `Prettier`, korzystając z tych gotowych konfiguracji:

- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier)

Sprawdź powyższe linki, aby uzyskać instrukcje dotyczące instalacji i konfiguracji.

#### **Uwagi**

Po pierwsze, mamy wtyczki, które pozwalają uruchomić `Prettier` tak, jakby to była reguła lintera:

- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
- [stylelint-prettier](https://github.com/prettier/stylelint-prettier)

Wreszcie mamy narzędzia, które działają `prettier`, a potem natychmiast, na przykład `eslint` --fix na plikach.

- [prettier-eslint](https://github.com/prettier/prettier-eslint)
- [prettier-stylelint](https://github.com/hugomrdias/prettier-stylelint)

Są one przydatne, jeśli jakiś aspekt produkcji `Prettier` sprawia, że `Prettier` jest dla ciebie całkowicie
bezużyteczna. Wtedy możesz mieć na przykład `eslint --fix` napraw to za ciebie. Minusem jest to, że te narzędzia są
znacznie wolniejsze niż tylko uruchamianie `Prettier`.

## eslint-config-prettier

Wyłącza wszystkie reguły, które są niepotrzebne lub mogą kolidować z Prettier.

Dzięki temu możesz korzystać z ulubionej konfiguracji, którą można udostępniać, nie pozwalając, aby jej wybory
stylistyczne przeszkadzały podczas korzystania z Prettier.

Zauważ, że ta konfiguracja tylko wyłącza reguły, więc ma sens używanie jej tylko razem z inną konfiguracją.

### Instalacja

```cmd
npm install --save-dev eslint-config-prettier
```

Następnie dodaj `"prettier"` do tablicy `"extends"` w pliku `.eslintrc.*`. Pamiętaj, aby umieścić go na końcu, aby
uzyskać szansę na zastąpienie innych konfiguracji.


```json
{
  "extends": [
    "some-other-config-you-use",
    "prettier"
  ]
}
```
