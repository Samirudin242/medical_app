function getDate() {
    const date = new Date().toJSON().slice(0, 10);
    let weekday = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu'][new Date().getDay()]
    let month = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"][new Date().getMonth()]
    let dateResult = `${weekday}, ${date.slice(8,10)} ${month} ${date.slice(0,4)}`;
    return dateResult
}


function getTomorrow() {
    var tomorrow = new Date();
    tomorrow.setDate(new Date().getDate()+1);
    const date = tomorrow.toJSON().slice(0, 10);
    let weekday = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu'][new Date().getDay()+1 > 6 ? 0 : new Date().getDay()+1]
    let month = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"][new Date().getMonth()]
    let dateResult = `${weekday}, ${date.slice(8,10)} ${month} ${date.slice(0,4)}`;
    return dateResult
}


function dateConvertion(string) {
    let weekday = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu'][new Date(string).getDay()]
    let month = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"][new Date(string).getMonth()]
    let dateResult = `${weekday}, ${string.slice(8,10)} ${month} ${string.slice(0,4)}`;
    return dateResult
}

function scheduleConverter(array) {
    let obj = {};
    for(let i = 0; i < array.length; i++) {
        if(!obj[array[i].date]) {
            obj[array[i].date] = [array[i]]
        }  else {
            obj[array[i].date].push(array[i])
        }  
    }

    let result = [];
    for (data in obj) {
        let object = {
            dateName : "",
            datas: [],
        }
        object.dateName = data
        object.datas = obj[data]
        result.push(object)
    }

    return result
}



// console.log(scheduleConverter(data));
// console.log(getDate);
// console.log(getTomorrow());
// console.log(dateConvertion("2021-05-05"));
// console.log(new Date("2021-05-05").getDay());


module.exports = {
    getDate,
    getTomorrow,
    dateConvertion,
    scheduleConverter
}