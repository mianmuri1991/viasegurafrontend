import React, { Component } from 'react';

export default class Tabla extends Component {
    render() {
        return <div>
        <div className="table-responsive ">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">&nbsp;&nbsp;Fecha&nbsp;  </th>
                        <th scope="col">&nbsp;&nbsp;&nbsp;&nbsp;Hora&nbsp;</th>
                        <th scope="col">&nbsp;&nbsp;Jornada</th>
                        <th scope="col">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Latitud&nbsp;&nbsp;</th>
                        <th scope="col">&nbsp;&nbsp;&nbsp;Longitud&nbsp;&nbsp;</th>
                        <th scope="col">&nbsp;&nbsp;&nbsp;&nbsp;Sector&nbsp;&nbsp;</th>
                        <th scope="col">Severidad</th>
                    </tr>
                </thead>
            </table>
        </div>
        <div className="table-responsive "  style={{ height: "170px" }}>
            <table className="table">
                <tbody>
                    <tr>
                        <td> 1/1/2022 </td>
                        <td> 0:19 </td>
                        <td> MADRUGADA </td>
                        <td> -2,189562 </td>
                        <td> -79,9308768 </td>
                        <td>Av. Barcelona</td>
                        <td> Grave </td>
                    </tr>
                    <tr>
                        <td> 5/1/2022 </td>
                        <td> 1:54 </td>
                        <td> MADRUGADA </td>
                        <td> -2,192547 </td>
                        <td> -79,934612 </td>
                        <td>Av. Barcelona</td>
                        <td> Leve </td>
                    </tr>
                    <tr>
                        <td> 6/1/2022 </td>
                        <td> 3:13 </td>
                        <td> MADRUGADA </td>
                        <td> -2,191935 </td>
                        <td> -79,934038 </td>
                        <td>Av. Barcelona</td>
                        <td> Leve </td>
                    </tr>
                    <tr>
                        <td> 9/1/2022 </td>
                        <td> 22:40 </td>
                        <td> NOCHE </td>
                        <td> -2,1883359 </td>
                        <td> -79,9266188 </td>
                        <td>Av. Barcelona</td>
                        <td> Fatal </td>
                    </tr>
                    <tr>
                        <td> 11/1/2022 </td>
                        <td> 15:00 </td>
                        <td> TARDE </td>
                        <td> -2,188658 </td>
                        <td> -79,916894 </td>
                        <td>Av. Barcelona</td>
                        <td> Grave </td>
                    </tr>
                    <tr>
                        <td> 12/1/2022 </td>
                        <td> 0:03 </td>
                        <td> MADRUGADA </td>
                        <td> -2,190285 </td>
                        <td> -79,9320858 </td>
                        <td>Av. Barcelona</td>
                        <td> Leve </td>
                    </tr>
                    <tr>
                        <td> 17/1/2022 </td>
                        <td> 1:00 </td>
                        <td> MADRUGADA </td>
                        <td> -2,1882576 </td>
                        <td> -79,9282001 </td>
                        <td>Av. Barcelona</td>
                        <td> Fatal </td>
                    </tr>
                    <tr>
                        <td> 17/1/2022 </td>
                        <td> 14:00 </td>
                        <td> TARDE </td>
                        <td> -2,1929544 </td>
                        <td> -79,9352644 </td>
                        <td>Av. Barcelona</td>
                        <td> Grave </td>
                    </tr>
                    <tr>
                        <td> 20/1/2022 </td>
                        <td> 11:50 </td>
                        <td> MAÑANA </td>
                        <td> -2,1881285 </td>
                        <td> -79,9268802 </td>
                        <td>Av. Barcelona</td>
                        <td> Grave </td>
                    </tr>
                    <tr>
                        <td> 22/1/2022 </td>
                        <td> 20:00 </td>
                        <td> NOCHE </td>
                        <td> -2,1881026 </td>
                        <td> -79,9274121 </td>
                        <td>Av. Barcelona</td>
                        <td> Grave </td>
                    </tr>
                    <tr>
                        <td> 23/1/2022 </td>
                        <td> 7:45 </td>
                        <td> MAÑANA </td>
                        <td> -2,1881234 </td>
                        <td> -79,927113 </td>
                        <td>Av. Barcelona</td>
                        <td> Grave </td>
                    </tr>
                    <tr>
                        <td> 24/1/2022 </td>
                        <td> 1:30 </td>
                        <td> MADRUGADA </td>
                        <td> -2,188994 </td>
                        <td> -79,9299211 </td>
                        <td>Av. Barcelona</td>
                        <td> Grave </td>
                    </tr>
                    <tr>
                        <td> 25/1/2022 </td>
                        <td> 16:00 </td>
                        <td> TARDE </td>
                        <td> -2,1886405 </td>
                        <td> -79,9191135 </td>
                        <td>Av. Barcelona</td>
                        <td> Grave </td>
                    </tr>
                    <tr>
                        <td> 27/1/2022 </td>
                        <td> 9:00 </td>
                        <td> MAÑANA </td>
                        <td> -2,1879705 </td>
                        <td> -79,9251629 </td>
                        <td>Av. Barcelona</td>
                        <td> Grave </td>
                    </tr>
                    <tr>
                        <td> 27/1/2022 </td>
                        <td> 19:00 </td>
                        <td> NOCHE </td>
                        <td> -2,188108 </td>
                        <td> -79,927576 </td>
                        <td>Av. Barcelona</td>
                        <td> Grave </td>
                    </tr>
                    <tr>
                        <td> 29/1/2022 </td>
                        <td> 13:50 </td>
                        <td> TARDE </td>
                        <td> -2,188143 </td>
                        <td> -79,926842 </td>
                        <td>Av. Barcelona</td>
                        <td> Grave </td>
                    </tr>
                    <tr>
                        <td> 30/1/2022 </td>
                        <td> 17:10 </td>
                        <td> TARDE </td>
                        <td> -2,1882203 </td>
                        <td> -79,9255596 </td>
                        <td>Av. Barcelona</td>
                        <td> Grave </td>
                    </tr>
                    <tr>
                        <td> 31/1/2022 </td>
                        <td> 16:15 </td>
                        <td> TARDE </td>
                        <td> -2,1888174 </td>
                        <td> -79,91879173 </td>
                        <td>Av. Barcelona</td>
                        <td> Grave </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>;
    }
}
