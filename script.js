let openModalBtn=document.querySelector('.open-modal');
let closeModalBtn=document.querySelector('.close');
let para=document.querySelector('.modal-container');

 closeModal=()=>{
    para.style.display="none";
}

closeModalBtn.addEventListener('click',closeModal);
 function openModal(){
    para.style.display="block";
}

openModalBtn.addEventListener('click',openModal);

// Users should be able to see 5 buttons
    //Manhattan   Brooklyn  //Queens  //Staten Island   //Bronx


//Grab hold of buttons   
// let amt=parseInt(document.querySelector('.amt').value);


let brooklynBtn=document.querySelector('.brooklyn');
let queensBtn=document.querySelector('.queens');
let bronxBtn=document.querySelector('.bronx');
let islandBtn=document.querySelector('.island');
let manhattanBtn=document.querySelector('.manhattan');
let mylist=document.querySelector('.my_list');



//Input Box        Users can put number of How many complaints to see
//Grab hold of input box
//Grab hold of information entered in input box


// Listen for when user clicks one of five buttons
 //loop query all 


 //If user clicks on Manhattan button should show certain info pertaining to that state
 //If user clicks on Brooklyn button should show certain info pertaining to that state
 //If user clicks on Queens button should show certain info pertaining to that state
  //If user clicks on Staten Island  button should show certain info pertaining to that state
   //If user clicks on Bronx button should show certain info pertaining to that state

////////*****************ONLY WANT COMPLAINTS HANDLED BY NYPD******************* *//////////Filter by agency




 //Display list of complaints should display on page DOM manipulation
 //Number of complaint depend on number entered in input box
        //parse Int value


//while complaints are shown have a button that states "toggle police response

//The toggle police response button should clicked
//listen for click
//how police responded only show response for the one complaint not entire list


// console.log('hi');


// const url="https://data.cityofnewyork.us/resource/fhrw-4uyv.json?agency=NYPD";

// fetch (url)
//     .then(response=>{
//         return response.json();
//         console.log("success");
//     })
    
//     .catch(error=>{
//         console.log("something went wrong");
//     });


//if clicks get fetch info
//display the info
    function manhattanSubmit(event){
        event.preventDefault();
        let amt=parseInt(document.querySelector('.amt').value)
        console.log(amt);
        
        // console.log(parseInt(document.querySelector('.amt').value));
        // const url="https://data.cityofnewyork.us/resource/fhrw-4uyv.json?agency=NYPD";

        const url="https://data.cityofnewyork.us/resource/fhrw-4uyv.json?agency=NYPD&borough=MANHATTAN"

        fetch(url)
        .then(response=>{
            return response.json();
        })

        .then(response=>{
            for (let i=0;i<amt;i++){
                console.log(response[i].descriptor)



                ///////////
                //instead of console.log info
                //display the info in a list on the screen
                //create an li element 
                //append that element to mylist
                let whatHappenedBtn=document.createElement('button');
                whatHappenedBtn.innerHTML="What Did The Police Do?"


                let listEl=document.createElement('li');
                listEl.innerHTML=response[i].descriptor;
                mylist.appendChild(listEl);
                listEl.appendChild(whatHappenedBtn);



                whatHappenedBtn.addEventListener('click',()=>{
                    let thisHere=document.createElement('p');
                    thisHere.innerHTML=response[i].resolution_description;
                    listEl.appendChild(thisHere);

                })
                // if(listEl>0){
                //     mylist.removeChild(listEl);
                // }

                /////////

            }

            // console.log(response);

         })
         .catch(error=>{
             console.log("error")
         })
    }





    

//if clicks get fetch info
//display the info
function queensSubmit(event){
    event.preventDefault();
    let amt=parseInt(document.querySelector('.amt').value)
        console.log(amt);

    // const url="https://data.cityofnewyork.us/resource/fhrw-4uyv.json?agency=NYPD";

    const url="https://data.cityofnewyork.us/resource/fhrw-4uyv.json?agency=NYPD&borough=QUEENS"

    fetch(url)
    .then(response=>{
        return response.json();
    })

    .then(response=>{
        for (let i=0;i<amt;i++){
            console.log(response[i].descriptor)



            ///////////
            //instead of console.log info
            //display the info in a list on the screen
            //create an li element 
            //append that element to mylist
            let whatHappenedBtn=document.createElement('button');
            whatHappenedBtn.innerHTML="What Did The Police Do?"


            let listEl=document.createElement('li');
            listEl.innerHTML=response[i].descriptor;
            mylist.appendChild(listEl);
            listEl.appendChild(whatHappenedBtn);



            whatHappenedBtn.addEventListener('click',()=>{
                let thisHere=document.createElement('p');
                thisHere.innerHTML=response[i].resolution_description;
                listEl.appendChild(thisHere);

            })
            // if(listEl>0){
            //     mylist.removeChild(listEl);
            // }

            /////////

        }

        // console.log(response);

     })
     .catch(error=>{
         console.log("error")
     })
}








function brooklynSubmit(event){
    event.preventDefault();
    let amt=parseInt(document.querySelector('.amt').value)
        console.log(amt);

    // const url="https://data.cityofnewyork.us/resource/fhrw-4uyv.json?agency=NYPD";

    const url="https://data.cityofnewyork.us/resource/fhrw-4uyv.json?agency=NYPD&borough=BROOKLYN"

    fetch(url)
    .then(response=>{
        return response.json();
    })

    .then(response=>{
        for (let i=0;i<amt;i++){
            console.log(response[i].descriptor)



            ///////////
            //instead of console.log info
            //display the info in a list on the screen
            //create an li element 
            //append that element to mylist
            let whatHappenedBtn=document.createElement('button');
            whatHappenedBtn.innerHTML="What Did The Police Do?"


            let listEl=document.createElement('li');
            listEl.innerHTML=response[i].descriptor;
            mylist.appendChild(listEl);
            listEl.appendChild(whatHappenedBtn);



            whatHappenedBtn.addEventListener('click',()=>{
                let thisHere=document.createElement('p');
                thisHere.innerHTML=response[i].resolution_description;
                listEl.appendChild(thisHere);

            })
            // if(listEl>0){
            //     mylist.removeChild(listEl);
            // }

            /////////

        }

        // console.log(response);

     })
     .catch(error=>{
         console.log("error")
     })
}









function bronxSubmit(event){
    event.preventDefault();
    let amt=parseInt(document.querySelector('.amt').value)
        console.log(amt);

    // const url="https://data.cityofnewyork.us/resource/fhrw-4uyv.json?agency=NYPD";

    const url="https://data.cityofnewyork.us/resource/fhrw-4uyv.json?agency=NYPD&borough=BRONX"

    fetch(url)
    .then(response=>{
        return response.json();
    })

    .then(response=>{
        for (let i=0;i<amt;i++){
            console.log(response[i].descriptor)



            ///////////
            //instead of console.log info
            //display the info in a list on the screen
            //create an li element 
            //append that element to mylist
            let whatHappenedBtn=document.createElement('button');
            whatHappenedBtn.innerHTML="What Did The Police Do?"


            let listEl=document.createElement('li');
            listEl.innerHTML=response[i].descriptor;
            mylist.appendChild(listEl);
            listEl.appendChild(whatHappenedBtn);



            whatHappenedBtn.addEventListener('click',()=>{
                let thisHere=document.createElement('p');
                thisHere.innerHTML=response[i].resolution_description;
                listEl.appendChild(thisHere);

            })
            // if(listEl>0){
            //     mylist.removeChild(listEl);
            // }

            /////////

        }

        // console.log(response);

     })
     .catch(error=>{
         console.log("error")
     })
}










function islandSubmit(event){
    event.preventDefault();
    let amt=parseInt(document.querySelector('.amt').value)
        console.log(amt);

    // const url="https://data.cityofnewyork.us/resource/fhrw-4uyv.json?agency=NYPD";

    const url="https://data.cityofnewyork.us/resource/fhrw-4uyv.json?agency=NYPD&borough=STATEN ISLAND"

    fetch(url)
    .then(response=>{
        return response.json();
    })

    .then(response=>{
        for (let i=0;i<amt;i++){
            console.log(response[i].descriptor)



            ///////////
            //instead of console.log info
            //display the info in a list on the screen
            //create an li element 
            //append that element to mylist
            let whatHappenedBtn=document.createElement('button');
            whatHappenedBtn.innerHTML="What Did The Police Do?"


            let listEl=document.createElement('li');
            listEl.innerHTML=response[i].descriptor;
            mylist.appendChild(listEl);
            listEl.appendChild(whatHappenedBtn);



            whatHappenedBtn.addEventListener('click',()=>{
                let thisHere=document.createElement('p');
                thisHere.innerHTML=response[i].resolution_description;
                listEl.appendChild(thisHere);

            })
            // if(listEl>0){
            //     mylist.removeChild(listEl);
            // }

            /////////

        }

        // console.log(response);

     })
     .catch(error=>{
         console.log("error")
     })
}
