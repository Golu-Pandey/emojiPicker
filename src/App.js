import React, { useState } from 'react';

function App() {
 
  let timming =[];
  let linking =[];

  function PUT(put){
    this.put=put;
    this.completed=false;
  }

  const Imoji = (eve) =>{
    
    let pmonth=new Date().toLocaleString('default', {month: 'short' });
    let pdate=new Date().getDate();
    let pyear=new Date().getFullYear();
    let p= new Date().toLocaleTimeString();

     let CHOSEN;
     let TIME ; 
    
    CHOSEN=new PUT(eve.target.src);
    linking.push(CHOSEN);

    TIME= new PUT(pdate+" "+pmonth+" "+pyear+" "+p);
    timming.push(TIME)
    alert("YOU clicked one Emoji");
  
    localStorage.setItem("time", JSON.stringify(timming));
    localStorage.setItem("link", JSON.stringify(linking)); 
  
  }
  
  //localStorage.clear();
      
    if(localStorage.getItem('time')==null){
       timming =[];
      }
     else{
       timming =JSON.parse(localStorage.getItem('time'));
       }

      
    if(localStorage.getItem('link')==null){
       linking =[];
      }
     else{
        linking =JSON.parse(localStorage.getItem('link'));
      } 


  const [showchosen, setshowChosen] = useState(" ");
  
  const showall = ()=>{
      setshowChosen(<>
    <div>
    <button onClick={hideall} className="BACK">Back</button>
    
    {linking.map((value, index1)=>
      {
          return(<>
                 <div className="OUTtimeline">
                   <a className="Outarrow"> &#8595;</a>
                   <a className="OutTime">{timming[index1].put}</a>
                   <img class="emoji-img" src={linking[index1].put} />
                  </div>
              </> );
      }
       )
    }  

    </div>
    </>);
    };

   const hideall = () =>{
    setshowChosen(" ");
     };

 
     return(<>
  
      <div className="frontendOUT">

        <div className="frontend">
          <div className="feeling"><span className="feelingspn">How are you feeling right now?</span></div>
          <h5 className="clickIt"><span className="clickItspn">CLICK ON AN EMOJI TO TRACK YOUR MOOD</span></h5>
        
      <div className="allEmoji">  
      <img class="emoji-img" onClick={Imoji} className="EMOJI" 
       src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@6.0.1/img/apple/64/1f618.png"></img>
      <img class="emoji-img" onClick={Imoji}  className="EMOJI"
      src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@6.0.1/img/apple/64/1f601.png"></img>
      <img class="emoji-img" onClick={Imoji}   className="EMOJI"
      src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@6.0.1/img/apple/64/1f602.png"></img>
      <img class="emoji-img" onClick={Imoji}   className="EMOJI"
      src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@6.0.1/img/apple/64/1f610.png"></img>
      <img class="emoji-img" onClick={Imoji}   className="EMOJI"
      src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@6.0.1/img/apple/64/1f914.png"></img>
      <img class="emoji-img" onClick={Imoji}   className="EMOJI"
      src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@6.0.1/img/apple/64/1f60d.png"></img>
      <img class="emoji-img" onClick={Imoji}   className="EMOJI"
      src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@6.0.1/img/apple/64/1f614.png"></img>
      <img class="emoji-img" onClick={Imoji}   className="EMOJI"
      src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@6.0.1/img/apple/64/1f633.png"></img>
      <img class="emoji-img" onClick={Imoji}   className="EMOJI"
      src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@6.0.1/img/apple/64/1f62d.png"></img>
      </div>
       
      <div onClick={showall} className="veiwmood">Veiw Timeline<a className="arrowmark">&nbsp;&#187; </a> </div>
      </div>  

      <div className="showchosen">{showchosen}</div>
      
      </div>
     </>);
}

export default App;

