// this file contains code of how gemini ai work with nodejs
// to generate key go to https://console.cloud.google.com/
// to generate text go to https://ai.google.dev/api/generate-content#text_gen_text_only_prompt-JAVASCRIPT

const {GoogleGenAI}=require('@google/genai')
require('dotenv').config()
const express=require('express')
const bodyParser=require('body-parser')
const app=express()

const cors = require('cors');
app.use(cors());


// to remove markdown from the response text like *bold*, _italic_, etc.,
// we use need to install remove-markdown package
// npm install remove-markdown
const removeMd = require('remove-markdown');

app.use(express.json())
app.use(bodyParser.json())

app.get('/', (req,res)=>{
    res.send("Gemini Text Chatbot")
})

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const generateText= async(data)=>{
  try{
    const response = await ai.models.generateContent({
  model: "gemini-2.0-flash",
  contents: data,
});
console.log(response.text);
return response.text

  }catch(err){
    console.log(err)
  }
}

// generateText()

// route to display output text based on input txt
app.post('/api/content',async(req,res)=>{
    try{
          const data=req.body.userInput // match frontend key: userInput
    const result=await generateText(data)
    const plainText = removeMd(result); //remove /n, **, __, etc.

    res.send({
        "reply":plainText
    })
    }catch(err){
        res.send("error: ",err)
    }
    
})

app.listen(8000,()=>{
    console.log("Server is running a port 8000")
})

