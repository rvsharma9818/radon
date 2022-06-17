let axios = require("axios");

exports.getvaccine = async (req, res) =>{

    try {
        let district_id =req.query.district_id;
        let date = req.query.date;
        let options = {
            method: 'get',
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_id}&date=${date}`
        }
        let result = await axios(options);
        res.status(200).send( result.data)
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

exports.getStates = async (req, res) => {
  try {
    let city = [
      "Bengaluru",
      "Mumbai",
      "Delhi",
      "Kolkata",
      "Chennai",
      "London",
      "Moscow",
    ];
    let cityarr = [];
    for (let i = 0; i < city.length; i++) {
      let weather = { cities: city[i] };
      let result = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city[i]}&appid=09bbae4747b8a463e4bb7e76baa0473a`
      );
      weather.temp = result.data.main.temp;
      cityarr.push(weather);
    }
    let sorted = cityarr.sort((a, b) => {
      return a.temp - b.temp;
    });

    res.status(200).send({ msg: sorted, status: true });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

exports.memehandler = async (req, res) => {
  try {
    let template_id = req.query.template_id;
    let text0 = req.query.text0;
    let text1 = req.query.text1;
    let username = req.query.username;
    let password = req.query.password;

    let options = {
      method: "post",
      url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`,
    };
    let result = await axios(options);

    res.status(200).send({data:result.data})
  } catch (error) {
    res.status(500).send(error)

  }
};
