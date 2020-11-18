import React, { Component } from 'react';
import * as Mui from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

class Beranda extends Component{
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
                <h1 align="center">Pemerintahan Kota Semarang</h1><hr />
                <Carousel>
                  <img src="/imgd.jpg" width="1230" height="450"/>
                  <img src="/imge.jpg" width="1230" height="450"/>
                  <img src="/imgf.jpg" width="1230" height="450"/>
                </Carousel>
                <br /><br />
                <table boder="1" cellpadding="10">
                    <tr>
                        <td bgcolor="yellow">No</td>
                        <td bgcolor="yellow">Wali Kota</td>
                        <td bgcolor="yellow">Awal Menjabat</td>
                        <td bgcolor="yellow">Akhir Menjabat</td>
                        <td bgcolor="yellow">Prd.</td>
                        <td bgcolor="yellow">Wakil Wali Kota</td>
                    </tr>
                    <tr>
                        <td>1.</td>
                        <td>Mr. Moch.Ichsan</td>
                        <td>1945</td>
                        <td>1949</td>
                        <td>1</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Mr. Koesoebiyono Tjondrowibowo</td>
                        <td>1949</td>
                        <td>1951</td>
                        <td>2</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>R.M. Hadisoebeno Sosrowerdojo</td>
                        <td>1951</td>
                        <td>1958</td>
                        <td>3</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>4.</td>
                        <td>Abdulmadjid Djojoadiningrat</td>
                        <td>1958</td>
                        <td>1960</td>
                        <td>4</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>5.</td>
                        <td>RM Soebagyono Tjondrokoesoemo</td>
                        <td>1961</td>
                        <td>1964</td>
                        <td>5</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>6.</td>
                        <td>Mr. Wuryanto</td>
                        <td>1964</td>
                        <td>1966</td>
                        <td>6</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>7.</td>
                        <td>Letkol. Soeparno</td>
                        <td>1966</td>
                        <td>1967</td>
                        <td>7</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>8.</td>
                        <td>Letkol. R. Warsito</td>
                        <td>1967</td>
                        <td>1973</td>
                        <td>8</td>
                    </tr>
                        <td>9.</td>
                        <td>Kolonel Hadijanto</td>
                        <td>1973</td>
                        <td>1980</td>
                        <td>9</td>
                    <tr>
                    <tr>
                        <td>10.</td>
                        <td>Kol. H. Iman Soeparto Tjakrajoeda, SH.</td>
                        <td>1980</td>
                        <td>1990</td>
                        <td>10 dan 11</td>
                    </tr>
                    <tr>
                        <td>11.</td>
                        <td>Kol. H. Soetrisno Suharto</td>
                        <td>1990</td>
                        <td>2000</td>
                        <td>12 dan 13</td>
                    </tr>
                    <tr>
                        <td>12.</td>
                        <td>H. Sukawi Sutarip, S.H., S.E.</td>
                        <td>2000 dan 2005</td>
                        <td>2005 dan 2010</td>
                        <td>14 dan 15</td>
                        <td>Mahfudz Ali</td>
                    </tr>
                    <tr>
                        <td>13.</td>
                        <td>Drs. H. Soemarmo HS. M.Si</td>
                        <td>19 Juli 201021</td>
                        <td>21 Mei 2013</td>
                        <td>16</td>
                        <td>Hendrar Prihadi</td>
                    </tr>
                    <tr>
                        <td>14.</td>
                        <td>Hendrar Prihadi, S.E., M.M.</td>
                        <td>21 Mei 2013 dan 17 Februari 2016</td>
                        <td></td>
                    </tr>


                </table>
                
                </Mui.Container>    
            </div>
        )
    }
}

export default Beranda;