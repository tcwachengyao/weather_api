const weather_url = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-383E25C3-5F64-4B68-A08D-B0716D9E1291&format=JSON&locationName=%E8%87%BA%E4%B8%AD%E5%B8%82";

const all_content = document.querySelector('.all');

fetch (weather_url)
    .then (function(response) {
        return response.json();
    })
    .then (function(get_json) {
        let this_datas = get_json.records.location;
        console.log(this_datas);
        this_datas.forEach(this_data => {
            let this_city = this_data.locationName; //城市名
            let inner_this_city = all_content.querySelector('h2');
            inner_this_city.innerHTML = this_city;

            let this_city_datas = this_data.weatherElement;
            this_city_datas.forEach((this_city_data, idx) => {
                // console.log(idx);
                console.log(this_city_data);
                let weather_type = this_city_data.elementName; //氣象名
                let inner_this_main = all_content.querySelector('.main');
                let weather_time = this_city_data.time; //氣象
                let type_name = ['天氣','降雨率','最低溫度','舒適度','最高溫度']
                inner_this_main.innerHTML += 
                    `<p>${weather_type}${type_name[idx]}</p>
                    <ul>
                        <li>
                            ${weather_time[1].parameter.parameterName}
                        </li>
                    </ul>`;
            });
        });
        
    })


    // inner_this_main.innerHTML += 
    //                 `<p>${weather_type}</p>
    //                 <ul>
    //                     <li>
    //                         <ul>
    //                             <li>
    //                                 ${weather_time[idx].startTime ? weather_time[idx].startTime : ''}
    //                             </li>
    //                             <li>
    //                                 <ul>
    //                                     <li>
    //                                         ${weather_time[idx].parameter.parameterName}
    //                                     </li>
    //                                 </ul>
    //                             </li>
    //                             <li>
    //                                 ${weather_time[idx].endTime ? weather_time[idx].endTime : ''}
    //                             </li>
    //                         </ul>
    //                     </li>
    //                 </ul>`;