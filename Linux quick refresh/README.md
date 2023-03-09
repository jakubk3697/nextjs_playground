# Polecenia

## Operacje na plikach

### Usuwanie katalogu z zawartością

```bash 

rm -rf katalog

```

### Kopiowanie katalogu z zawartością

```bash

cp -r katalog katalog2

```

### Odczytywanie zawartości pliku

```bash

cat file.txt

less file.txt

```

### Edytowanie zawartości pliku

```bash

vim file.txt

```

### Liczenie linii (i nie tylko) w pliku

```bash

wc -l file.txt

```

### Zliczanie wystąpień słowa w pliku

```bash

grep -c "słowo" file.txt

```

### Stworzenie wielu plików

```bash

touch file{1..10}.txt

```

### Zmiana nazwy pliku lub katalogu

```bash

mv file.txt file2.txt


```

### Wyszykiwanie pliku

```bash

find . -name "*nazwa*" // nazwa zawiera

find . -name "*nazwa" // nazwa kończy się na

find . -name "nazwa*" // nazwa zaczyna się od

find . -name "nazwa" // dokładna nazwa

find . -iname "nazwa" // dokładna nazwa, bez względu na wielkość liter

```


### Zmiana uprawnień

Plik po stworzeniu ma uprawnienia -rw-r--r-- co oznacza, że właściciel może go czytać i zapisywać, grupa może go tylko czytać, a reszta użytkowników może go tylko czytać.

```bash

chmod +x file.txt // +x spowoduje dodanie uprawnień do wykonania pliku dla właściciela, grupy i reszty użytkowników

chmod 777 file.txt // 777 spowoduje nadanie uprawnień do wykonania pliku dla właściciela, grupy i reszty użytkowników

```

### Pakowanie i rozpakowywanie plików

```bash

gzip file.txt // spakowanie pojedyńczego pliku

gunzip file.txt.gz // rozpakowanie pojedyńczego pliku

tar -czpf utworzoneArchiwum.tar ./ // spakowanie kilku plików { (c - create, z - gzip, p - permission, f - file) nazwa pliku ścieżka do pliku }

tar -xvzf utworzoneArchiwum.tar // rozpakowanie kilku plików { (x - extract, v - verbose, z - gzip, f - file) nazwa pliku }

tar -ztf utworzoneArchiwum.tar // odczytanie zawartości archiwum

tar -ztf utworzoneArchiwum.tar | less // odczytanie zawartości archiwum z możliwością przewijania

//rozpakowanie archiwum do innego katalogu

tar -zxf utworzoneArchiwum.tar -C /home/user/ // rozpakowanie archiwum do innego katalogu

```

### Wyszukiwanie plików za pomocą grep oraz ls

```bash

ls -l | grep "nazwa" // wyszukiwanie plików za pomocą ls

ls -l | grep "nazwa" | wc -l // wyszukiwanie plików za pomocą ls i zliczanie ich

````

### Wyszukiwanie we wszystkich plikach w katalogu frazy

```bash

cat file*.txt | grep "fraza" | sort // wyszukiwanie we wszystkich plikach w katalogu frazy i sortowanie wyników

```