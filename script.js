// async function fetchData(searchTerm) {
//   const url = "https://covid-193.p.rapidapi.com/countries";
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "3cb1e068b7msh5f7363d1341de73p1c4af2jsn242d7fff2bca",
//       "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }

// fetchData();

// const searchForm = document.getElementById("searchForm");
// const searchInput = document.getElementById("searchInput");

// searchForm.addEventListener("submit", function (event) {
//   event.preventDefault(); // Menghentikan perilaku bawaan formulir
//   const searchTerm = searchInput.value; // Mendapatkan nilai dari input pencarian
//   fetchData(searchTerm); // Memanggil fungsi fetchData dengan nilai pencarian sebagai argumen
// });
let body = document.body;
document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");
  const location = document.getElementById("location");
  const lastUpdatedElement = document.getElementById("lastUpdated");
  const tempCelciusElement = document.getElementById("tempCelcius");
  const humidityElement = document.getElementById("humidity");
  const cloudElement = document.getElementById("cloud");
  const uvElement = document.getElementById("uv");
  const windMphElement = document.getElementById("windMph");

  searchForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    const searchTerm = searchInput.value;

    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${encodeURIComponent(searchTerm)}`;
    // const url = "https://weatherapi-com.p.rapidapi.com/current.json?q=${searchTerm}";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "3cb1e068b7msh5f7363d1341de73p1c4af2jsn242d7fff2bca",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();

      // Perbarui nilai pada card-text dengan data yang diterima dari API
      // const statistics = data.response[0]; // Mengambil data dari elemen pertama dalam array response
      location.textContent = data.location.name;
      lastUpdatedElement.textContent = data.current.last_updated;
      tempCelciusElement.textContent = data.current.temp_c;
      humidityElement.textContent = data.current.humidity;
      cloudElement.textContent = data.current.cloud;
      uvElement.textContent = data.current.uv;
      windMphElement.textContent = data.current.wind_mph;
      if (data.current.temp_c <= 20) {
        body.style.backgroundColor = "royalblue";
      } else if (data.current.temp_c <= 25) {
        body.style.backgroundColor = "khaki";
      } else body.style.backgroundColor = "salmon";
    } catch (error) {
      console.error(error);
    }
  });
});

// if (response.ok) {
//   const data = await response.json();
//   console.log(data); // Lakukan sesuatu dengan data yang diterima dari API
// } else {
//   console.error('Gagal mengambil data');
// }
// } catch (error) {
// console.error('Error:', error);
// }
