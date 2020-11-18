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
                <h1 align="center">Kuliner khas Kota Semarang</h1><hr />
                <Carousel>
                  <img src="/img1.jpg" width="1230" height="450"/>
                  <img src="/img2.jpg" width="1230" height="450"/>
                  <img src="/img4.jpg" width="1230" height="450"/>
                </Carousel>
                <br /><br />
                <h2>1. Lumpia Semarang</h2><br />
                    <img src="/lumpia.jpg"></img>
                <p>
                    Lumpia semarang <i>(atau loenpia semarang) (bahasa Jawa: ꦭꦸꦤ꧀ꦥꦶꦪꦃ, translit. Lunpiyah)</i> adalah makanan semacam 
                    rollade yang berisi rebung, telur, dan daging ayam atau udang. Cita rasa lumpia semarang adalah perpaduan 
                    rasa antara Tionghoa dan Indonesia karena pertama kali dibuat oleh seorang keturunan Tionghoa yang menikah 
                    dengan orang Indonesia dan menetap di Semarang, Jawa Tengah.[butuh rujukan] Makanan ini mulai dijajakan dan 
                    dikenal di Semarang ketika pesta olahraga GANEFO diselenggarakan pada masa pemerintahan Presiden Soekarno.
                </p>
                <br /><br />
                <h2>2. Tahu Gimbal</h2><br />
                    <img src="/tahugimbal.jpg"></img>
                <p>
                    Tahu gimbal <i>(Hanacaraka:ꦠꦲꦸ​ꦒꦶꦩ꧀ꦧꦭ꧀) adalah makanan khas Kota Semarang</i> Makanan ini terdiri dari 
                    tahu goreng, rajangan kol mentah, lontong, taoge, telur, dan gimbal (udang yang digoreng dengan tepung) dan 
                    dicampur dengan bumbu kacang yang khas karena menggunakan petis udang. Beda dengan saus kacang untuk pecel 
                    Madiun yang agak kental. Saus bumbu kacang untuk tahu gimbal agak sedikit encer.
                </p>
                <br /><br />
                <h2>3. Bandeng Presto</h2><br />
                    <img src="/bandeng.jpg"></img>
                <p>
                    Bandeng presto <i>(bahasa Jawa: ꦧꦤ꧀ꦢꦼꦁ​ꦥꦿꦺꦱ꧀ꦠꦺꦴ, translit. Bandeng prèsto)</i> adalah makanan khas Indonesia 
                    yang berasal dari Kota Semarang, Jawa Tengah. Makanan ini dibuat dari ikan bandeng (Chanos chanos) yang 
                    dibumbui dengan bawang putih, kunyit dan garam. Ikan bandeng ini kemudian dimasak pada alas daun pisang dengan 
                    cara presto. Presto adalah cara memasak dengan uap air yang bertekanan tinggi. Makanan yang dimasak dengan cara 
                    ini diletakkan dalam panci yang dapat dikunci dengan rapat. Air yang berada di dalam panci ini kemudian dipanaskan 
                    hingga mendidih. Uap air yang timbul akan memasak makanan yang berada di dalam panci ini. Karena ikan bandeng 
                    terkenal memiliki banyak duri, bandeng presto adalah makanan yang digemari karena dengan cara masak presto duri-duri 
                    ini menjadi sangat lunak.
                </p>
                <br /><br />
                </Mui.Container>    
            </div>
        )
    }
}

export default Sejarah;