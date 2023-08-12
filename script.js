const eventName = document.querySelector(".eventName");
const addEvent = document.querySelector(".add");


//value on input
eventName.addEventListener("keyup", function (event) {
  const word = event.target.value;
  
  
  //CLICK "ADD"
  addEvent.addEventListener("click", function () {

    //change backgroundcolor by name of event
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + word + "')";

////////////////////////try to save in localStorage info about event name
localStorage.setItem("word", word);


    //display event name by click "add" und hidden input
    
    const heading = document.querySelector(".heading");
    heading.textContent = word;
    const eventContainer = document.querySelector(".eventContainer");
    eventContainer.classList.add("cont");
    eventName.style.display = "none";
    const congradulationsInput = document.querySelector(
      ".congradulationsInput"
    );
    congradulationsInput.style.display = "none";
    addEvent.style.display = "none";
  });
});


// change date

document.querySelector(".eventDate").addEventListener("change", (e) => {
  let inputDate = e.target.value;
  const btnTime = document.querySelector(".add_time");

  //by click "add time" start countdown

  btnTime.addEventListener("click", function () {
    console.log(inputDate);
    const eventDate = document.querySelector(".eventDate");
    eventDate.style.display = "none";
    btnTime.style.display = "none";
    const d = new Date(inputDate);
    console.log(d);
    d.toUTCString();
    const a = d.toString();
    console.log(a);
    const b = a.slice(0, -43);
    const date = document.querySelector(".date");
    date.textContent = b;
    
////////////////////////try to save in localStorage info about date
localStorage.setItem("date", JSON.stringify(b));


    let msec = Date.parse(inputDate);

    let timerID = setInterval(countDown, 1000);

    function countDown() {
      const now = new Date();
      const diff = msec - now;
      const msInSecond = 1000;
      const msInMinute = 60 * 1000;
      const msInHour = 60 * 60 * 1000;
      const msInDay = 24 * 60 * 60 * 1000;

      const days = Math.floor(diff / msInDay);

      document.querySelector(".displayDay").textContent = days;
      const hours = Math.floor((diff % msInDay) / msInHour);
      document.querySelector(".displayHour").textContent = hours;
      const mitutes = Math.floor((diff % msInHour) / msInMinute);
      document.querySelector(".displayMinute").textContent = mitutes;
      const seconds = Math.floor((diff % msInMinute) / msInSecond);
      document.querySelector(".displaySecond").textContent = seconds;
      if (diff <= 0) {
        document.querySelector(".displayDay").textContent = 0;
        document.querySelector(".displayHour").textContent = 0;
        document.querySelector(".displayMinute").textContent = 0;
        document.querySelector(".displaySecond").textContent = 0;
        clearInterval(timerID);
        changeHeader();
      }
    }
  });
});


//change event name to congradulation text
function changeHeader() {
  const congradulationsInput = document.querySelector(
    ".congradulationsInput"
  ).value;
  const heading = document.querySelector(".heading");
  heading.style.display = "block";
  heading.textContent = congradulationsInput;
  document.body.style.backgroundImage = "none";


  //change background by countdown finished
  document.body.style.backgroundColor = "pink";
  const myVideo = document.querySelector("#myVideo");
  myVideo.setAttribute(
    "src",
    "https://cdn.glitch.global/50140578-0991-446d-9881-91516b57784e/production%20ID%204772986.mp4?v=1666954961209"
  );
}
