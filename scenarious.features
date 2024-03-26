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
