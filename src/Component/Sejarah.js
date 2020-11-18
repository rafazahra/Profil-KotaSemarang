import React, { Component } from 'react';
import * as Mui from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

class Sejarah extends Component{
    render(){
        return(
            <div>
                <Mui.Container fixed>
                <br />
                <Mui.ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Mui.Button href="/">Beranda</Mui.Button>
                    <Mui.Button href="/Sejarah">Sejarah</Mui.Button>
                    <Mui.Button href="/Pemerintahan">Pemerintahan</Mui.Button>
                    <Mui.Button href="/Pariwisata">Pariwisata</Mui.Button>
                    <Mui.Button href="/Kuliner">Kuliner</Mui.Button>
                </Mui.ButtonGroup>
                <h1 align="center">Sejarah Kota Semarang</h1><hr />
                <Carousel>
                  <img src="/imga.jpg" width="1230" height="450"/>
                  <img src="/imgb.jpg" width="1230" height="450"/>
                  <img src="/imgc.jpg" width="1230" height="450"/>
                </Carousel>
                <br />
                <p>
                    Sejarah Semarang berawal kurang lebih pada abad ke-6 M, yaitu daerah pesisir yang bernama Pragota (sekarang menjadi Bergota) 
                    dan merupakan bagian dari kerajaan Mataram Kuno. Daerah tersebut pada masa itu merupakan pelabuhan dan di depannya terdapat 
                    gugusan pulau-pulau kecil. Akibat pengendapan, yang hingga sekarang masih terus berlangsung, gugusan tersebut sekarang menyatu 
                    membentuk daratan. Bagian kota Semarang Bawah yang dikenal sekarang ini dengan demikian dahulu merupakan laut. Pelabuhan 
                    tersebut diperkirakan berada di daerah Pasar Bulu sekarang dan memanjang masuk ke Pelabuhan Simongan, tempat armada Laksamana 
                    Cheng Ho bersandar pada tahun 1435 M. Di tempat pendaratannya, Laksamana Cheng Ho mendirikan kelenteng dan masjid yang sampai 
                    sekarang masih dikunjungi dan disebut Kelenteng Sam Po Kong (Gedung Batu).
                </p>
                <p>
                    Pada akhir abad ke-15 M ada seseorang ditempatkan oleh Kerajaan Demak, dikenal sebagai Pangeran Made Pandan (Sunan Pandanaran I), 
                    untuk menyebarkan agama Islam dari perbukitan Bergota. Dari waktu ke waktu daerah itu semakin subur, dari sela-sela kesuburan itu 
                    tumbuhlah pohon asam yang berjarak antara satu sama lain (jarang - jarang) (bahasa Jawa: asem arang), sehingga memberikan gelar 
                    atau nama daerah itu yang kemudian menjadi Semarang.
                </p>
                <p>
                    Sebagai pendiri desa, kemudian menjadi kepala daerah setempat, dengan gelar Kyai Ageng Pandan Arang I. Sepeninggalnya, pimpinan 
                    daerah dipegang oleh putranya yang bergelar Pandan Arang II (kelak disebut sebagai Sunan Bayat atau Sunan Pandanaran II atau 
                    Sunan Pandanaran Bayat atau Ki Ageng Pandanaran atau Sunan Pandanaran saja). Di bawah pimpinan Pandan Arang II, daerah Semarang 
                    semakin menunjukkan pertumbuhannya yang meningkat, sehingga menarik perhatian Sultan Hadiwijaya dari Kesultanan Pajang. Karena 
                    persyaratan peningkatan daerah dapat dipenuhi, diputuskan untuk menjadikan Semarang setingkat dengan Kabupaten. 
                    Pada tanggal 2 Mei 1547 bertepatan dengan peringatan Maulid Nabi Muhammad SAW, tanggal 12 Rabiul Awal tahun 954 H disahkan oleh 
                    Sultan Hadiwijaya setelah berkonsultasi dengan Sunan Kalijaga. Tanggal 2 Mei kemudian ditetapkan sebagai hari jadi kota Semarang. 
                    Seiring dengan jatuhnya Pajang ke tangan Kesultanan Mataram, wilayah Semarang masuk dalam wilayahnya.
                </p>
                <p>
                    Pada tanggal 15 Januari 1678 Amangkurat II dari Kesultanan Mataram di Kartasura, menggadaikan Semarang dan sekitarnya kepada VOC 
                    sebagai bagian pembayaran hutangnya. Dia mengklaim daerah Priangan dan pajak dari pelabuhan pesisir sampai hutangnya lunas. 
                    Pada tahun 1705 akhirnya Susuhunan Pakubuwono I menyerahkan Semarang kepada VOC sebagai bagian dari perjanjiannya karena telah 
                    dibantu untuk merebut kembali Keraton Kartasura. Sejak saat itu Semarang resmi menjadi kota milik VOC dan kemudian Pemerintah 
                    Hindia Belanda. Pada tahun 1906 dengan Stadblat Nomor 120 tahun 1906 dibentuklah pemerintah Gemeente. Pemerintah kota besar ini 
                    dikepalai oleh seorang Burgemeester (Wali kota). Sistem Pemerintahan ini dipegang oleh orang-orang Belanda berakhir pada tahun 1942 
                    dengan datangnya pemerintahan pendudukan Jepang.
                </p>
                <p>
                    Pada masa Jepang terbentuklah pemerintah daerah Semarang yang dikepalai Militer (Shico (kanji: 市長 )) dari Jepang. Didampingi oleh 
                    dua orang wakil (Fuku Shico (kanji: 副市長)) yang masing-masing dari Jepang dan seorang bangsa Indonesia. Tidak lama sesudah 
                    kemerdekaan, yaitu tanggal 15 sampai 20 Oktober 1945 terjadilah peristiwa kepahlawanan pemuda-pemuda Semarang yang bertempur melawan 
                    balatentara Jepang yang bersikeras tidak bersedia menyerahkan diri kepada Pasukan Republik. Perjuangan ini dikenal sebagai 
                    Pertempuran Lima Hari.
                </p>
                <p>
                    Tahun 1946 Inggris atas nama Sekutu menyerahkan kota Semarang kepada pihak Belanda. Ini terjadi pada tanggal 16 Mei 1946. 
                    Tanggal 3 Juni 1946 dengan tipu muslihat, pihak Belanda menangkap Mr. Imam Sudjahri, wali kota Semarang sebelum proklamasi kemerdekaan. 
                    Selama masa pendudukan Belanda tidak ada pemerintahan daerah kota Semarang. Namun para pejuang di bidang pemerintahan tetap menjalankan 
                    pemerintahan di daerah pedalaman atau daerah pengungsian di luar kota sampai dengan bulan Desember 1948. daerah pengungsian 
                    berpindah-pindah mulai dari kota Purwodadi, Gubug, Kedungjati, Salatiga, dan akhirnya di Yogyakarta. Pimpinan pemerintahan berturut-turut 
                    dipegang oleh R. Patah, R. Prawotosudibyo dan Mr. Ichsan. Pemerintahan pendudukan Belanda yang dikenal dengan Recomba berusaha membentuk 
                    kembali pemerintahan Gemeente seperti pada masa kolonial dulu di bawah pimpinan R Slamet Tirtosubroto. Hal itu tidak berhasil, 
                    karena dalam asa pemulihan kedaulatan harus menyerahkan kepada Komandan KMKB Semarang pada bulan Februari 1950. tanggal I April 1950 
                    Mayor Suhardi, Komandan KMKB. menyerahkan kepemimpinan pemerintah daerah Semarang kepada Mr Koesoedibyono, seorang pegawai tinggi 
                    Kementerian Dalam Negeri di Yogyakarta. Ia menyusun kembali aparat pemerintahan guna memperlancar jalannya pemerintahan.
                </p>
                
                </Mui.Container>    
            </div>
        )
    }
}

export default Sejarah;