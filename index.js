import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.get("/" , async (req,res) =>{
    try{
const response = await axios.get("https://api.openbrewerydb.org/v1/breweries/random");
const brewery = response.data[0];

const brewaryData ={
    id:brewery.id,
    name:brewery.name,
    city:brewery.city,
    state:brewery.state,
   brewery_type:brewery.brewery_type,
    state_province:brewery.state_province,
    country:brewery.country,
    phone:brewery.phone,
    postal_code:brewery.postal_code
};



res.render("index.ejs" ,{brewaryData});

    } catch(error){
        console.error("failed to make request:", error);
        res.status(500).send(`Error fetching brewary data`);
    }
})


app.listen(port ,() =>{
    console.log(`Server is listing on ${port}`)
});