var recognition = new webkitSpeechRecognition();
console.log(recognition);
recognition.onresult= function(event){
    var text = event.results[0][0].transcript;
    console.log(text);
    var voiceTranslate = document.getElementById("voiceInput").innerHTML=text;

    read(text);
}

function read(text){
    var voiceSpeech = new SpeechSynthesisUtterance();
    console.log(voiceSpeech);
    voiceSpeech.text = text;
    if(text == 'Alexa'){
        voiceSpeech.text = 'Assalamu alaikum sir, Ask me anything about sadh';
    }

    else if(text == 'hello man'){
        voiceSpeech.text = 'Assalamu alaikum sir, Ask me anything about sadh';
    }

    else if(text == 'hello'){
        voiceSpeech.text = 'Assalamu alaikum sir, Ask me anything about sadh';
    }

    else if(text == 'hi'){
        voiceSpeech.text = 'Assalamu alaikum sir, Ask me anything about sadh';
    }

    else if(text == 'hai'){
        voiceSpeech.text = 'Assalamu alaikum sir, Ask me anything about sadh';
    }

    else if(text == 'hai Alexa'){
        voiceSpeech.text = 'Assalamu alaikum sir, Ask me anything about sadh';
    }

    else if(text == 'hey Alexa'){
        voiceSpeech.text = 'Assalamu alaikum sir, Ask me anything about sadh';
    }

    else if(text == 'hi Alexa'){
        voiceSpeech.text = 'Assalamu alaikum sir,Ask me anything about sadh';
    }

    else if(text == "what's your name"){
        voiceSpeech.text="my name is alexa, i am personal assistant of sadh"
    }

    else if(text == "what is your name"){
        voiceSpeech.text="my name is alexa, i am personal assistant of sadh"
    }

    // fovourite 
    else if(text == "what is your favourite food"){
        voiceSpeech.text="Biriyani and ice cream, but i hate fuchka"
    }

    else if(text == "what's your favourite food"){
        voiceSpeech.text="Biriyani and ice cream, but i hate fuchka"
    }

    else if(text == "who is your favourite player"){
        voiceSpeech.text="chris gayle"
    }

    
    // want 
    else if(text == "which country you want to visit"){
        voiceSpeech.text="India, kerala"
    }

    else if(text == "how are you"){
        voiceSpeech.text="i am fine and you"
    }

    else if(text == "what are you doing now"){
        voiceSpeech.text="now i play ceram board"
    }

    else if(text == "please tell me your address"){
        voiceSpeech.text="I live in gazipur, dhaka , bangladesh"
    }

    else if(text == "who is your favourite singer"){
        voiceSpeech.text="nogor baul james"
    }

    else if(text == "who is your favourite actor"){
        voiceSpeech.text="rajpal yadav"
    }

    else if(text == "what is your favourite game"){
        voiceSpeech.text="ceram board"
    }

    else if(text == "how much money you have"){
        voiceSpeech.text="hum miskin admi hay re baba"
    }

    else if(text == "what's your aim in life"){
        voiceSpeech.text="i want to be a web developer and also businessman"
    }

    else if(text == "what is your aim in life"){
        voiceSpeech.text="i want to be a web developer and also businessman"
    }


    // fun 
    else if(text == "do you have girlfriend"){
        voiceSpeech.text="no never, me and my boss sadh single forever"
    }

    else if(text == "you have girlfriend"){
        voiceSpeech.text="no never, me and my boss sadh, single forever"
    }

    else if(text == "how much characterless Ranveer Kapoor was"){
        voiceSpeech.text="more then your ex"
    }
    else if(text == "how much characterless Ranveer Kapor was"){
        voiceSpeech.text="more then your ex"
    }

    else if(text == "how much characterless Ranbir Kapor was"){
        voiceSpeech.text="more then your ex"
    }
    else if(text == "how much characterless Ranbir Kapoor was"){
        voiceSpeech.text="more then your ex"
    }

    // condition end 
    else{
        voiceSpeech.text="SORRY, I don't understand you!!!"
    }

    document.getElementById("voiceOutput").innerHTML = voiceSpeech.text;
    window.speechSynthesis.speak(voiceSpeech);
}