# Luas Persegi Panjang

## Project UTS RPL Kelompok 3
- 9012682327001 -	Gabriel Mediose A.S
- 9012682327002	- Zainal Umari
- 9012682327007	- Agus Andreansyah
- 9012682327008	- Arif Athallah
- 9012682327009	- Nurul Hijriani
- 9012682327011	- Dite Geovani

## Cara Melakukan Testing:

1. **Clone Repository:**
   - Jalankan perintah berikut:
     ```bash
     git clone https://github.com/zain3ie/MIK-UTS-RPL-Kelompok-3.git
     ```

2. **Instal Dependensi:**
   - Install dependensi yang diperlukan:
     ```bash
     npm install
     ```
     atau
     ```bash
     yarn install
     ```

3. **Menjalankan Unit Test:**
   - Untuk menjalankan unit test, gunakan perintah:
     ```bash
     npm test
     ```
     atau
     ```bash
     yarn test
     ```

## Cara Menjalankan Aplikasi:

1. **Menjalankan Aplikasi:**
   - Jalankan aplikasi dengan perintah:
     ```bash
     npm start
     ```
     atau
     ```bash
     yarn start
     ```
   - Aplikasi akan berjalan di localhost:3000 secara default

## Acceptance Scenario

```plaintext
Feature: Menghitung Luas Persegi Panjang

  Scenario: Menghitung luas persegi panjang dengan lebar dan panjang yang valid
    Given pengguna membuka aplikasi kalkulator
    When pengguna memasukkan nilai lebar "5" dan nilai tinggi "10"
    And pengguna menekan tombol hitung
    Then aplikasi menampilkan hasil luas "50"

  Scenario: Menghitung luas persegi panjang dengan lebar yang tidak valid
    Given pengguna membuka aplikasi kalkulator
    When pengguna memasukkan nilai lebar "a" dan nilai panjang "10"
    And pengguna menekan tombol hitung
    Then aplikasi menampilkan pesan kesalahan "Silakan masukkan nilai lebar yang valid"

  Scenario: Menghitung luas persegi panjang dengan panjang yang tidak valid
    Given pengguna membuka aplikasi kalkulator
    When pengguna memasukkan nilai lebar "5" dan nilai panjang "-10"
    And pengguna menekan tombol hitung
    Then aplikasi menampilkan pesan kesalahan "Silakan masukkan nilai panjang yang valid"

```

## Unit Testing:

  [Source code](https://github.com/zain3ie/MIK-UTS-RPL-Kelompok-3/blob/main/test/rectangle.test.js)

## Programing:

1. **Stage 1 (**[Source code](https://github.com/zain3ie/MIK-UTS-RPL-Kelompok-3/blob/stage_1/functions/rectangle.js)**):**
- Hasil test
![Stage 1](test_outcomes/stage%201.png)

2. **Stage 2 (**[Source code](https://github.com/zain3ie/MIK-UTS-RPL-Kelompok-3/blob/stage_2/functions/rectangle.js)**):**
- Hasil test
![Stage 2](test_outcomes/stage%202.png)

3. **Stage 3 (**[Source code](https://github.com/zain3ie/MIK-UTS-RPL-Kelompok-3/blob/stage_3/functions/rectangle.js)**):**
- Hasil test
![Stage 3](test_outcomes/stage%203.png)

4. **Refactoring 1 (**[Source code](https://github.com/zain3ie/MIK-UTS-RPL-Kelompok-3/blob/refactoring_1/functions/rectangle.js)**)**

5. **Refactoring 2 (**[Source code](https://github.com/zain3ie/MIK-UTS-RPL-Kelompok-3/blob/refactoring_2/functions/rectangle.js)**)**

## Video Pembuatan Project:

[![Video YouTube](https://img.youtube.com/vi/nGxamlFcR0c/0.jpg)](https://www.youtube.com/watch?v=nGxamlFcR0c)
